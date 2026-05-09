import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'puppy-care-guide',
    title: 'Complete Puppy Care Guide for New Pet Parents',
    excerpt: 'Everything you need to know about feeding, vaccinations, training, and health checkups for your new puppy.',
    category: 'Dog Care',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    emoji: '🐶',
  },
  {
    slug: 'vaccination-schedule',
    title: 'Pet Vaccination Schedule: What Every Owner Must Know',
    excerpt: 'A complete guide to core and non-core vaccines for dogs and cats, with recommended timelines.',
    category: 'Health',
    date: 'Jan 10, 2025',
    readTime: '4 min read',
    emoji: '💉',
  },
  {
    slug: 'best-dog-food',
    title: 'Best Dog Food in India 2025: Vet Recommended',
    excerpt: 'Our vets review the top dog food brands available in India — from budget to premium options.',
    category: 'Nutrition',
    date: 'Jan 5, 2025',
    readTime: '6 min read',
    emoji: '🍖',
  },
  {
    slug: 'signs-pet-is-sick',
    title: '10 Signs Your Pet Might Be Sick (Don\'t Ignore These)',
    excerpt: 'Learn the early warning signs of illness in dogs and cats so you can act fast and get the right care.',
    category: 'Health',
    date: 'Dec 28, 2024',
    readTime: '4 min read',
    emoji: '🩺',
  },
  {
    slug: 'cat-grooming-tips',
    title: 'Cat Grooming at Home: Tips from Professional Groomers',
    excerpt: 'Step-by-step guide to grooming your cat at home — brushing, bathing, nail trimming and more.',
    category: 'Cat Care',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    emoji: '🐱',
  },
  {
    slug: 'pet-travel-tips',
    title: 'Traveling With Your Pet in India: Complete Guide',
    excerpt: 'Everything you need to know about traveling by train, car, or flight with your pet in India.',
    category: 'Travel',
    date: 'Dec 15, 2024',
    readTime: '7 min read',
    emoji: '✈️',
  },
]

export default function Blog() {
  return (
    <main className="pt-16">
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Care Blog</h1>
          <p className="text-gray-600 text-lg">Expert tips, guides, and advice for every pet parent</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ title, excerpt, category, date, readTime, emoji }) => (
            <article key={title} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
              <div className="bg-emerald-50 h-40 flex items-center justify-center text-6xl group-hover:bg-emerald-100 transition-colors">
                {emoji}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">{category}</span>
                  <span className="text-gray-400 text-xs">{readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">{title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{date}</span>
                  <span className="text-emerald-600 text-sm font-medium">Read more →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
