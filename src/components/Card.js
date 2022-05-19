import React from "react";
import Rating from "./Rating";
import Thanks from "./Thanks";

export function Card() {
  const [thanksIsOpen, setThanksIsOpen] = React.useState(false);
  const [rating, setRating] = React.useState(null);

  function submitHandler() {
    setThanksIsOpen(!thanksIsOpen);
  }

  function ratingHandler(event) {
    setRating(event.target.value);
  }

  return (
    <div className="bg-gradient-to-b from-[#212832] to-[#171e28] text-light-grey rounded-2xl py-6 px-8 md:w-96 sm:w-72 mx-4 h-96 grid gap-4 place-items-center">
      {!thanksIsOpen && (
        <Rating activeHandler={submitHandler} ratingHandler={ratingHandler} />
      )}
      {thanksIsOpen && <Thanks rating={rating} />}
    </div>
  );
}
