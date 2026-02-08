export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/insideout-logo-white.svg" 
              alt="InsideOut" 
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="/terms-and-conditions" 
              className="text-blue-200 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-blue-400">|</span>
            <a 
              href="/privacy-policy" 
              className="text-blue-200 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-blue-200">
            © {new Date().getFullYear()} Inside Out Virtual Assistants
          </div>
        </div>
      </div>
    </footer>
  );
}
