import { Link } from "react-router-dom";
import "./../styles/components/Navbar.css";
import logo from "./../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <img src={logo} alt="Zayn Korean Logo" className="navbar-logo" />
          <h1 className="navbar-title">Zayn Korean</h1>
        </div>

        <div className="navbar-menu">
          <a href="/" className="navbar-link">Asosiy</a>
          <a href="/dashboard" className="navbar-link">Kurslar</a>
          <a href="/topik-gks" className="navbar-link">TOPIK · GKS</a>
          <a href="/interview" className="navbar-link">Intervyu</a>
          <a href="/contact" className="navbar-link">Aloqa</a>
        </div>
      </div>
    </nav>
  );
}
