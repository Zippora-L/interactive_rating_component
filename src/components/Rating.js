import React from "react";
import iconstar from "../assets/icon-star.svg";
import { RadioInput } from "./RadioInput";

function Rating({ activeHandler, ratingHandler }) {
  return (
    <>
      <div className="w-full">
        <img
          className="bg-dark-blue p-4 rounded-full"
          src={iconstar}
          alt="orange star"
        />
      </div>
      <div>
        <h2 className="text-white text-[30px]">How did we do?</h2>
        <p className="text-[15px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <form className="flex justify-between my-5 w-full">
        <RadioInput onChange={ratingHandler} number="1" />
        <RadioInput onChange={ratingHandler} number="2" />
        <RadioInput onChange={ratingHandler} number="3" />
        <RadioInput onChange={ratingHandler} number="4" />
        <RadioInput onChange={ratingHandler} number="5" />
      </form>

      <button
        className="w-full p-3 bg-new-orange text-white rounded-full tracking-wider hover:bg-white hover:text-new-orange"
        onClick={activeHandler}
      >
        SUBMIT
      </button>
    </>
  );
}

export default Rating;
