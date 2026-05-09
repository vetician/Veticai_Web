import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/icon.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Vetician" className="h-8 w-8 object-contain" />
          <span className="font-bold text-xl text-emerald-600">Vetician</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/partner"
            className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Become a Partner
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-emerald-600' : 'text-gray-700'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/partner" onClick={() => setOpen(false)}
            className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-full text-center"
          >
            Become a Partner
          </Link>
        </div>
      )}
    </nav>
  )
}
