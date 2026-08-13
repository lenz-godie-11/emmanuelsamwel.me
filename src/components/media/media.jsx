function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">

            <div className="text-xl font-bold">
                emmanuelsamwel.me
            </div>

            <nav>
                <ul className="flex items-center gap-8 text-sm font-medium">
                    <li><a href="/" className="hover:text-blue-600">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-600">About</a></li>
                    <li><a href="/work" className="hover:text-blue-600">Work</a></li>
                    <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;