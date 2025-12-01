import "./../styles/components/CoursesPreview.css";

export default function CoursesPreview() {
  return (
    <section className="courses-section">
      <div className="section-container">
        <div className="courses-header">
          <h2 className="courses-title">
            Asosiy kurslar
          </h2>
          <a
            href="/dashboard"
            className="courses-link"
          >
            Barcha kurslarni ko'rish →
          </a>
        </div>

        <div className="courses-grid">
        {/* TOPIK 1 */}
        <div className="course-card">
          <p className="course-label course-label-sky">
            Boshlang'ich → O'rta 
          </p>
          <h3 className="course-title">TOPIK 1</h3>
          <p className="course-description">
            Alifbo, asosiy grammatikalar va kundalik hayot uchun
            sodda jumlalar.
          </p>
        </div>

        {/* TOPIK 2 */}
        <div className="course-card">
          <p className="course-label course-label-pink">
            O'rta → Yuqori
          </p>
          <h3 className="course-title">TOPIK 2</h3>
          <p className="course-description">
            Matn o'qish, tinglab tushunish, imtihon formatida mashqlar.
          </p>
        </div>

        {/* Speaking */}
        <div className="course-card">
          <p className="course-label course-label-yellow">
            Suhbat → Kundalik 
          </p>
          <h3 className="course-title">Speaking Class</h3>
          <p className="course-description">
            Universitet, ishxona, telefon, bank, konveniens store muloqotlari.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
