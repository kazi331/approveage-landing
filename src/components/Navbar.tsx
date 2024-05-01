import { Link } from "@tanstack/react-router";
import Container from "./shared/Container";

export default function Navbar() {
    return (
        <header className="border-b-2 p-2 " >
            <Container className="flex gap-2 items-center">
                <Link to="/" className="[&.active]:text-green-600 flex space-x-2 p-2"> <img src="/public/logo.svg" /><span>ApproveAge</span></Link>
                <Link to="/about" className="[&.active]:text-green-600"> About </Link>
                <Link to="/services" className="[&.active]:text-green-600"> Services </Link>
                <Link to="/privacy" className="[&.active]:text-green-600"> Privacy </Link>
            </Container>
        </header>
    )
}
