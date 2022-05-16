import { useState }from 'react';
import Thanks from './Thanks';

function Rating() {
  const [ thanksIsOpen, setThanksIsOpen ] = useState(false);

  function submitHandler() {
    setThanksIsOpen(true);
  }

  return (
  <div className='card'>
    <div>
      <h2>How did we do?</h2>
    </div>
    <div>
      <p>
      Please let us know how we did with your support request.
      All feedback is appreciated to help us improve our offering!
      </p>
    </div>
    <div>
      <from>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
           <label class="form-check-label" for="flexRadioDefault1">
             1
          </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
              2
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
              3
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
              4
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
              5
            </label>
          </div>
      </from>
    </div>
    <div>
      <button className='btn' onClick={submitHandler}>Submit</button>
    </div>

    { thanksIsOpen && <Thanks />}

  </div>
  );
}

export default Rating;
