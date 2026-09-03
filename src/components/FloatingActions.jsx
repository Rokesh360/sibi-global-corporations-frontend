import React, { useState } from "react";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import QuoteModal from "./Modal/QuoteModal";

export default function FloatingActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <motion.a
          href="tel:+919999999999"
          className="floating-btn call-btn"
          aria-label="Call us"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <PhoneOutlined />
          <span className="floating-tooltip">Call Us</span>
        </motion.a>

        <motion.a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          aria-label="WhatsApp us"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <WhatsAppOutlined />
          <span className="floating-tooltip">WhatsApp</span>
        </motion.a>

        <motion.button
          onClick={openModal}
          className="floating-btn quote-btn"
          aria-label="Get a quote"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <FileTextOutlined />
          <span className="floating-tooltip">Get Quote</span>
        </motion.button>
      </div>

      {/* Quote Modal - now its own component */}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}