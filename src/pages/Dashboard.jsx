import Navbar from "../components/Navbar";
import "../styles/pages/Dashboard.css";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import profilePhoto from "../assets/39C75A9A-B04D-45DE-9048-5ED60A98297D_1_102_a.jpeg";
import topikPdf from "../pdf/Topik_Korean.pdf";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-wrapper">

        {/* SIDEBAR */}
        <aside className="dashboard-sidebar">
          <h1 className="sidebar-title">K-Learn</h1>

          <nav className="sidebar-menu">
            <Link to="/dashboard/topik1" className="sidebar-link">
              <IoBookSharp /> TOPIK 1
            </Link>
            <Link to="/dashboard/topik2" className="sidebar-link">
              <MdMenuBook /> TOPIK 2
            </Link>
            <Link to="/dashboard/speaking" className="sidebar-link">
              <FaMicrophoneAlt /> Speaking
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
        <main className="dashboard-main">

          {/* WHITE ROUNDED CONTAINER */}
          <div className="dashboard-card">

            {/* DARK TOP SECTION */}
            <section className="profile-panel">

              <div className="profile-left">

                <div className="avatar-box">
                  <img
                    src={profilePhoto}
                    alt="Zayn"
                    className="avatar"
                  />
                  <div className="avatar-ring"></div>
                </div>

                <div className="profile-text">
                  <h1 className="profile-level">TOPIK 6</h1>
                  <p className="profile-label">Sizning koreys tili o`qituvchingiz</p>
                  <p className="profile-sub">
                    
                  </p>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-card">
                  <h3 className="stat-value">231</h3>
                  <div className="stat-graph"></div>
                </div>


              </div>

            </section>

            {/* BUTTON */}
            <div className="improve-section">
              <a href={topikPdf} download="Topik_Korean.pdf" className="improve-btn">
                Topikni sertifikatni yuklash
              </a>
            </div>

            {/* SKILLSET CARD */}
            <section className="skillset-panel">
              <div className="skillset-header">
                <h2>Til ko`nikmalarim</h2>
              </div>

              <div className="skillset-body">
                <span className="language-tag">English</span>
                <span className="language-tag">Russian</span>
                <span className="language-tag">Uzbek</span>
                <span className="language-tag">Turkish</span>
                <span className="language-tag">Korean</span>
              </div>
            </section>

          </div>
        </main>

      </div>
    </>
  );
}
