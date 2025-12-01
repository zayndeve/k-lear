import "./../styles/components/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Left side */}
      <div className="hero-left">
        <h1 className="hero-title">
          Koreys tilini{" "}
          <span className="hero-title-highlight">oson va tizimli</span>{" "}
          o'rganing.
        </h1>

        <p className="hero-description">
          O`zbek talabalar uchun maxsus yaratilgan TOPIK 1–2 kurslari.
          Bepul intervyu orqali darajangizni aniqlab, sizga mos guruhni
          tanlab beriladi.
        </p>

        <div className="hero-buttons">
          <a
            href="/interview"
            className="hero-button hero-button-primary"
          >
            Bepul intervyu bron qilish
          </a>
          <a
            href="/courses"
            className="hero-button hero-button-secondary"
          >
            Kurslarni ko'rish
          </a>
        </div>


      </div>

      {/* Right side */}
      <div className="hero-right">
        <div className="hero-card-wrapper">
          <div className="hero-card">
            <p className="hero-card-label">
              Bugunoq suhbatga yoziling!
            </p>

            <p className="hero-card-title">
              TOPIK{" "}
              <span className="hero-title-highlight">online darslar</span>
            </p>

            <p className="hero-card-text">
              Haftasiga 2–3 marta, Zoom orqali jonli darslar. Har bir o'quvchi uchun 
              alohida feedback va uyga vazifalar bilan tizimli o'qitish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
