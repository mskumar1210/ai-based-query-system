export default function KrishiVaaniLogin() {
    return (
        <div className="relative flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden font-display text-slate-900 dark:text-white">
            {/* Left Split: Hero Image */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-12 lg:p-16">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBARvDuQ5E6p2U92iZBQ9rT5EjLY9c963vjKM6dZ_nJLzRTvDQfaQPFVVQj3ZFopHTktIsu3xsXttr4bUM0-oF-L21P4-CI4rO01JzfDCQZ32eiMLREFg23QSeleMEV6dSWW-XPrIVMyWnES6D4gsQUbaUaCsFD8ZhDrXio5m6eZHfcZAc4NNE-Rbl69uq2ecWk7PesmdiQJ5zaL7fS13ovIcurtpo5EA-d500VFqLdOyKILpgbHhZ1nG7BpE4-8Vi3ZOdyQSNQiSsw')"}}
                    aria-label="Lush green wheat farm field under a bright sky representing agriculture"
                />
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Content */}
                <div className="relative z-20 max-w-xl">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-400 text-5xl">agriculture</span>
                    </div>
                    <h1 className="text-4xl font-black text-white leading-tight tracking-tight mb-4 lg:text-5xl">
                        Voice of Agriculture
                    </h1>
                    <p className="text-lg text-slate-200 font-medium leading-relaxed max-w-lg">
                        Empowering farmers with AI-powered instant advisory. Connect with experts, get weather updates, and optimize your yield.
                    </p>
                </div>
            </div>

            {/* Right Split: Login Form */}
            <div className="flex flex-1 flex-col justify-center items-center px-4 sm:px-12 lg:px-24 w-full lg:w-1/2 bg-background-light dark:bg-background-dark relative">
                {/* Top Right Language Selector */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-12">
                    <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">translate</span>
                        <span>English / हिन्दी</span>
                    </button>
                </div>

                <div className="w-full max-w-[440px] flex flex-col gap-8">
                    {/* Logos & Header */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="flex items-center gap-6">
                            {/* Placeholder for Govt Emblem */}
                            <div className="h-16 w-auto opacity-90 grayscale hover:grayscale-0 transition-all duration-300" title="Government of India">
                                <img
                                    alt="Government of India Emblem"
                                    className="h-full w-auto"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-YFgCNz2uxhaAt6OTuEpHzZnGer1PoSMRh3cS2BZ9JDX13kjPnqh4eqIMNIyzZwawYRvBvdAHviIVi2It-2qm9J5mfAwfJexIJsHVNUpxunnekRvcvBCoNlwfitOVrIqkn_yPUV4V-990yy2vPnfO5kdTXtXbt7aE3YOH2_CLug--mcd7nYr2GtsqJiPZZkvQVBftADGVJUnTKjXTVGkJLWpSUrxrF1hoSvm4-GqBIJlXwWZ_JdXFWNC6DOlCHzKplCHAi0LZ1Xyu"
                                />
                            </div>
                            <div className="h-8 w-px bg-slate-300 dark:bg-slate-600" />
                            {/* App Logo Icon */}
                            <div className="flex flex-col items-center justify-center text-primary dark:text-primary">
                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 mb-1">
                                    <span className="material-symbols-outlined text-3xl">mic</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome, Kisan</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-base">Log in to access your dashboard</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="flex flex-col gap-5">
                        {/* Mobile Number Input */}
                        <label className="flex flex-col gap-2">
                            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Mobile Number</span>
                            <div className="flex h-12 w-full items-stretch rounded-lg shadow-sm">
                                {/* Country Code */}
                                <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-r-0 border-slate-300 dark:border-slate-600 rounded-l-lg px-4 text-slate-500 dark:text-slate-400 font-medium select-none">
                                    +91
                                </div>
                                {/* Input */}
                                <input
                                    className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-r-lg px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium text-base"
                                    maxLength={10}
                                    placeholder="Enter 10-digit number"
                                    type="tel"
                                />
                            </div>
                        </label>

                        {/* Send OTP Button */}
                        <button className="group relative flex w-full h-12 items-center justify-center rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.99]">
                            <span className="mr-2">Send OTP</span>
                            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>

                        {/* Terms */}
                        <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
                            By continuing, you agree to our <a className="text-primary hover:underline" href="#">Terms of Service</a> &amp; <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                        </p>
                    </div>

                    {/* Footer Help */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Need help logging in?</p>
                        <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
                            <span className="material-symbols-outlined text-[18px]">call</span>
                            <span>Toll-Free: 1800-180-1551</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}