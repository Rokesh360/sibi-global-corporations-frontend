import React, { useState } from "react";
import { FileTextOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 30,
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * QuoteModal
 *
 * A standalone "Get a Free Quote" popup form.
 *
 * Props:
 * - isOpen (bool): whether the modal is visible
 * - onClose (fn): called when the modal should close (backdrop click, X button, or after success)
 * - onSubmit (fn, optional): async fn(formData) called on submit.
 *     If omitted, defaults to a simulated 1.5s API call.
 */
export default function QuoteModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetAndClose = () => {
    setSubmitSuccess(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose?.();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simulated API call - replace with your actual endpoint via the onSubmit prop
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
                  <h3>Get a Free Quote</h3>
                  <p>Fill in the form and we'll get back to you within 24 hours</p>
                </div>
              </div>
              <button className="floating-modal-close" onClick={handleClose}>
                <CloseOutlined />
              </button>
            </div>

            {/* Modal Body - Form */}
            {!submitSuccess ? (
              <form className="floating-modal-form" onSubmit={handleSubmit}>
                <div className="floating-form-group">
                  <label htmlFor="quote-name">
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="quote-email">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="quote-phone">
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="floating-form-group">
                  <label htmlFor="quote-message">
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your project requirements"
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
                      Send Request
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Message */
              <motion.div
                className="floating-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="floating-success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your quote request has been sent successfully.</p>
                <p className="floating-success-sub">
                  Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            {/* Modal Footer */}
            <div className="floating-modal-footer">
              <span>🔒 Your information is secure with us</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}