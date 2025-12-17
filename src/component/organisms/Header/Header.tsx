export const Header = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-[#eef2f0] dark:border-[#2a4536] bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="flex items-center justify-center size-10 rounded-xl bg-primary/20 text-primary-dark dark:text-primary">
                        <span className="material-symbols-outlined filled text-2xl">potted_plant</span>
                    </div>
                    <h1 className="text-xl font-black tracking-tight text-text-main dark:text-white">Krishi Vaani</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        className="flex h-10 items-center justify-center gap-2 rounded-xl bg-background-light dark:bg-[#2a4536] px-4 text-sm font-bold text-text-main dark:text-white hover:bg-[#e8ecea] dark:hover:bg-[#355744] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">language</span>
                        <span>മലയാളം</span>
                    </button>
                    <button
                        className="flex size-10 items-center justify-center rounded-xl bg-background-light dark:bg-[#2a4536] text-text-main dark:text-white hover:bg-[#e8ecea] dark:hover:bg-[#355744] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                    </button>
                    <button className="flex size-10 overflow-hidden rounded-xl border-2 border-white shadow-sm">
                        <img alt="User profile avatar" className="h-full w-full object-cover"
                             data-alt="User profile avatar"
                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-6r1WZHx9uVcpMGZYvTMjpyuHNz9UZSh7RlUUhjNVzZXXiMeUvdanWOhpRRxmhavWDF-ENF9LZdF7JUFIVHQfX-aUZMswMh-HRBNgwguQ4ccgzJ2y9qNiQx1mQ_M54hMaL1c28d9JJWBg8Fd4p9sLDrrYgbC0tcIxj8m89aXdlw5GkcKuilqzhES1aMSBv0YN8wlj6wo7gJ4Ihljn8FZHSIGGdynEvtOw5bRes4PwTvHIboX2JtrIXGZp9Mo2v2I-kY1pUHxJaU8"/>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;