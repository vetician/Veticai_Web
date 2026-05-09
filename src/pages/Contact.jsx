import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

const CONTACT_EMAIL = 'care@vetician.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main className="pt-16">
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">Have a question or need help? We're here for you and your pet.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email Us', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: Phone, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: MapPin, label: 'Location', value: 'India', href: null },
                { icon: Clock, label: 'Support Hours', value: 'Mon–Sat, 9am – 7pm', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-gray-800 font-medium hover:text-emerald-600 transition-colors">{value}</a>
                    ) : (
                      <div className="text-gray-800 font-medium">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-sm text-emerald-800 font-medium mb-1">🚨 Emergency Pet Care?</p>
              <p className="text-sm text-emerald-700">For urgent pet emergencies, download the Vetician app for 24/7 vet support.</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.dkg12.vetician"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Download App →
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours at <span className="text-emerald-600">{form.email}</span>.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-emerald-600 hover:underline">Send another message</button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 bg-white"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 bg-white"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 resize-none bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Or email us directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-500 hover:underline">{CONTACT_EMAIL}</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
