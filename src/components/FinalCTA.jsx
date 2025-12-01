import "./../styles/components/FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="section-container">
        <div className="final-cta-box">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Keling, koreys tilini birga yengib olaylik.
            </h2>
            <p className="final-cta-description">
              Qisqa bepul intervyuga yoziling, darajangizni aniqlaymiz va
              sizga eng mos kursni tanlab beraman.
            </p>
          </div>

          <a
            href="/interview"
            className="final-cta-button"
          >
            Bepul intervyu bron qilish
          </a>
        </div>
      </div>
    </section>
  );
}
