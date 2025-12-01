import Navbar from "../components/Navbar";
import "../styles/pages/Interview.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaBullseye, FaBook, FaClock, FaCheckCircle, FaComments, FaUserCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function Interview() {
  return (
    <>
      <Navbar />

      <div className="dashboard-wrapper">
        {/* SIDEBAR */}


        {/* MAIN CONTENT */}
        <main className="interview-main">
          <div className="interview-wrapper">
            {/* HEADER */}
            <section className="interview-header">
              <h1 className="interview-title">Bepul Intervyu</h1>
              <p className="interview-subtitle">
                Sizning darajangiz, maqsadingiz va sizga eng mos kursni aniqlash uchun
                5–10 daqiqalik qisqa suhbat.
              </p>

              <div className="interview-badge">
                <AiFillStar className="badge-star" />
                <span className="badge-text">Intervyuni TOPIK 6 darajadagi ustoz olib boradi</span>
              </div>
            </section>

            {/* WHY INTERVIEW */}
            <section className="reason-section">
              <h2 className="section-title">Nega intervyu kerak?</h2>

              <div className="reason-grid">
                <div className="reason-card">
                  <FaBullseye className="reason-icon" />
                  <h3>Maqsadlaringiz</h3>
                  <p>
                    TOPIK ball, universitet, ish, yoki shunchaki bemalol gaplashish —
                    maqsadingizni aniq eshitib olamiz.
                  </p>
                </div>

                <div className="reason-card">
                  <FaBook className="reason-icon" />
                  <h3>Darajangiz</h3>
                  <p>
                    Grammatikangiz, so‘z boyligingiz va gapirish tezligingizni
                    qisqa suhbat davomida baholaymiz.
                  </p>
                </div>

                <div className="reason-card">
                  <FaClock className="reason-icon" />
                  <h3>Jadval</h3>
                  <p>
                    Sizga mos kun va soatlarni kelishib olamiz, TOPIK 1 / TOPIK 2
                    yoki Speaking guruhiga joylashtiramiz.
                  </p>
                </div>
              </div>
            </section>

            {/* FORM SECTION */}
            <section className="form-section">
              <h2 className="section-title">Intervyu uchun ariza</h2>
              <p className="form-subtext">
                Quyidagi forma orqali qisqa ma’lumotlarni to‘ldiring.
                Men ma’lumotlarni ko‘rib chiqib, siz bilan Telegram yoki email orqali bog‘lanaman.
              </p>

              <div className="form-frame-wrapper">
                <iframe
                  title="K-Learn Interview Form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdNf4uKVG64kP85bRL5Kn-AsZxGaja9Ry61A46GMsL7CRDHuQ/viewform?embedded=true"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  loading="lazy"
                >
                  Загрузка…
                </iframe>
              </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process-section">
              <h2 className="section-title">Intervyu qanday o‘tadi?</h2>

              <div className="process-steps">
                <div className="process-step">
                  <MdEdit className="step-icon" />
                  <div>
                    <h3>Formani to'ldirasiz</h3>
                    <p>Ism, maqsad, mavjud TOPIK daraja, qulay vaqtni tanlaysiz.</p>
                  </div>
                </div>

                <div className="process-step">
                  <FaCheckCircle className="step-icon" />
                  <div>
                    <h3>Tasdiqlash</h3>
                    <p>Men siz bilan Telegram / email orqali intervyu vaqtini tasdiqlayman.</p>
                  </div>
                </div>

                <div className="process-step">
                  <FaComments className="step-icon" />
                  <div>
                    <h3>Qisqa suhbat (5–10 daqiqa)</h3>
                    <p>
                      Zoom yoki telefon orqali qisqa suhbat — gapirish, tinglab
                      tushunish va grammatikani tekshiramiz.
                    </p>
                  </div>
                </div>

                <div className="process-step">
                  <FaUserCheck className="step-icon" />
                  <div>
                    <h3>Tavsiya va joylashtirish</h3>
                    <p>
                      Sizga mos TOPIK 1 / TOPIK 2 / Speaking yo‘nalishini va
                      guruh variantlarini taklif qilaman.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* CTA */}
            <section className="cta-section">
              <p>Bitta forma — va keyingi bosqichga o‘tasiz.</p>
              <div className="cta-buttons">
                <Link to="/dashboard" className="cta-primary">
                  Kurslarni ko‘rish
                </Link>
                <Link to="/contact" className="cta-secondary">
                  To‘g‘ridan-to‘g‘ri savol berish
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
