export function Card(props) {
  return (
    <div className="bg-gradient-to-b from-[#212832] to-[#171e28] text-light-grey rounded-2xl py-6 px-8 md:w-96 sm:w-72 mx-4 h-96 grid gap-4 place-items-center">
      {props.children}
    </div>
  );
}
