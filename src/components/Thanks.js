import illustration from "../assets/illustration-thank-you.svg";
import { Card } from "./Card";

function Thanks(props) {
  return (
    <Card>
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
    </Card>
  );
}

export default Thanks;
