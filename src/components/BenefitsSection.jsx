import "./../styles/components/BenefitsSection.css";

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="section-container">
        <p className="benefits-label">
          Nega aynan biz?
        </p>
        <h2 className="benefits-title">
          O`zbek talabalar uchun moslashtirilgan koreys tili darslari.
        </h2>

        <div className="benefits-grid">
          <div className="benefit-card benefit-card-sky">
            <h3 className="benefit-card-title">
              TOPIK 6 darajadagi o'qituvchi
            </h3>
            <p className="benefit-card-text">
              Grammatikani O`zbekcha mantiq bilan tushuntiramiz, keraksiz
              nazariya emas, amaliy gaplar.
            </p>
          </div>

          <div className="benefit-card benefit-card-pink">
            <h3 className="benefit-card-title">
              Intervyu asosida guruhlar
            </h3>
            <p className="benefit-card-text">
              Har bir o'quvchi bilan qisqa suhbat qilib, darajaga mos guruhga
              joylashtiriladi.
            </p>
          </div>

          <div className="benefit-card benefit-card-yellow">
            <h3 className="benefit-card-title">
              Real hayotga mos darslar
            </h3>
            <p className="benefit-card-text">
              Universitet, ish, konveniens store, bank, shifoxona — haqiqiy
              vaziyatlarga tayyorlovchi darslar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
