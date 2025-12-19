export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-sm">
            <div className="grid grid-cols-[1fr_auto] gap-4 max-w-7xl mx-auto px-6 py-4 items-center">
                {/* Logo and Title Section */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                        <span className="material-symbols-outlined text-2xl">potted_plant</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Krishi Vaani
                    </h1>
                </div>

                {/* Right Actions Section - using grid for alignment */}
                <div className="grid grid-cols-3 gap-2 items-center">
                    <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-700 px-4 text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">language</span>
                        <span className="hidden sm:inline">EN</span>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                    </button>
                    <button className="flex h-10 w-10 overflow-hidden rounded-lg border-2 border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow">
                        <img
                            alt="User profile avatar"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-6r1WZHx9uVcpMGZYvTMjpyuHNz9UZSh7RlUUhjNVzZXXiMeUvdanWOhpRRxmhavWDF-ENF9LZdF7JUFIVHQfX-aUZMswMh-HRBNgwguQ4ccgzJ2y9qNiQx1mQ_M54hMaL1c28d9JJWBg8Fd4p9sLDrrYgbC0tcIxj8m89aXdlw5GkcKuilqzhES1aMSBv0YN8wlj6wo7gJ4Ihljn8FZHSIGGdynEvtOw5bRes4PwTvHIboX2JtrIXGZp9Mo2v2I-kY1pUHxJaU8"
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;