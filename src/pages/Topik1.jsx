import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/pages/Topik1.css";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

export default function Topik1() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <main className="topik-main">

    <div className="topik-wrapper">

      {/* DARK HEADER */}
      <section className="topik-header">
        <h1 className="topik-title">TOPIK 1 Course</h1>
        <p className="topik-subtitle">
          0 dan → 6 oy ichida mustahkam TOPIK 1 darajaga.
        </p>

        <div className="topik-badge">
          <AiFillStar className="badge-star" />
          <span className="badge-text">Taught by TOPIK 6 Certified Teacher</span>
        </div>
      </section>

      {/* MAIN CONTENT CARD */}
      <div className="topik-card">

        {/* INFORMATION GRID */}
        <div className="info-grid">

          <div className="info-item">
            <h3 className="info-label">Davomiyligi</h3>
            <p className="info-value">6 oy</p>
          </div>

          <div className="info-item">
            <h3 className="info-label">Darslar</h3>
            <p className="info-value">Haftasiga 3 marta · 1.5 soat</p>
          </div>

          <div className="info-item">
            <h3 className="info-label">Narxi</h3>
            <p className="info-value">100,000 won / oy</p>
          </div>

        </div>

        {/* WHAT WE LEARN */}
        <section className="learn-section">
          <h2 className="section-title">Nimalarni o‘rganamiz?</h2>

          <ul className="learn-list">
            <li>Hangul — to‘liq o‘qish va yozish</li>
            <li>Kundalik hayot grammatikasi (Beginner lvl)</li>
            <li>500+ eng kerakli so‘zlar</li>
            <li>O‘qish va tinglab tushunish asoslari</li>
            <li>TOPIK 1 test formati bilan tanishish</li>
            <li>Mini-testlar va haftalik qayta aloqa</li>
          </ul>
        </section>

        {/* LEARNING PROCESS TABLE */}
        <section className="process-section">
          <h2 className="section-title">6 oylik o‘quv jarayoni</h2>

          <div className="process-table">

            <div className="process-step">
              <h3 className="step-title">1-oy</h3>
              <p className="step-text">Hangul, asosiy fe’llar, sodda jumlalar</p>
            </div>

            <div className="process-step">
              <h3 className="step-title">2-oy</h3>
              <p className="step-text">Beginner grammatikasi + 750 so'z + TOPIK 1 mock tests</p>
            </div>

            <div className="process-step">
              <h3 className="step-title">3-oy</h3>
              <p className="step-text">O'qish matnlari + testlar + TOPIK 1 mock tests</p>
            </div>

            <div className="process-step">
              <h3 className="step-title">4-oy</h3>
              <p className="step-text">Tinglab tushunish mashqlari + TOPIK 1 mock tests</p>
            </div>

            <div className="process-step">
              <h3 className="step-title">5-oy</h3>
              <p className="step-text">쏚쏚한국어 + TOPIK 1 mock tests</p>
            </div>

            <div className="process-step">
              <h3 className="step-title">6-oy</h3>
              <p className="step-text">General review + Final mock test + TOPIK 1 mock tests + 1500 so'z</p>
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
