import { Link } from 'react-router-dom'
import logo from '../assets/icon.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <img src={logo} alt="Vetician" className="h-8 w-8 object-contain" />
            Vetician
          </Link>
          <p className="text-sm leading-relaxed mb-5">
            India's trusted platform for all pet care services — from vet consultations to grooming & boarding.
          </p>
          <a
            href="mailto:care@vetician.com"
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            care@vetician.com
          </a>
          <div className="flex gap-2 mt-4">
            <a href="#" className="text-xs border border-gray-700 px-3 py-1 rounded-full hover:text-white hover:border-gray-500 transition-colors">Instagram</a>
            <a href="#" className="text-xs border border-gray-700 px-3 py-1 rounded-full hover:text-white hover:border-gray-500 transition-colors">Twitter</a>
            <a href="#" className="text-xs border border-gray-700 px-3 py-1 rounded-full hover:text-white hover:border-gray-500 transition-colors">Facebook</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li>
              <a href="mailto:care@vetician.com?subject=Careers at Vetician" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Vet Consultation</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Pet Grooming</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Pet Hostel</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Emergency Care</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">View All →</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/partner" className="hover:text-white transition-colors">Partner With Us</Link></li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.dkg12.vetician"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span>© {new Date().getFullYear()} Vetician. All rights reserved.</span>
        <span>
          Made with 🐾 for pet parents across India &nbsp;·&nbsp;{' '}
          <a href="mailto:care@vetician.com" className="hover:text-white transition-colors">care@vetician.com</a>
        </span>
      </div>
    </footer>
  )
}
