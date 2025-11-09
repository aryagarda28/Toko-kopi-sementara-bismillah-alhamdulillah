export default function Footer() {
  return (
    <footer className="bg-amber-900 text-center py-8 mt-16">
      <div className="mb-6 flex justify-center gap-4 items-center">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/kuphicoffee_?igsh=ZXJtZGh2NXhkaGNx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-700 transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
          </svg>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@sheissyha?_r=1&_t=ZS-91CXhAziMYG"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-700 transition-colors"
          aria-label="TikTok"
        >
          <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81v-3.4a7.12 7.12 0 0 0-6.75 7.1 7.1 7.1 0 0 0 8.54-6.93V6.69a5.5 5.5 0 0 0 3.23.89v-3.6a5.31 5.31 0 0 1-.52-.05z" />
          </svg>
        </a>

        {/* Grab */}
        <a
          href="https://r.grab.com/g/2-1-6-C7T2JPDHEKTADA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6b3a2a] hover:opacity-90 transition-colors"
          aria-label="Grab"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Grab_logo.png"
            alt="Grab"
            className="h-6 w-auto"
          />
        </a>

        {/* WhatsApp (placeholder number) */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:opacity-90 transition-colors"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .02 5.373.02 12c0 2.116.553 4.188 1.602 6.013L0 24l6.24-1.618A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.204-1.253-6.204-3.48-8.52zM12 21.5c-1.07 0-2.117-.18-3.09-.52l-.22-.08-3.72.97.99-3.62-.07-.24A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
            <path d="M17.1 14.1c-.29-.15-1.72-.85-1.98-.95-.26-.11-.45-.16-.64.16-.19.33-.73.95-.9 1.15-.17.19-.33.21-.62.07-.29-.13-1.22-.45-2.32-1.43-.86-.76-1.44-1.69-1.61-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.28.29-.47.1-.19.05-.36-.02-.5-.07-.13-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49l-.54-.01c-.18 0-.47.07-.72.34-.25.26-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.82.14.19 1.94 2.96 4.7 4.04 1.02.44 1.81.7 2.43.9.97.3 1.86.26 2.56.16.78-.11 1.72-.7 1.97-1.38.25-.68.25-1.26.18-1.38-.07-.12-.26-.19-.55-.34z" fill="#fff"/>
          </svg>
        </a>

        {/* Email (placeholder) */}
        <a
          href="mailto:info@kuphicoffee.com"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-700 transition-colors"
          aria-label="Email"
        >
          <svg className="w-6 h-6 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 13.065L.002 4.5V20a2 2 0 0 0 2 2h19.996a2 2 0 0 0 2-2V4.5L12 13.065zM12 10.5L24 2H0l12 8.5z" />
          </svg>
        </a>
      </div>

      <p className="text-amber-100 font-open-sans text-sm">© 2025 Coffee House. All rights reserved.</p>
    </footer>
  )
}
