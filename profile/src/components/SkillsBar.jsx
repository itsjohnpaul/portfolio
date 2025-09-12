const skills = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github"];
export default function SkillsBar() {
  return (
    <div className="bg-[#212938] w-full py-4 px-10 flex justify-center gap-12 text-gray-400 font-semibold text-lg">
      {skills.map((skill) => (
        <span key={skill} className="hover:text-[#FF7755] transition">{skill}</span>
      ))}
    </div>
  );
}
