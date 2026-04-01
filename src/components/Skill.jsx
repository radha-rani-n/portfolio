const Skill = ({ src, skillName }) => {
  return (
    <div className="skill-card w-30 h-30 px-8 py-4 rounded-xl border-[1px] border-gray-200 bg-white flex flex-col items-center gap-2 shadow-sm cursor-default">
      <img src={src.src} alt={skillName} className="w-12" />
      <p className="font-semibold text-sm">{skillName}</p>
    </div>
  );
};
export default Skill;
