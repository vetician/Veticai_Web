import {
  Stethoscope, Building2, UserCheck, Home as HomeIcon, Sun,
  Scissors, Trees, Footprints, Zap
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope, title: 'Vet Consultation',
    desc: 'Book certified veterinarians for home visits or clinic appointments. Get expert diagnosis, prescriptions, and follow-up care for your pet.',
    features: ['Home visits available', 'Certified vets only', 'Digital prescriptions'],
  },
  {
    icon: Building2, title: 'Pet Clinic',
    desc: 'Find and book appointments at trusted pet clinics near you. Full medical care including surgeries, vaccinations, and diagnostics.',
    features: ['Verified clinics', 'Online appointment booking', 'Medical records'],
  },
  {
    icon: UserCheck, title: 'Paravet Services',
    desc: 'Trained paravets for basic care, injections, wound dressing, and routine health monitoring at your doorstep.',
    features: ['Trained professionals', 'Affordable pricing', 'Home visits'],
  },
  {
    icon: HomeIcon, title: 'Pet Hostel',
    desc: 'Safe, comfortable, and supervised boarding for your pet while you travel. Regular updates and photos sent to you.',
    features: ['24/7 supervision', 'Regular updates', 'Comfortable stays'],
  },
  {
    icon: Sun, title: 'Pet Daycare',
    desc: 'Drop your pet off for a fun, supervised day with playtime, meals, and socialization with other pets.',
    features: ['Supervised play', 'Meals included', 'Flexible timings'],
  },
  {
    icon: Scissors, title: 'Pet Grooming',
    desc: 'Professional grooming services including bath, haircut, nail trimming, ear cleaning, and more — at home or salon.',
    features: ['Home grooming available', 'All breeds', 'Premium products'],
  },
  {
    icon: Trees, title: 'Pet Resort',
    desc: 'Premium resort-style stays with activities, swimming, and personalized attention for your beloved pet.',
    features: ['Premium facilities', 'Activity programs', 'Personalized care'],
  },
  {
    icon: Footprints, title: 'Pet Walking',
    desc: 'Daily walks by trained, verified, and GPS-tracked pet walkers. Keep your pet active and healthy.',
    features: ['Verified walkers', 'GPS tracking', 'Daily reports'],
  },
  {
    icon: Zap, title: 'Emergency Care',
    desc: '24/7 emergency vet support for critical situations. Connect with an emergency vet in minutes, any time of day.',
    features: ['24/7 availability', 'Rapid response', 'Critical care support'],
  },
]

export default function Services() {
  return (
    <main className="pt-16">
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg">9+ pet care services, all verified providers, instant booking via app</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, features }) => (
            <div key={title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 mb-4">{desc}</p>
              <ul className="space-y-1">
                {features.map(f => (
                  <li key={f} className="text-xs text-emerald-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/#app" className="mt-4 block text-center bg-emerald-600 text-white text-sm py-2 rounded-xl hover:bg-emerald-700 transition-colors">
                Book via App
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
