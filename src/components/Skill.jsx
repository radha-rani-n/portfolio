const Skill = ({ src, skillName }) => {
  return (
    <div class="w-fit px-8 py-4 rounded-md border-black border-[1px] bg-white flex flex-col items-center gap-2">
      {" "}
      <img src={src} alt="" class="w-12" />
      <p>{skillName}</p>
    </div>
  );
};
export default Skill;
