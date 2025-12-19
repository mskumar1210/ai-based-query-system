export const Header = () => {
  return (
      <header className="w-full border-b border-[#2c4724] bg-background-dark px-4 py-3 lg:px-10 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4 lg:gap-8">

            <div className="flex items-center gap-3 text-white">
              <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined fill-1">potted_plant</span>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight hidden sm:block">Krishi Vaani</h2>
            </div>
            <label className="hidden md:flex flex-col min-w-40 h-12 w-64 lg:w-96">
              <div
                  className="flex w-full flex-1 items-stretch rounded-full h-full bg-[#2c4724] overflow-hidden border border-transparent focus-within:border-primary/50 transition-colors">
                <div className="text-[#9fc893] flex items-center justify-center pl-4 pr-2">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                    className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-white focus:outline-none placeholder:text-[#9fc893] px-2 text-base font-medium"
                    placeholder="Search crops, pests, prices..."/>
              </div>
            </label>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button
                className="flex items-center justify-center rounded-full h-10 px-5 bg-primary text-[#152211] text-sm font-bold tracking-wide hover:bg-opacity-90 transition-opacity">
              EN | ML
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-[#2c4724]">
              <div className="text-right hidden md:block">
                <p className="text-xs text-[#9fc893] mt-1">Premium Member</p>
              </div>
              <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-[#2c4724]"
                  data-alt="Portrait of an Indian farmer smiling"
                  style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6rvYN3jPncx4Xg5l9kHsscUM2Ova5Sks2BU6ADj-_lJIgu6x4IkTbQQkTrdG2WAA7-KvL4xiA-JCm0K3IKND2BUjSF1v9EBu0cHBhAMNZ1A_VjkLNjaWoMgMTVF7IjP7dtNexHdYTezqMMuxAPNh_YKLQvCeFoVRYaXeVsbfheXhmJHj2hkEk4hDHhC7YEI_fJcFRtcMJISrc05Cc1I7j441-CA5Rd7e4Apr7cTzNagLPzzCT0kuJuuIHUYzZ_DrB8qd6eXaTl3E")'
                  }}
              >
              </div>

            </div>
          </div>
        </div>
      </header>
  )
}
export default Header