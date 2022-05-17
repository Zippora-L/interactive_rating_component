import illustration from "../assets/illustration-thank-you.svg";

function Thanks(props) {
  return (
    <div className="bg-gradient-to-b from-[#212832] to-[#171e28] text-light-grey rounded-2xl py-6 px-8 md:w-96 sm:w-72 mx-4 h-96 grid gap-4 place-items-center">
      <img src={illustration} alt="Rating sent illustration" />
      <p className="bg-dark-blue text-new-orange rounded-full w-56 p-2 text-center">
        You selected {props.rating} out of 5
      </p>
      <div>
        <h2 className="text-white text-[30px] text-center">Thank you!</h2>
        <p className="text-[15px] text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Thanks;
