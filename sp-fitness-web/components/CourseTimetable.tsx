"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import CourseBookingDialog from "./CourseBookingDialog";

// Generate time slots from 9:00 to 20:00 (1 hour intervals)
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 20; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

// Days of the week in German
const days = [
  { name: "Montag" },
  { name: "Dienstag" },
  { name: "Mittwoch" },
  { name: "Donnerstag" },
  { name: "Freitag" },
  { name: "Samstag" },
];

const timeSlots = generateTimeSlots();

// Course data structure
// Format: { day: 0-5, startTime: "10:00", endTime: "11:00", name: "Course Name", instructor: "Instructor", color: "blue", icon: "fa-icon" }
// Day: 0=Montag, 1=Dienstag, 2=Mittwoch, 3=Donnerstag, 4=Freitag, 5=Samstag
const courses: Array<{
  day: number;
  startTime: string;
  endTime: string;
  name: string;
  instructor?: string;
  color?: string;
  icon?: string;
}> = [
  // Montag
  { day: 0, startTime: "10:15", endTime: "11:15", name: "Pilates", instructor: "Olya", color: "purple", icon: "fa-solid fa-spa" },
  { day: 0, startTime: "17:00", endTime: "18:00", name: "Wirbelsäulengymnastik (WSG)", instructor: "Sebastian", color: "green", icon: "fa-solid fa-spine" },
  { day: 0, startTime: "19:15", endTime: "20:15", name: "Hatha Yoga", instructor: "Mary", color: "blue", icon: "fa-solid fa-om" },
  
  // Dienstag
  { day: 1, startTime: "09:00", endTime: "10:00", name: "Funktional Zirkeltraining", instructor: "Sebastian", color: "orange", icon: "fa-solid fa-dumbbell" },
  { day: 1, startTime: "18:00", endTime: "19:00", name: "Funktional Zirkeltraining", instructor: "Sebastian", color: "orange", icon: "fa-solid fa-dumbbell" },
  { day: 1, startTime: "19:15", endTime: "20:15", name: "Yoga Nidra", instructor: "Paula", color: "blue-dark", icon: "fa-solid fa-moon" },
  
  // Mittwoch
  { day: 2, startTime: "09:00", endTime: "09:55", name: "Pilates", instructor: "Elisa", color: "purple", icon: "fa-solid fa-spa" },
  { day: 2, startTime: "10:05", endTime: "11:00", name: "Vinyasa Yoga", instructor: "Elisa", color: "blue-medium", icon: "fa-solid fa-om" },
  { day: 2, startTime: "18:00", endTime: "19:00", name: "Hatha Yoga", instructor: "Mary", color: "blue", icon: "fa-solid fa-om" },
  
  // Donnerstag
  { day: 3, startTime: "10:00", endTime: "11:00", name: "Funktional Zirkeltraining", instructor: "Sebastian", color: "orange", icon: "fa-solid fa-dumbbell" },
  { day: 3, startTime: "17:00", endTime: "18:00", name: "Hatha Yoga", instructor: "Elisa", color: "blue", icon: "fa-solid fa-om" },
  { day: 3, startTime: "18:15", endTime: "19:15", name: "Pilates", instructor: "Elisa", color: "purple", icon: "fa-solid fa-spa" },
  { day: 3, startTime: "19:30", endTime: "20:30", name: "Funktional Zirkeltraining", instructor: "Dustin", color: "orange", icon: "fa-solid fa-dumbbell" },
  
  // Freitag
  { day: 4, startTime: "10:15", endTime: "11:15", name: "Hatha Yoga", instructor: "Paula", color: "blue", icon: "fa-solid fa-om" },
  { day: 4, startTime: "18:00", endTime: "19:00", name: "Pilates", instructor: "Olya", color: "purple", icon: "fa-solid fa-spa" },
  
  // Samstag
  { day: 5, startTime: "10:00", endTime: "11:00", name: "Pilates", instructor: "Olya", color: "purple", icon: "fa-solid fa-spa" },
  { day: 5, startTime: "11:30", endTime: "12:30", name: "Funktional Zirkeltraining", instructor: "Sebastian", color: "orange", icon: "fa-solid fa-dumbbell" },
];

