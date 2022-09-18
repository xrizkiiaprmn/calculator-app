export default function ButtonCalculator({
  children,
  variant,
  action,
  widthCustom,
}) {
  const listVariant = ["bg-cyan-800", "bg-cyan-500", "bg-[#0BACDF]"];
  const pickedVariant = listVariant[variant];

  return (
    <div
      onClick={action}
      className={`${
        widthCustom ? widthCustom : "w-3/12"
      } sm:h-[100px] h-[75px] ${pickedVariant} border-2 border-cyan-600 sm:text-4xl text-3xl flex items-center justify-center text-white font-bold hover:${pickedVariant}/70 cursor-pointer`}
    >
      {children}
    </div>
  );
}
