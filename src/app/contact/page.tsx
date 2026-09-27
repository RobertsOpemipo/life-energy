export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
        Contact Us
      </span>
      <h1 className="text-3xl font-extrabold text-slate-900 mt-3 mb-8">Get in Touch</h1>

      <form className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name</label>
          <input type="text" placeholder="John Doe" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-emerald-500" />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
          <input type="email" placeholder="john@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-emerald-500" />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">Message</label>
          <textarea rows={4} placeholder="Describe your solar power requirements..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-emerald-500" />
        </div>
        <button type="submit" className="bg-[#1b8156] hover:bg-[#156d48] text-white text-xs font-bold px-7 py-3 rounded-full transition shadow-sm">
          Send Message
        </button>
      </form>
    </div>
  );
}