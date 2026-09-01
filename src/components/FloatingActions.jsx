import React from "react";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        href="tel:+919999999999"
        className="floating-btn call-btn"
        aria-label="Call us"
      >
        <PhoneOutlined />
      </a>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp us"
      >
        <WhatsAppOutlined />
      </a>

      <a
        href="/contact"
        className="floating-btn quote-btn"
        aria-label="Get a quote"
      >
        <FileTextOutlined />
      </a>
    </div>
  );
}