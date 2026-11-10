import FadeIn from "./FadeIn";
import type { Course } from "@/lib/courses";

// Days of the week in German (index = weekday from the database)
const dayNames = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

// Default visible range: rows 08:00 … 19:00, extended when a course needs it
const DEFAULT_FIRST_HOUR = 8;
const DEFAULT_END_HOUR = 20;

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// A block occupies one cell in the grid: usually one course, several when
// courses of the same day would land in overlapping hour rows.
interface Block {
  weekday: number;
  startHour: number;
  endHour: number;
  courses: Course[];
}

// Each course starts in the row of its start hour and spans as many rows as
// it lasts in (rounded) hours – a 60-minute course at 19:30 stays in one row.
const buildBlocks = (courses: Course[]) => {
  const blocks: Block[] = [];
  const sorted = [...courses].sort(
    (a, b) => a.weekday - b.weekday || toMinutes(a.startTime) - toMinutes(b.startTime)
  );
  for (const course of sorted) {
    const start = toMinutes(course.startTime);
    const startHour = Math.floor(start / 60);
    const span = Math.max(1, Math.round((toMinutes(course.endTime) - start) / 60));
    const last = blocks[blocks.length - 1];
    if (last && last.weekday === course.weekday && startHour < last.endHour) {
      last.courses.push(course);
      last.endHour = Math.max(last.endHour, startHour + span);
    } else {
      blocks.push({ weekday: course.weekday, startHour, endHour: startHour + span, courses: [course] });
    }
  }
  return blocks;
};

// "ab TT.MM." while the start date still lies in the future (German time)
const startNote = (startsOn: string | null, today: string) => {
  if (!startsOn || startsOn <= today) return null;
  const [, month, day] = startsOn.split("-");
  return `ab ${day}.${month}.`;
};

function CourseCard({
  course,
  today,
  className = "",
  style,
}: {
  course: Course;
  today: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const note = startNote(course.startsOn, today);
  return (
    <div
      className={`${className}timetable-course timetable-course-${course.color}`}
      style={style}
      title={`${course.name}${course.trainer ? ` - ${course.trainer}` : ""}`}
    >
      <div className="course-name">{course.name}</div>
      {course.trainer && <div className="course-instructor">{course.trainer}</div>}
      <div className="course-time">{course.startTime} - {course.endTime}</div>
      {note && <div className="course-note">{note}</div>}
    </div>
  );
}

export default function CourseTimetable({ courses }: { courses: Course[] }) {
  const blocks = buildBlocks(courses);
  const firstHour = Math.min(DEFAULT_FIRST_HOUR, ...blocks.map((b) => b.startHour));
  const endHour = Math.min(24, Math.max(DEFAULT_END_HOUR, ...blocks.map((b) => b.endHour)));
  const hours = Array.from({ length: endHour - firstHour }, (_, i) => firstHour + i);
  const dayCount = courses.some((c) => c.weekday === 6) ? 7 : 6;
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" }).format(new Date());

  // Explicit placement: header row is 1, the first hour is row 2; the time
  // label column is 1, Monday is column 2.
  const rowOf = (hour: number) => hour - firstHour + 2;
  const covered = new Set<string>();
  for (const block of blocks) {
    for (let hour = block.startHour; hour < block.endHour; hour++) covered.add(`${block.weekday}-${hour}`);
  }

  return (
    <FadeIn direction="up">
      <div className="timetable-container">
        <div
          className="timetable-grid"
          style={dayCount === 7 ? { gridTemplateColumns: "80px repeat(7, 1fr)" } : undefined}
        >
          {/* Empty corner cell */}
          <div className="timetable-cell timetable-header timetable-corner"></div>

          {/* Day headers */}
          {dayNames.slice(0, dayCount).map((name) => (
            <div key={`header-${name}`} className="timetable-cell timetable-header timetable-day-header">
              <div className="day-name">{name}</div>
            </div>
          ))}

          {/* Time labels and empty cells */}
          {hours.flatMap((hour) => [
            <div
              key={`time-${hour}`}
              className="timetable-cell timetable-time-label"
              style={{ gridColumn: 1, gridRow: rowOf(hour) }}
            >
              <span className="time-text">{`${hour.toString().padStart(2, "0")}:00`}</span>
            </div>,
            ...Array.from({ length: dayCount }, (_, weekday) =>
              covered.has(`${weekday}-${hour}`) ? null : (
                <div
                  key={`${weekday}-${hour}`}
                  className="timetable-cell timetable-empty"
                  style={{ gridColumn: weekday + 2, gridRow: rowOf(hour) }}
                ></div>
              )
            ),
          ])}

          {/* Courses */}
          {blocks.map((block) => {
            const placement = {
              gridColumn: block.weekday + 2,
              gridRow: `${rowOf(block.startHour)} / span ${block.endHour - block.startHour}`,
            };
            return block.courses.length === 1 ? (
              <CourseCard
                key={block.courses[0].id}
                course={block.courses[0]}
                today={today}
                className="timetable-cell "
                style={placement}
              />
            ) : (
              <div
                key={block.courses.map((c) => c.id).join("+")}
                className="timetable-cell timetable-course-group"
                style={placement}
              >
                {block.courses.map((course) => (
                  <CourseCard key={course.id} course={course} today={today} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
