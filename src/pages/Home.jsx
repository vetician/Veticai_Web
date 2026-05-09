import { Link } from 'react-router-dom'
import dogImg from '../assets/dog.png'
import { GooglePlayBadge, AppStoreBadge } from '../components/AppBadges'
import {
  Stethoscope, Building2, UserCheck, Home as HomeIcon, Sun, Scissors,
  Trees, Footprints, Zap, Star, CheckCircle,
  ChevronRight, Quote
} from 'lucide-react'

const services = [
  { icon: Stethoscope, title: 'Vet Consultation', desc: 'Connect with certified veterinarians at home or clinic.' },
  { icon: Building2, title: 'Pet Clinic', desc: 'Find trusted pet clinics near you for checkups & treatment.' },
  { icon: UserCheck, title: 'Paravet', desc: 'Trained paravets for basic care, injections & follow-ups.' },
  { icon: HomeIcon, title: 'Pet Hostel', desc: 'Safe & comfortable boarding for your pet while you travel.' },
  { icon: Sun, title: 'Pet Daycare', desc: 'Drop your pet off for a fun, supervised day of care.' },
  { icon: Scissors, title: 'Pet Grooming', desc: 'Professional grooming — bath, haircut, nail trim & more.' },
  { icon: Trees, title: 'Pet Resort', desc: 'Premium resort stays with activities for your furry friend.' },
  { icon: Footprints, title: 'Pet Walking', desc: 'Daily walks by trained & verified pet walkers near you.' },
  { icon: Zap, title: 'Emergency Care', desc: '24/7 emergency vet support when your pet needs it most.' },
]

const steps = [
  { step: '01', title: 'Choose a Service', desc: 'Pick from 9+ pet care services on the app.' },
  { step: '02', title: 'Select a Provider', desc: 'Browse verified vets, groomers & more near you.' },
  { step: '03', title: 'Book Instantly', desc: 'Confirm your booking in seconds — no calls needed.' },
  { step: '04', title: 'Get Pet Care', desc: 'At home or at clinic — your choice, your convenience.' },
]

const trustPoints = [
  'Verified & certified doctors',
  'Trained paravets',
  'Secure & instant booking',
  'Real reviews from pet owners',
  '24/7 emergency support',
  'Multiple services in one app',
]

const reviews = [
  { name: 'Priya Sharma', pet: 'Dog mom', text: 'Booked a vet consultation in under 2 minutes. The doctor was amazing and very thorough with my Labrador.' },
  { name: 'Rahul Mehta', pet: 'Cat parent', text: 'Used the grooming service for my Persian cat. Absolutely loved the results. Will definitely book again!' },
  { name: 'Ananya Singh', pet: 'Rabbit owner', text: 'Emergency support saved my bunny at midnight. Vetician is a lifesaver — literally!' },
]

const partners = [
  { name: 'PetCare Clinic', city: 'Delhi', type: 'Veterinary Clinic' },
  { name: 'Happy Tails Resort', city: 'Mumbai', type: 'Pet Resort' },
  { name: 'Dr. Sharma Vet', city: 'Bangalore', type: 'Veterinarian' },
  { name: 'Paws & Play Daycare', city: 'Pune', type: 'Pet Daycare' },
]

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full animate-fade-left">
              🐾 India's #1 Pet Care Platform
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-left delay-100">
              Book Trusted Pet Care Services{' '}
              <span className="text-emerald-600">Near You</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg animate-fade-left delay-200">
              Vets, groomers, boarding, daycare & emergency care — all in one app. Verified providers, instant booking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-left delay-300">
              <GooglePlayBadge href="https://play.google.com/store/apps/details?id=com.dkg12.vetician" />
              <AppStoreBadge />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/services" className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
                Explore Services
              </Link>
              <Link to="/partner" className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Become a Partner
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-fade-right delay-200">
            <div className="relative w-80 h-80 flex items-end justify-center animate-pulse-ring">
              <div className="absolute w-80 h-80 bg-emerald-200 rounded-full shadow-xl z-10" />
              <img src={dogImg} alt="Happy pet" className="relative z-20 w-72 h-72 object-contain drop-shadow-xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-500 mt-2">Everything your pet needs, in one place</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 mb-4">{desc}</p>
                <a href="#app" className="text-emerald-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Book Now <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How Vetician Works</h2>
            <p className="text-gray-500 mt-2">Get pet care in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vetician */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Vetician?</h2>
            <p className="text-gray-500 mb-8">We're building India's most trusted pet care ecosystem — for pet parents and service providers alike.</p>
            <ul className="space-y-3">
              {trustPoints.map(point => (
                <li key={point} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['500+', 'Verified Providers'], ['10K+', 'Happy Pet Parents'], ['9+', 'Services'], ['24/7', 'Emergency Support']].map(([num, label]) => (
              <div key={label} className="bg-emerald-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600">{num}</div>
                <div className="text-sm text-gray-600 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Partners</h2>
            <p className="text-gray-500 mt-2">Trusted providers on our platform</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map(({ name, city, type }) => (
              <div key={name} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">🏥</div>
                <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                <p className="text-xs text-emerald-600 mt-1">{type}</p>
                <p className="text-xs text-gray-400">{city}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/partner" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors inline-block">
              Join as a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section id="app" className="py-20 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Manage All Pet Care From One App</h2>
            <p className="text-emerald-100 mb-8">Book services, track your provider, manage appointments, and get emergency support — all from your phone.</p>
            <div className="flex flex-wrap gap-4">
              <GooglePlayBadge href="https://play.google.com/store/apps/details?id=com.dkg12.vetician" />
              <AppStoreBadge />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-80 bg-emerald-500 rounded-3xl border-4 border-emerald-400 flex items-center justify-center text-6xl shadow-2xl">
              📱
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Pet Parents Say</h2>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(({ name, pet, text }) => (
              <div key={name} className="bg-gray-50 rounded-2xl p-6">
                <Quote className="w-8 h-8 text-emerald-200 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{text}</p>
                <div>
                  <div className="font-semibold text-gray-900">{name}</div>
                  <div className="text-xs text-emerald-600">{pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ['How do I book a service?', 'Download the Vetician app, choose your service, select a provider near you, and confirm your booking instantly.'],
              ['Are all vets verified?', 'Yes! Every vet and service provider on Vetician goes through a strict verification process before being listed.'],
              ['Can I cancel a booking?', 'Yes, you can cancel or reschedule bookings from the app up to 2 hours before the appointment.'],
              ['Is emergency support available?', 'Absolutely. Vetician offers 24/7 emergency vet support through the app.'],
            ].map(([q, a]) => (
              <details key={q} className="bg-white rounded-xl p-5 cursor-pointer group">
                <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                  {q}
                  <ChevronRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-gray-500 text-sm mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Your Pet Deserves the Best Care 🐾</h2>
        <p className="text-gray-400 mb-8">Join thousands of pet parents who trust Vetician for all their pet care needs.</p>
        <a href="https://play.google.com/store/apps/details?id=com.dkg12.vetician" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors inline-block">
          Download the App
        </a>
      </section>
    </main>
  )
}
