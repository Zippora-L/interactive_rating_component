import React from "react";
import Thanks from "./Thanks";

function Rating() {
  const [thanksIsOpen, setThanksIsOpen] = React.useState(false);
  const [selectedRating, setSelectedRating] = React.useState(null);

  function submitHandler() {
    if (selectedRating) {
      setThanksIsOpen(true);
    }
  }

  function handleChange(event) {
    console.log(event);
    setSelectedRating(event.target.value);
  }

  return (
    <>
      {!thanksIsOpen && (
        <div className="bg-dark-blue text-red-500">
          <div>
            <h2>How did we do?</h2>
          </div>
          <div>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div>
            <form className="rating">
              <div className="form-check">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="optradio"
                    value="1"
                    onChange={handleChange}
                  />
                  1
                </label>
              </div>
              <div className="form-check">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="optradio"
                    value="2"
                    onChange={handleChange}
                  />
                  2
                </label>
              </div>
              <div className="form-check">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="optradio"
                    value="3"
                    onChange={handleChange}
                  />
                  3
                </label>
              </div>
              <div className="form-check">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="optradio"
                    value="4"
                    onChange={handleChange}
                  />
                  4
                </label>
              </div>
              <div className="form-check">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="optradio"
                    value="5"
                    onChange={handleChange}
                  />
                  5
                </label>
              </div>
            </form>
          </div>
          <div>
            <button className="btn" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      )}
      {thanksIsOpen && <Thanks rating={selectedRating} />}
    </>
  );
}

export default Rating;
