import { Link } from "@tanstack/react-router";

export default function Navbar() {
    return (
        <header className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold"> Home </Link>
            <Link to="/about" className="[&.active]:font-bold"> About </Link>
            <Link to="/services" className="[&.active]:font-bold"> Services </Link>
        </header>
    )
}
