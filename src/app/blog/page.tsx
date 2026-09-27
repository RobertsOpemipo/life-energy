import Image from 'next/image';

export default function BlogPage() {
  const articles = [
    { title: 'Solar panels installed on homes to reduce electricity', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80' },
    { title: 'This is the process converting the sunlight into electricity', img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&q=80' },
    { title: 'Geography affects solar energy potential greenhouse', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
          Articles
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-3">Our interesting articles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm flex flex-col bg-white">
            <div className="relative h-60 w-full">
              <Image src={art.img} alt={art.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="font-bold text-slate-900 text-sm leading-snug">{art.title}</h3>
              <button className="mt-6 w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs hover:bg-emerald-600 hover:text-white transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}