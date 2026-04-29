import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <h1>Portfólio</h1>
            <Link href="/">Home</Link>
            <Link href="/sobre">About</Link>
            <Link href="/projetos">Projects</Link>
        </nav>
    );
}