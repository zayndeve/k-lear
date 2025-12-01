import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/Topik2.css";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdFlame } from "react-icons/io";

export default function Topik2() {
 useEffect(() => {
  setTimeout(() => {
    const el = document.getElementById("topik2-header");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 50);
}, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-wrapper">

        {/* SIDEBAR */}
        <aside className="dashboard-sidebar">
          <h1 className="sidebar-title">K-Learn</h1>

          <nav className="sidebar-menu">
            <Link to="/dashboard/topik1" className="sidebar-link">
              <IoBookSharp className="icon-yellow" /> TOPIK 1
            </Link>
            <Link to="/dashboard/topik2" className="sidebar-link">
              <MdMenuBook className="icon-blue" /> TOPIK 2
            </Link>
            <Link to="/dashboard/speaking" className="sidebar-link">
              <FaMicrophoneAlt className="icon-green" /> Speaking
            </Link>
          </nav>

          <Link to="/contact" className="sidebar-support">
            <BiSupport className="support-icon" />
            <div>
              <p>Yordam 24/7</p>
              <span>Istalgan vaqt bog'laning</span>
            </div>
          </Link>
        </aside>

        {/* MAIN CONTENT */}
        <main className="topik2-main">

          <div className="topik2-wrapper">

            {/* DARK HEADER */}
            <section className="topik2-header" id="topik2-header">
              <h1 className="topik2-title">TOPIK 2 Course</h1>
              <p className="topik2-subtitle">
                O‘rta → yuqori darajaga 7 oyda. Akademik matnlarni tushunish,
                yozuv, 고급 표현 va 실전모의고사 asosida.
              </p>

              <div className="topik2-badge">
                <IoMdFlame className="badge-star" />
                <span className="badge-text">Advanced course taught by TOPIK 6 Teacher</span>
              </div>
            </section>

            {/* WHITE MAIN CARD */}
            <div className="topik2-card">

              {/* INFO GRID */}
              <div className="info-grid">

                <div className="info-item">
                  <h3 className="info-label">Davomiyligi</h3>
                  <p className="info-value">7 oy</p>
                </div>

                <div className="info-item">
                  <h3 className="info-label">Darslar</h3>
                  <p className="info-value">Haftasiga 3 marta · 1.5 soat</p>
                </div>

                <div className="info-item">
                  <h3 className="info-label">Narxi</h3>
                  <p className="info-value">130,000 won / oy</p>
                </div>

              </div>

              {/* WHAT WE LEARN */}
              <section className="learn-section">
                <h2 className="section-title">Nimalarni o‘rganamiz?</h2>

                <ul className="learn-list">
                  <li>서울대한국어 3B → 6A (full course)</li>
                  <li>O‘rta → yuqori darajadagi grammatikalar (고급 문법)</li>
                  <li>Akademik matnlarni o‘qish va tahlil qilish</li>
                  <li>HOT TOPIK reading, listening, writing</li>
                  <li>Real TOPIK writing formats (에세이 쓰기)</li>
                  <li>매달 실전모의고사 (full mock exam)</li>
                  <li>3000+ intermediate/advanced vocabulary list</li>
                  <li>Oy oxirida 1 marta offline uchrashuv</li>
                </ul>
              </section>

              {/* 7-MONTH PROCESS TABLE */}
              <section className="process-section">
                <h2 className="section-title">7 oylik o‘quv jarayoni</h2>

                <div className="process-table">

                  <div className="process-step">
                    <h3 className="step-title">1-oy</h3>
                    <p className="step-text">서울대한국어 3B + HOT TOPIK reading entry level</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">2-oy</h3>
                    <p className="step-text">4A grammar + intermediate listening drills</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">3-oy</h3>
                    <p className="step-text">4B reading + essay basics (쓰기 기초)</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">4-oy</h3>
                    <p className="step-text">5A advanced grammar + HOT TOPIK writing</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">5-oy</h3>
                    <p className="step-text">5B reading + listening (고급 난이도)</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">6-oy</h3>
                    <p className="step-text">서울대한국어 6A + TOPIK II full mock tests</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">7-oy</h3>
                    <p className="step-text">Final review, essay mastery, 실전모의고사 4회</p>
                  </div>

                </div>

              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
