export const Footer = () => {
    return (
        <footer
            className="w-full py-6 text-center border-t border-[#eef2f0] dark:border-[#2a4536] bg-surface-light dark:bg-surface-dark mt-auto">
            <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-bold text-text-main dark:text-white">Kissan Helpline: <span
                    className="text-primary-dark dark:text-primary">1800-123-4567</span></p>
                <p className="text-xs text-text-muted dark:text-gray-500">© 2023 Krishi Vaani. Empowering Farmers.</p>
            </div>
        </footer>
    );
};
export default Footer;