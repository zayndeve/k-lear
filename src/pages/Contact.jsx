import Navbar from "../components/Navbar";
import "../styles/pages/Contact.css";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdMenuBook, MdEmail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsChatDots, BsPinAngleFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const faqItems = [
    {
      question: "Qachon javob olaman?",
      answer: "Odatda 1–5 daqiqa ichida javob olasiz.",
    },
    {
      question: "Telegramda ovozli xabar yuborsam bo'ladimi?",
      answer: "Albatta, qulay bo'lsa ovozli yoki matnli xabar tashlashingiz mumkin.",
    },
    {
      question: "Darslar qachon boshlanadi?",
      answer: "Intervyudan so'ng jadval bo‘yicha sizga mos vaqtni belgilaymiz.",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="dashboard-wrapper">

        {/* MAIN CONTENT */}
        <main className="contact-main">

          <div className="contact-wrapper">

            {/* HEADER */}
            <section className="contact-header">
              <h1 className="contact-title">Biz bilan bog‘lanish</h1>
              <p className="contact-subtitle">
                Savollaringiz bo‘lsa, bemalol yozing. Odatda 1–5 daqiqa ichida javob beraman.
              </p>

              <div className="contact-badge">
                <BsChatDots className="badge-chat" />
                <span className="badge-text">Tezkor javob · Do'stona muloqot</span>
              </div>
            </section>

            {/* TEACHER CARD */}
            <section className="teacher-section">
              <div className="teacher-card">

                <div className="teacher-info">
                  <p className="teacher-text">
                    Murojaatingizni xursandchilik bilan qabul qilaman. Telegram orqali yozsangiz,
                    odatda darhol javob beraman. Email orqali yozsangiz ham qisqa muddat ichida
                    javob qaytaraman.
                  </p>
                </div>
              </div>
            </section>

            {/* CONTACT METHODS */}
            <section className="methods-section">
              <h2 className="section-title">Aloqa usullari</h2>

              <div className="contact-buttons-container">

                <a
                  href="https://t.me/pyotr_znn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn telegram-btn"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                    className="telegram-img"
                  />
                  Telegram orqali yozish
                </a>

              </div>
            </section>

            {/* FAQ OPTIONAL */}
            <section className="faq-section">
              <h2 className="section-title">Tez-tez so‘raladigan savollar</h2>

              <div className="faq-dropdowns">
                {faqItems.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary className="faq-summary">
                      <span className="faq-summary-text">
                        <BsPinAngleFill className="faq-icon" />
                        {item.question}
                      </span>
                    </summary>
                    <p className="faq-answer">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

          </div>
        </main>

      </div>
    </>
  );
}
