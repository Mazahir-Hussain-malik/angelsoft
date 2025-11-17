'use client';

export default function Header() {
  return (
    <div className="bg-black/40 backdrop-blur-sm text-white py-2.5 px-6 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        {/* Left Section - Social Icons */}
        <div className="flex items-center gap-4">
          <span className="font-medium text-white/80">Follow Us:</span>
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <svg className="w-3.5 h-3.5 cursor-pointer hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {/* Google */}
            <svg className="w-3.5 h-3.5 cursor-pointer hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {/* Twitter */}
            <svg className="w-3.5 h-3.5 cursor-pointer hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.637A9.868 9.868 0 0122.005 4.09a4.923 4.923 0 001.153-5.994 14.974 14.974 0 01-4.058 1.55 4.917 4.917 0 00-8.86 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.995 14.995 0 008.134 2.39c9.762 0 15.078-8.288 15.078-15.474 0-.237-.005-.474-.015-.71a10.812 10.812 0 002.656-2.782z"/>
            </svg>
            {/* LinkedIn */}
            <svg className="w-3.5 h-3.5 cursor-pointer hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
            {/* TikTok */}
            <svg className="w-3.5 h-3.5 cursor-pointer hover:text-[#D4AF37] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.498 3.094c1.871 0 2.935 1.064 2.935 2.936v12.94c0 1.872-1.064 2.936-2.935 2.936h-15.064c-1.871 0-2.935-1.064-2.935-2.936V6.03c0-1.872 1.064-2.936 2.935-2.936h15.064M19.498 0H4.434C1.982 0 0 1.982 0 4.434v15.132C0 22.018 1.982 24 4.434 24h15.064c2.452 0 4.434-1.982 4.434-4.434V4.434C24 1.982 22.018 0 19.498 0"/>
            </svg>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#00A9FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="whitespace-nowrap text-white/90">Email: contact@angelsoft.io</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#00A9FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.46 5.55c-2.64 0-4.78 3.08-4.78 6.86 0 .52.04 1.04.12 1.55.3-1.37 1.3-2.64 2.65-3.27 1.35.63 2.35 1.9 2.65 3.27.08-.51.12-1.03.12-1.55 0-2.28-.88-4.35-2.32-5.82.3-.32.63-.59.98-.82 1.14.23 2.18.88 2.92 1.78z"/>
            </svg>
            <span className="whitespace-nowrap text-white/90">Call: +1 646 752 4410</span>
          </div>
        </div>
      </div>
    </div>
  );
}