// Helper function to check if a time slot has a course
// Matches courses that start in this hour slot (handles times like 10:15, 19:15, etc.)
// If multiple courses start in the same hour, returns the one that starts earliest
const getCourseForSlot = (day: number, time: string) => {
  const slotHour = parseInt(time.split(':')[0]);
  const coursesInSlot = courses
    .filter(course => {
      const courseStartHour = parseInt(course.startTime.split(':')[0]);
      return course.day === day && courseStartHour === slotHour;
    })
    .sort((a, b) => {
      // Sort by start time (minutes) to get the earliest one
      const aMinutes = parseInt(a.startTime.split(':')[1]) || 0;
      const bMinutes = parseInt(b.startTime.split(':')[1]) || 0;
      return aMinutes - bMinutes;
    });
  
  return coursesInSlot[0] || null;
};

// Helper function to get course duration in hours
const getCourseDuration = (startTime: string, endTime: string) => {
  const start = parseInt(startTime.split(':')[0]);
  const end = parseInt(endTime.split(':')[0]);
  return end - start;
};

export default function CourseTimetable() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCourseClick = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <FadeIn direction="up">
        <div className="timetable-container">
          <div className="timetable-grid">
            {/* Empty corner cell */}
            <div className="timetable-cell timetable-header timetable-corner"></div>
            
            {/* Day headers */}
            {days.map((day, index) => (
              <div key={`header-${index}`} className="timetable-cell timetable-header timetable-day-header">
                <div className="day-name">{day.name}</div>
              </div>
            ))}

            {/* Time slots with course cells - flattened structure for grid */}
            {timeSlots.flatMap((time, timeIndex) => {
              const cells = [];
              
              // Time label
              cells.push(
                <div key={`time-${timeIndex}`} className="timetable-cell timetable-time-label">
                  <span className="time-text">{time}</span>
                </div>
              );
              
              // Course cells for each day - always render all cells to maintain grid structure
              days.forEach((day, dayIndex) => {
                const course = getCourseForSlot(dayIndex, time);
                const slotHour = parseInt(time.split(':')[0]);
                
                if (course) {
                  const courseStartHour = parseInt(course.startTime.split(':')[0]);
                  const isCourseStart = courseStartHour === slotHour;
                  
                  if (isCourseStart) {
                    const duration = getCourseDuration(course.startTime, course.endTime);
                    cells.push(
                      <div
                        key={`${dayIndex}-${timeIndex}`}
                        className={`timetable-cell timetable-course timetable-course-${course.color || 'default'}`}
                        style={{ gridRow: `span ${duration}` }}
                        title={`${course.name}${course.instructor ? ` - ${course.instructor}` : ''}`}
                        onClick={() => handleCourseClick(course)}
                      >
                        <div className="course-name">{course.name}</div>
                        {course.instructor && (
                          <div className="course-instructor">{course.instructor}</div>
                        )}
                        <div className="course-time">{course.startTime} - {course.endTime}</div>
                      </div>
                    );
                  } else {
                    // This is part of a multi-hour course - render invisible placeholder
                    cells.push(
                      <div
                        key={`${dayIndex}-${timeIndex}`}
                        className="timetable-cell timetable-placeholder"
                        style={{ visibility: 'hidden' }}
                      ></div>
                    );
                  }
                } else {
                  // Empty cell
                  cells.push(
                    <div
                      key={`${dayIndex}-${timeIndex}`}
                      className="timetable-cell timetable-empty"
                    ></div>
                  );
                }
              });
              
              return cells;
            })}
          </div>
        </div>
      </FadeIn>

      {/* Course Booking Dialog */}
      <CourseBookingDialog
        course={selectedCourse}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}

