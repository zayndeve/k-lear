import "./../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Zayn Korean. Barcha huquqlar himoyalangan.</p>
        <p className="footer-text">Koreyada o'qiydigan va ishlaydigan O`zbek talabalar uchun.</p>
      </div>
    </footer>
  );
}
