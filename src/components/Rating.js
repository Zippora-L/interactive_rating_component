import React from "react";
import Thanks from "./Thanks";
import iconstar from "../assets/icon-star.svg";
import { RadioInput } from "./RadioInput";
import { Card } from "./Card";

function Rating() {
  const [thanksIsOpen, setThanksIsOpen] = React.useState(false);
  const [selectedRating, setSelectedRating] = React.useState(null);

  function submitHandler() {
    if (selectedRating) {
      setThanksIsOpen(true);
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setSelectedRating(event.target.value);
  }

  return (
    <>
      {!thanksIsOpen && (
        <Card>
          <img
            className="bg-dark-blue p-4 rounded-full"
            src={iconstar}
            alt="orange star"
          />
          <div>
            <h2 className="text-white text-[30px]">How did we do?</h2>
            <p className="text-[15px]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div>
            <form className="flex justify-between my-5">
              <RadioInput onChange={handleChange} number="1" />
              <RadioInput onChange={handleChange} number="2" />
              <RadioInput onChange={handleChange} number="3" />
              <RadioInput onChange={handleChange} number="4" />
              <RadioInput onChange={handleChange} number="5" />
            </form>
          </div>
          <div>
            <button
              className="w-full p-3 bg-new-orange text-white rounded-full tracking-wider hover:bg-white hover:text-new-orange"
              onClick={submitHandler}
            >
              SUBMIT
            </button>
          </div>
        </Card>
      )}
      {thanksIsOpen && <Thanks rating={selectedRating} />}
    </>
  );
}

export default Rating;
