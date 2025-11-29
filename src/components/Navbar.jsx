import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-5 px-10 bg-white shadow-md">
      <h1 className="text-3xl font-extrabold text-skyBlue">Zayn Korean</h1>

      <div className="flex gap-8 text-gray-700 font-semibold text-lg">
        <Link to="/" className="hover:text-skyBlue transition">Asosiy</Link>
        <Link to="/courses" className="hover:text-skyBlue transition">Kurslar</Link>
        <Link to="/pricing" className="hover:text-skyBlue transition">Narxlar</Link>
        <Link to="/interview" className="hover:text-skyBlue transition">Intervyu</Link>
        <Link to="/contact" className="hover:text-skyBlue transition">Aloqa</Link>
      </div>
    </nav>
  );
}
