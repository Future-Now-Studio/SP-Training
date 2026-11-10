import FadeIn from "./FadeIn";
import CourseContactButtons from "./CourseContactButtons";

/** Ersatz für das Raster, wenn der Kursplan nicht geladen werden konnte. */
export default function TimetableUnavailable() {
  return (
    <FadeIn direction="up">
      <div className="timetable-unavailable" role="status">
        <div className="timetable-unavailable-icon">
          <i className="fa-solid fa-calendar-xmark"></i>
        </div>
        <h2 className="timetable-unavailable-title">Der Kursplan ist gerade nicht verfügbar.</h2>
        <p className="timetable-unavailable-text">
          Bitte melde dich direkt bei uns – wir sagen dir gerne, welche Kurse aktuell stattfinden.
        </p>
        <CourseContactButtons />
      </div>
    </FadeIn>
  );
}
