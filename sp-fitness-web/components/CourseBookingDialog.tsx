"use client";

import { useState } from "react";
import Link from "next/link";

interface Course {
  day: number;
  startTime: string;
  endTime: string;
  name: string;
  instructor?: string;
  color?: string;
  icon?: string;
}

interface CourseBookingDialogProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

// Helper function to calculate next occurrence of course day/time
const calculateNextBookingDate = (day: number, startTime: string): string => {
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
  // Convert our day (0=Monday) to JavaScript day (0=Sunday)
  // Our days: 0=Monday, 1=Tuesday, 2=Wednesday, 3=Thursday, 4=Friday, 5=Saturday
  // JS days: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
  // So our day 0 (Monday) = JS day 1, our day 1 (Tuesday) = JS day 2, etc.
  const targetDay = day + 1;
  
  // Calculate days until next occurrence
  let daysUntil = targetDay - currentDay;
  if (daysUntil <= 0) {
    daysUntil += 7; // Next week
  }
  
  // Create date for next occurrence
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntil);
  
  // Format as YYYY-MM-DD
  const year = nextDate.getFullYear();
  const month = String(nextDate.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(nextDate.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${dayOfMonth}`;
};

// Helper function to format date in German format (DD.MM.YYYY)
const formatDateGerman = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  return `${day}.${month}.${year}`;
};

export default function CourseBookingDialog({ course, isOpen, onClose }: CourseBookingDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: true,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen || !course) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail-Adresse ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte gib eine gültige E-Mail-Adresse an";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const bookingDate = calculateNextBookingDate(course.day, course.startTime);
      
      // Format timestamp for Google Sheets: YYYY-MM-DD HH:MM:SS
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
      const payload = {
        name: formData.name,
        course: course.name,
        trainer: course.instructor || "",
        "booking-date": bookingDate,
        timestamp: timestamp,
        email: formData.email,
        consent: formData.consent,
      };

      const response = await fetch(
        "https://n8n.future-now.studio/webhook/f8987133-a895-45f4-851e-a13bb604ce48",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "SP-Authentication": "c7~/wi7cIL8>",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Anfrage");
      }

      setSubmitStatus("success");
      // Reset form after 2 seconds and close dialog
      setTimeout(() => {
        setFormData({ name: "", email: "", consent: true });
        setSubmitStatus("idle");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Booking error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="qualifications-modal-overlay" onClick={handleOverlayClick}>
      <div className="qualifications-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qualifications-modal-header">
          <h2 className="qualifications-modal-title">Kursanmeldung</h2>
          <button
            className="qualifications-modal-close"
            onClick={onClose}
            aria-label="Schließen"
            disabled={isSubmitting}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <div className="qualifications-list" style={{ padding: "2rem 3rem" }}>
          {/* Course Info */}
          <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "2px solid rgba(0, 90, 255, 0.1)" }}>
            <h3 style={{ fontFamily: "var(--font-jockey-one), system-ui", fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--brand-dark)" }}>
              {course.name}
            </h3>
            {course.instructor && (
              <p style={{ fontFamily: "var(--font-lato), system-ui", color: "#666", marginBottom: "0.25rem" }}>
                <strong>Trainer:</strong> {course.instructor}
              </p>
            )}
            <p style={{ fontFamily: "var(--font-lato), system-ui", color: "#666", margin: 0 }}>
              <strong>Zeit:</strong> {course.startTime} - {course.endTime}
            </p>
            <p style={{ fontFamily: "var(--font-lato), system-ui", color: "#666", marginTop: "0.5rem", marginBottom: 0 }}>
              <strong>Nächstes Datum:</strong> {formatDateGerman(calculateNextBookingDate(course.day, course.startTime))}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="booking-name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-lato), system-ui",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--brand-dark)",
                }}
              >
                Name *
              </label>
              <input
                type="text"
                id="booking-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: `2px solid ${errors.name ? "#ef4444" : "rgba(0, 90, 255, 0.2)"}`,
                  borderRadius: "0.5rem",
                  fontFamily: "var(--font-lato), system-ui",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--brand-blue)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.name ? "#ef4444" : "rgba(0, 90, 255, 0.2)";
                }}
              />
              {errors.name && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", margin: 0 }}>
                  {errors.name}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="booking-email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-lato), system-ui",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--brand-dark)",
                }}
              >
                E-Mail *
              </label>
              <input
                type="email"
                id="booking-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: `2px solid ${errors.email ? "#ef4444" : "rgba(0, 90, 255, 0.2)"}`,
                  borderRadius: "0.5rem",
                  fontFamily: "var(--font-lato), system-ui",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  backgroundColor: errors.email ? "rgba(239, 68, 68, 0.05)" : "#ffffff",
                }}
                onFocus={(e) => {
                  if (!errors.email) {
                    e.target.style.borderColor = "var(--brand-blue)";
                    e.target.style.backgroundColor = "#ffffff";
                  }
                }}
                onBlur={(e) => {
                  if (errors.email) {
                    e.target.style.borderColor = "#ef4444";
                    e.target.style.backgroundColor = "rgba(239, 68, 68, 0.05)";
                  } else {
                    e.target.style.borderColor = "rgba(0, 90, 255, 0.2)";
                    e.target.style.backgroundColor = "#ffffff";
                  }
                }}
              />
              {errors.email && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", margin: 0 }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "var(--font-lato), system-ui",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={{
                    marginRight: "0.75rem",
                    marginTop: "0.25rem",
                    width: "1.25rem",
                    height: "1.25rem",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontSize: "0.875rem", color: "#666", lineHeight: "1.5" }}>
                  Ich möchte eine einmalige Bestätigung über diese Buchung erhalten.{" "}
                  <Link 
                    href="/datenschutz" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: "var(--brand-blue)", 
                      textDecoration: "underline",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Datenschutzerklärung
                  </Link>
                </span>
              </label>
            </div>

            {submitStatus === "success" && (
              <div
                style={{
                  padding: "1rem",
                  background: "#10b981",
                  color: "#ffffff",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  fontFamily: "var(--font-lato), system-ui",
                }}
              >
                <i className="fa-solid fa-check-circle" style={{ marginRight: "0.5rem" }}></i>
                Anmeldung erfolgreich gesendet!
                {formData.consent && (
                  <div style={{ marginTop: "0.75rem", fontSize: "0.875rem", lineHeight: "1.5" }}>
                    Du erhältst in Kürze eine Bestätigungs-E-Mail. Bitte schaue auch in deinem Spam-Ordner nach.
                  </div>
                )}
              </div>
            )}

            {submitStatus === "error" && (
              <div
                style={{
                  padding: "1rem",
                  background: "#ef4444",
                  color: "#ffffff",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  fontFamily: "var(--font-lato), system-ui",
                }}
              >
                <i className="fa-solid fa-exclamation-circle" style={{ marginRight: "0.5rem" }}></i>
                Fehler beim Senden. Bitte versuche es erneut.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "1rem 2rem",
                background: isSubmitting ? "#ccc" : "var(--brand-blue)",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                fontFamily: "var(--font-lato), system-ui",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = "var(--brand-blue-hover)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = "var(--brand-blue)";
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: "0.5rem" }}></i>
                  Wird gesendet...
                </>
              ) : (
                "Anmeldung absenden"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

