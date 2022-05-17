import React from "react";
import Thanks from "./Thanks";
import iconstar from "../assets/icon-star.svg";

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
        <div className="bg-gradient-to-b from-[#212832] to-[#171e28] text-light-grey rounded-2xl py-6 px-8 w-96 h-96 grid gap-4">
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
              <label htmlFor="radio-1">
                <input
                  className="hidden peer"
                  type="radio"
                  id="radio-1"
                  name="radiobuttons"
                  value="1"
                  onChange={handleChange}
                />
                <span className="hover:bg-new-orange hover:text-white peer-checked:bg-medium-grey peer-checked:text-white px-[1.4rem] py-4 id place-content-center text-light-grey bg-dark-blue rounded-full">
                  1
                </span>
              </label>
              <label htmlFor="radio-2">
                <input
                  className="hidden peer"
                  type="radio"
                  id="radio-2"
                  name="radiobuttons"
                  value="2"
                  onChange={handleChange}
                />
                <span className="hover:bg-new-orange hover:text-white peer-checked:bg-medium-grey peer-checked:text-white px-[1.275rem] py-4 id place-content-center text-light-grey bg-dark-blue rounded-full">
                  2
                </span>
              </label>
              <label htmlFor="radio-3">
                <input
                  className="hidden peer"
                  type="radio"
                  id="radio-3"
                  name="radiobuttons"
                  value="3"
                  onChange={handleChange}
                />
                <span className="hover:bg-new-orange hover:text-white peer-checked:bg-medium-grey peer-checked:text-white px-[1.275rem] py-4 id place-content-center text-light-grey bg-dark-blue rounded-full">
                  3
                </span>
              </label>
              <label htmlFor="radio-4">
                <input
                  className="hidden peer"
                  type="radio"
                  id="radio-4"
                  name="radiobuttons"
                  value="4"
                  onChange={handleChange}
                />
                <span className="hover:bg-new-orange hover:text-white peer-checked:bg-medium-grey peer-checked:text-white px-[1.275rem] py-4 id place-content-center text-light-grey bg-dark-blue rounded-full">
                  4
                </span>
              </label>
              <label htmlFor="radio-5">
                <input
                  className="hidden peer"
                  type="radio"
                  id="radio-5"
                  name="radiobuttons"
                  value="5"
                  onChange={handleChange}
                />
                <span className="hover:bg-new-orange hover:text-white peer-checked:bg-medium-grey peer-checked:text-white px-[1.275rem] py-4 id place-content-center text-light-grey bg-dark-blue rounded-full">
                  5
                </span>
              </label>
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
        </div>
      )}
      {thanksIsOpen && <Thanks rating={selectedRating} />}
    </>
  );
}

export default Rating;
