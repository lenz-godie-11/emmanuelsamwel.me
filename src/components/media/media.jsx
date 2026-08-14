function Header() {
    return (
        <header className="w-full bg-black text-white border-b border-gray-800">
            <div className="max-w-2xl mx-auto flex items-center justify-between px-4 sm:px-0 py-3 sm:py-4">

                <a href="/" className="text-sm sm:text-lg font-bold hover:text-gray-300 whitespace-nowrap">
                    emmanuelsamwel.me
                </a>

                <nav>
                    <ul className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                        <li><a href="/work" className="hover:text-gray-300">Work</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;