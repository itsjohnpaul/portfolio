const stats = [
  { value: "120+", label: "Completed" },
  { value: "95%", label: "Client" },
  { value: "10+", label: "Years of\nExperience" }
];

export default function Stats() {
  return (
    <div className="flex gap-12 mt-12">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="text-white text-4xl font-bold">{s.value}</div>
          <div className="text-[#FF7755] font-semibold text-lg mt-1 text-center whitespace-pre">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
