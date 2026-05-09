export function GooglePlayBadge({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.18 1.07C2.76 1.3 2.5 1.76 2.5 2.34v19.32c0 .58.26 1.04.68 1.27l.1.06 10.82-10.82v-.25L3.28 1.01l-.1.06z" fill="#EA4335"/>
        <path d="M17.6 15.2l-3.6-3.6v-.26l3.6-3.6.08.05 4.27 2.43c1.22.69 1.22 1.82 0 2.51L17.68 15.15l-.08.05z" fill="#FBBC04"/>
        <path d="M17.68 15.15L14.1 11.57 3.18 22.49c.4.43 1.06.48 1.8.05l12.7-7.39" fill="#34A853"/>
        <path d="M17.68 8l-12.7-7.4C4.24.17 3.58.22 3.18.65L14.1 11.57l3.58-3.58z" fill="#4285F4"/>
      </svg>
      <div>
        <div className="text-xs text-gray-400 leading-none">Get it on</div>
        <div className="font-semibold text-sm leading-tight">Google Play</div>
      </div>
    </a>
  )
}

export function AppStoreBadge() {
  return (
    <div className="relative inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl opacity-60 cursor-not-allowed select-none">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div>
        <div className="text-xs text-gray-400 leading-none">Download on the</div>
        <div className="font-semibold text-sm leading-tight">App Store</div>
      </div>
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">Soon</span>
    </div>
  )
}
