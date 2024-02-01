const Button = ({ label }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border-monsterrat text-lg leading-none bg-coral-red rounded-full text-white ">
      {label}
    </button>
  );
};

export default Button;
