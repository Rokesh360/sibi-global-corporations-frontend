import React, { useState } from "react";
import {
  FileTextOutlined,
  CloseOutlined,
  UploadOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send, Briefcase } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 30,
    transition: { duration: 0.3 },
  },
};

export default function ApplyModal({ isOpen, onClose, jobTitle, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: jobTitle || "",
    message: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  React.useEffect(() => {
    if (jobTitle) {
      setFormData((prev) => ({ ...prev, position: jobTitle }));
    }
  }, [jobTitle]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] || null });
  };

  const resetAndClose = () => {
    setSubmitSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      resume: null,
    });
    onClose?.();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSubmitSuccess(true);
      setTimeout(resetAndClose, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitSuccess(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="floating-modal-overlay"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <motion.div
            className="floating-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="floating-modal-header">
              <div className="floating-modal-title">
                <div className="modal-title-icon">
                  <FileTextOutlined />
                </div>
                <div>
                  <h3>{jobTitle ? "Apply for Position" : "Submit Your Resume"}</h3>
                  <p>
                    {jobTitle
                      ? `You're applying for: ${jobTitle}`
                      : "Fill in the form and we'll get back to you"}
                  </p>
                </div>
              </div>
              <button className="floating-modal-close" onClick={handleClose}>
                <CloseOutlined />
              </button>
            </div>

            {/* Modal Body */}
            {!submitSuccess ? (
              <form
                className="floating-modal-form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="floating-form-group">
                  <label htmlFor="apply-name">
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="apply-name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="apply-email">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="apply-email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="apply-phone">
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="apply-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="apply-position">
                    <Briefcase size={16} />
                    Position
                  </label>
                  <input
                    type="text"
                    id="apply-position"
                    name="position"
                    placeholder="e.g. Site Engineer"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* ============ RESUME UPLOAD ============ */}
                <div className="floating-form-group">
                  <label htmlFor="apply-resume">
                    <PaperClipOutlined />
                    Upload Resume
                  </label>
                  <label htmlFor="apply-resume" className="resume-upload-box">
                    <UploadOutlined className="resume-upload-icon" />
                    <span className="resume-upload-text">
                      {formData.resume
                        ? formData.resume.name
                        : "Click to upload (PDF, DOC, DOCX)"}
                    </span>
                  </label>
                  <input
                    type="file"
                    id="apply-resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="resume-upload-input"
                    required
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="apply-message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="apply-message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your experience and requirements"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="floating-form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="floating-loader" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                className="floating-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="floating-success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your application has been submitted successfully.</p>
                <p className="floating-success-sub">
                  Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}