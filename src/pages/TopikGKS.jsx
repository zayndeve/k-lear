import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/TopikGKS.css";

export default function TopikGKS() {
  return (
    <>
      <Navbar />
      <div className="topikgks-wrapper">
        
        {/* Hero */}
        <section className="topikgks-hero section-container">
          <p className="topikgks-hero-label">TOPIK · GKS</p>
          <h1 className="topikgks-hero-title">
            TOPIK va GKS uchun{" "}
            <span className="topikgks-hero-highlight">bitta markaziy sahifa.</span>
          </h1>
          <p className="topikgks-hero-subtitle">
            Koreyada o‘qish va imtihonlarga tayyorlanish uchun eng muhim
            sanalar, yo‘riqnomalar va amaliy tavsiyalar bir joyda jamlangan.
          </p>
        </section>

        {/* TOPIK SECTION */}
        <section className="topik-section-wrapper section-container">

          <h2 className="topik-main-title">TOPIK imtihonlari</h2>
          <p className="topik-main-sub">
            Boshlang‘ich darajadan TOPIK 2 gacha bo‘lgan talabalarga mos ma’lumotlar.
          </p>

          <div className="topik-container">

            {/* ------------------- ROW 1: UPCOMING EXAMS ------------------- */}
            <h3 className="topik-section-subtitle">Eng yaqin TOPIK imtihonlari</h3>

            <div className="upcoming-grid">

              {/* IBT */}
              <article className="upcoming-card ibt">
                <span className="up-tag ibt">TOPIK IBT — 제11회</span>
                <h4 className="up-title">2025-yil IBT Imtihoni</h4>

                <div className="up-row">
                  <p className="up-label">Ro'yxatdan o'tish:</p>
                  <p className="up-value highlight-date">2025.12.16 ~ 2025.12.22</p>
                </div>

                <div className="up-row">
                  <p className="up-label">Imtihon kuni (Korea / Asia):</p>
                  <p className="up-value highlight-date">2025.02.28 (토)</p>
                </div>

                <div className="up-row">
                  <p className="up-label">Natija:</p>
                  <p className="up-value highlight-date">2025.03.20 (금) 15:00</p>
                </div>

                <p className="up-footnote">TOPIK I · TOPIK II</p>
              </article>

              {/* PBT */}
              <article className="upcoming-card pbt">
                <span className="up-tag pbt">TOPIK PBT — 제104회</span>
                <h4 className="up-title">2025-yil PBT Imtihoni</h4>

                <div className="up-row">
                  <p className="up-label">Ro'yxatdan o'tish:</p>
                  <p className="up-value highlight-date">2025.12.09 ~ 2025.12.15</p>
                </div>

                <div className="up-row">
                  <p className="up-label">Imtihon kuni:</p>
                  <p className="up-value highlight-date">2025.01.11 (일)</p>
                </div>

                <div className="up-row">
                  <p className="up-label">Natija:</p>
                  <p className="up-value highlight-date">2025.02.12 (목) 15:00</p>
                </div>

                <p className="up-footnote">TOPIK I · TOPIK II</p>
              </article>

            </div>

            {/* ------------------- ROW 2: EXTRA INFO ------------------- */}
            <div className="extra-info-grid">

              {/* What to bring */}
              <article className="topik-card small-card">
                <p className="topik-tag green">Imtihon kuni</p>
                <h3 className="topik-card-title">TOPIK kuni nimalarni olib borish kerak?</h3>

               <ul className="checklist">
  <li>Pasport yoki ARC (외국인등록증)</li>
  <li>Ro‘yxat varaqasi (접수증, print)</li>
  <li>Shtrixli oq ruchka.</li>
</ul>
              </article>  
              {/* Tips */}
              <article className="topik-card small-card">
                <p className="topik-tag orange">Foydali maslahat</p>
                <h3 className="topik-card-title">Imtihon kuni tavsiyalari</h3>

                <p className="topik-note">
                  Erta borish (30–40 daqiqa oldin) eng yaxshi yechim.  
                  Ko‘rsatmalarni koreys tilida tushunish uchun asosiy iboralarni 
                  oldindan o‘rganish madaniy shokni kamaytiradi.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="topikgks-divider" />

        {/* GKS SECTION */}
        <section className="section-container topikgks-section">
          <div className="topikgks-section-header">
            <h2 className="topikgks-section-title">GKS stipendiyasi</h2>
            <p className="topikgks-section-text">
              Koreya hukumati grant dasturi orqali bakalavr, magistratura yoki
              PhD darajasiga o‘qish imkoniyati.
            </p>
          </div>

          <div className="topikgks-grid">

            {/* GKS cycle */}
            <article className="topikgks-card">
              <p className="topikgks-card-tag">Yillik sikl</p>
              <h3 className="topikgks-card-title">GKS 2026 (taxminiy)</h3>
              <ul className="topikgks-card-list">
               <li>Guidebook: Fevralda</li>
  <br />
              <li>🔗 NIIED rasmiy sahifasi: <a href="https://www.niied.go.kr/user/nd35203.do" target="_blank" rel="noopener noreferrer" className="gks-link">niied.go.kr</a></li>
              <br />
              <li>🔗 Study in Korea: <a href="https://www.studyinkorea.go.kr/ko/plan/scholarship.do" target="_blank" rel="noopener noreferrer" className="gks-link">studyinkorea.go.kr</a></li>
              </ul>
            </article>

            {/* GKS documents */}
            <article className="topikgks-card">
              <p className="topikgks-card-tag">Hujjatlar ro‘yxati</p>
              <h3 className="topikgks-card-title">Talab qilinadigan hujjatlar</h3>
              <ul className="topikgks-card-list">
                <li>• Pasport</li>
                <li>• Transkript va diplom</li>
                <li>• Tavsiyanomalar</li>
                <li>• Study Plan / Motivation Letter</li>
                <li>• TOPIK / IELTS sertifikatlari</li>
              </ul>
            </article>

          </div>
        </section>

        {/* Final CTA */}
        <section className="section-container topikgks-final">
          <div className="topikgks-final-box">
            <div>
              <h2 className="topikgks-final-title">Savollaringiz bormi?</h2>
              <p className="topikgks-final-text">
                Bepul qisqa intervyuda maqsadlaringizga mos yo‘nalishni aniqlaymiz.
              </p>
            </div>
            <div className="topikgks-final-actions">
              <a href="/interview" className="topikgks-final-button-primary">
                Intervyu bron qilish
              </a>
              <a href="/contact" className="topikgks-final-button-secondary">
                Savol berish
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
