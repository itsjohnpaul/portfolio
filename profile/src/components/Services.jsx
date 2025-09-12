const services = [
  { icon: "💻", title: "Website Development" },
  { icon: "📱", title: "App Development" }
];

export default function Services() {
  return (
    <section className="mt-10 flex flex-col md:flex-row gap-8 px-12">
      {services.map((s, i) => (
        <div key={i} className="flex items-center bg-[#212938] border-l-4 border-[#FF7755] rounded-xl p-8 shadow-lg hover:scale-105 transition">
          <span className="mr-5 text-3xl">{s.icon}</span>
          <div className="text-white font-bold text-xl">{s.title}</div>
        </div>
      ))}
    </section>
  );
}
