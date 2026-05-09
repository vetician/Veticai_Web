import { Link } from 'react-router-dom'
import { Heart, Target, Users } from 'lucide-react'

export default function About() {
  return (
    <main className="pt-16">
      <section className="bg-emerald-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Vetician</h1>
          <p className="text-gray-600 text-lg">
            We're on a mission to make quality pet care accessible to every pet parent in India.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: 'Our Mission', desc: 'To connect every pet parent with trusted, verified pet care professionals — anytime, anywhere in India.' },
            { icon: Target, title: 'Our Vision', desc: 'A world where no pet goes without proper care due to lack of access or information.' },
            { icon: Users, title: 'Our Team', desc: 'A passionate team of pet lovers, vets, and tech builders working to transform pet care in India.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Vetician was born out of a simple frustration — finding a trusted vet at midnight for a sick pet is harder than it should be.
            We built Vetician to solve this for every pet parent in India. From vet consultations to grooming, boarding to emergency care,
            we're creating a single platform where pet care is just a tap away.
          </p>
          <Link to="/partner" className="mt-8 inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
            Join Our Platform
          </Link>
        </div>
      </section>
    </main>
  )
}
