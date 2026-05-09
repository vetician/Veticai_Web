import { useState } from 'react'
import { Stethoscope, Building2, UserCheck, Trees, CheckCircle } from 'lucide-react'

const partnerTypes = [
  { icon: Stethoscope, label: 'Veterinarian', value: 'vet' },
  { icon: Building2, label: 'Pet Clinic', value: 'clinic' },
  { icon: UserCheck, label: 'Paravet', value: 'paravet' },
  { icon: Trees, label: 'Pet Resort / Hostel', value: 'resort' },
]

const benefits = [
  'Get discovered by thousands of pet parents',
  'Manage bookings from one dashboard',
  'Build your online reputation with reviews',
  'Zero setup cost to join',
  'Dedicated partner support',
]

export default function Partner() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', city: '', type: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Partner Application – ${form.business} (${form.type})`)
    const body = encodeURIComponent(`Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nCity: ${form.city}\nPartner Type: ${form.type}`)
    window.location.href = `mailto:care@vetician.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="pt-16">
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner With Vetician</h1>
          <p className="text-gray-600 text-lg">Grow your pet care business by joining India's fastest growing pet care platform.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Can Join?</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {partnerTypes.map(({ icon: Icon, label }) => (
                <div key={label} className="border border-gray-100 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium text-gray-800 text-sm">{label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join Vetician?</h2>
            <ul className="space-y-3">
              {benefits.map(b => (
                <li key={b} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-500">We'll reach out to you within 24 hours. Welcome to the Vetician family!</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Join Vetician</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    placeholder="Business / Clinic Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400"
                    value={form.business}
                    onChange={e => setForm({ ...form, business: e.target.value })}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                  <input
                    required
                    placeholder="City"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400"
                    value={form.city}
                    onChange={e => setForm({ ...form, city: e.target.value })}
                  />
                  <select
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 bg-white text-gray-700"
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="">Select Partner Type</option>
                    {partnerTypes.map(p => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
