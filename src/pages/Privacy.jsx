export default function Privacy() {
  return (
    <main className="pt-16">
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray max-w-none">
          {[
            ['Information We Collect', 'We collect information you provide when registering, booking services, or contacting us — including name, email, phone number, and pet details. We also collect usage data to improve our services.'],
            ['How We Use Your Information', 'Your information is used to provide and improve our services, process bookings, send service updates, and connect you with verified pet care providers.'],
            ['Data Sharing', 'We share your information only with service providers you book through our platform. We do not sell your personal data to third parties.'],
            ['Data Security', 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.'],
            ['Your Rights', 'You have the right to access, update, or delete your personal information at any time by contacting us at care@vetician.com.'],
            ['Contact Us', 'For privacy-related questions, contact us at care@vetician.com'],
          ].map(([title, content]) => (
            <div key={title} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
              <p className="text-gray-600 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
