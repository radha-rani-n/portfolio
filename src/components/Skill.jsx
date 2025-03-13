const Skill = ({ src, skillName }) => {
  return (
    <div className="w-30 h-30 px-8 py-4 rounded-md border-[var(--first-color)] border-[1px] bg-white flex flex-col items-center gap-2 shadow-[inset_0_0_10px_hsl(250,92%,85%)]">
      {" "}
      <img src={src.src} alt="" className="w-12" />
      <p className="font-semibold">{skillName}</p>
    </div>
  );
};
export default Skill;
