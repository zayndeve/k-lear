import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/Speaking.css";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { HiMicrophone } from "react-icons/hi";

export default function Speaking() {
useEffect(() => {
  const isMobile = window.innerWidth <= 768; // only phones

  if (isMobile) {
    setTimeout(() => {
      const el = document.getElementById("speaking-header");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }
}, []);


  return (
    <>
      <Navbar />

      <div className="dashboard-wrapper">

        {/* SIDEBAR */}
        <aside className="dashboard-sidebar">
          <h1 className="sidebar-title">K-Learn</h1>

          <nav className="sidebar-menu">
            <Link to="/dashboard/topik1" className="sidebar-link"><IoBookSharp className="icon-yellow" /> TOPIK 1</Link>
            <Link to="/dashboard/topik2" className="sidebar-link"><MdMenuBook className="icon-blue" /> TOPIK 2</Link>
            <Link to="/dashboard/speaking" className="sidebar-link active-link"><FaMicrophoneAlt className="icon-green" /> Speaking</Link>
          </nav>

          <Link to="/contact" className="sidebar-support">
            <BiSupport className="support-icon" />
            <div>
              <p>Yordam 24/7</p>
              <span>Istalgan vaqt bog'laning</span>
            </div>
          </Link>
        </aside>

        {/* MAIN PAGE */}
        <main className="speaking-main">

          <div className="speaking-wrapper">

            {/* HEADER */}
            <section className="speaking-header" id="speaking-header">

              <h1 className="speaking-title">Speaking Club</h1>
              <p className="speaking-subtitle">
                Suhbat, muloqot, real hayot vaziyatlari va ishonch qurish uchun mo‘ljallangan maxsus darslar.
              </p>

              <div className="speaking-badge">
                <HiMicrophone className="badge-mic" />
                <span className="badge-text">100% Amaliy , Real Vaziyatlar</span>
              </div>
            </section>

            {/* WHITE MAIN CARD */}
            <div className="speaking-card">

              {/* INFO GRID */}
              <div className="info-grid">
                <div className="info-item">
                  <h3 className="info-label">Davomiyligi</h3>
                  <p className="info-value">3 oy</p>
                </div>

                <div className="info-item">
                  <h3 className="info-label">Format</h3>
                  <p className="info-value">Zoom · Guruhli · 1.5 soat</p>
                </div>

                <div className="info-item">
                  <h3 className="info-label">Narxi</h3>
                  <p className="info-value">80,000 so‘m / oy</p>
                </div>
              </div>

              {/* WHAT WE DO */}
              <section className="learn-section">
                <h2 className="section-title">Nimalar qilamiz?</h2>

                <ul className="learn-list">
                  <li>Suhbat qurish — kundalik & real hayot koreys tili</li>
                  <li>Shadowing + talaffuzni to‘g‘rilash</li>
                  <li>Intervyu (면접) speaking practice</li>
                  <li>Storytelling + long answer training</li>
                  <li>Qiyin savollarga javob berish</li>
                  <li>TOPIK speaking approach (even tho test does not exist)</li>
                  <li>Roleplay: 학교, 편의점, 회사, 병원, 약국</li>
                  <li>Debate & opinion giving (초중급 → 중급)</li>
                  <li>Weekly challenges (voice mission)</li>
                  <li>Oy oxirida offline uchrashuv</li>
                </ul>
              </section>

              {/* PROCESS TABLE */}
              <section className="process-section">
                <h2 className="section-title">6 oylik speaking dasturi</h2>

                <div className="process-table">

                  <div className="process-step">
                    <h3 className="step-title">1-oy</h3>
                    <p className="step-text">Ishonch qurish · Talaffuz · Omon qolish uchun koreys tili</p>
                  </div>
                  <div className="process-step">
                    <h3 className="step-title">2-oy</h3>
                    <p className="step-text">Munozara asoslari · Fikr bildirish · Dalil tuzilmasi</p>
                  </div>

                  <div className="process-step">
                    <h3 className="step-title">3-oy</h3>
                    <p className="step-text">Ravonlik mashg'uloti · Yakuniy offline speaking imtihoni</p>
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
