import "./../styles/components/HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="section-container">
        <p className="how-it-works-label">
          Qanday ishlaydi?
        </p>
        <h2 className="how-it-works-title">
          3 qadamda darslarga qo'shilasiz.
        </h2>

        <div className="how-it-works-grid">
        <div className="how-it-works-card">
          <p className="how-it-works-step-label">
            1-qadam
          </p>
          <h3 className="how-it-works-card-title">Bepul intervyu</h3>
          <p className="how-it-works-card-text">
            Qisqa suhbat orqali darajangizni aniqlaymiz va maqsadlaringizni
            tinglaymiz.
          </p>
        </div>

        <div className="how-it-works-card">
          <p className="how-it-works-step-label">
            2-qadam
          </p>
          <h3 className="how-it-works-card-title">To'g'ri guruh</h3>
          <p className="how-it-works-card-text">
            Sizni daraja va maqsadga mos TOPIK yoki speaking guruhiga
            joylashtiramiz.
          </p>
        </div>

        <div className="how-it-works-card">
          <p className="how-it-works-step-label">
            3-qadam
          </p>
          <h3 className="how-it-works-card-title">Tizimli darslar</h3>
          <p className="how-it-works-card-text">
            Haftalik reja, uy vazifalar va muntazam feedback orqali
            natijaga ishlaymiz.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
