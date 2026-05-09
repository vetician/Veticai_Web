export default function Terms() {
  return (
    <main className="pt-16">
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-500">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {[
            ['Acceptance of Terms', 'By using Vetician, you agree to these terms. If you do not agree, please do not use our platform.'],
            ['Use of Services', 'Vetician provides a platform to connect pet owners with verified pet care providers. We are not directly responsible for the services provided by third-party providers.'],
            ['Bookings & Cancellations', 'Bookings can be cancelled up to 2 hours before the scheduled appointment. Cancellation policies may vary by provider.'],
            ['User Responsibilities', 'You are responsible for providing accurate information, treating service providers respectfully, and ensuring your pet is safe during service delivery.'],
            ['Provider Verification', 'While we verify all providers on our platform, Vetician does not guarantee the outcome of any service. We encourage users to review providers after each booking.'],
            ['Limitation of Liability', 'Vetician is not liable for any damages arising from the use of our platform or services provided by third-party providers.'],
            ['Changes to Terms', 'We may update these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.'],
            ['Contact', 'For questions about these terms, contact us at care@vetician.com'],
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
