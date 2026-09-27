import Image from 'next/image';

export default function ServicePage() {
  const steps = [
    { num: '01', title: 'Initial consultation', img: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=400&q=80' },
    { num: '02', title: 'System design', img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=400&q=80' },
    { num: '03', title: 'Install & active', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&q=80' },
    { num: '04', title: 'System Monitoring', img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full">
          Our 4 Working Steps
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-3">Our Services & Process</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full border-2 border-emerald-400 p-1 mb-4">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {s.num}
              </span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
            <p className="text-xs text-slate-500 mt-1">End-to-end implementation and engineering.</p>
          </div>
        ))}
      </div>
    </div>
  );
}