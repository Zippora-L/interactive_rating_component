export function RadioInput(props) {
  return (
    <label htmlFor={`radio-${props.number}`}>
      <input
        className="hidden peer"
        type="radio"
        id={`radio-${props.number}`}
        name="radiobuttons"
        value={`${props.number}`}
        onChange={props.onChange}
      />
      <span className="hover:bg-new-orange hover:text-white peer-checked:bg-medium-grey peer-checked:text-white px-[1.4rem] py-4 id place-content-center text-light-grey bg-dark-blue rounded-full">
        {props.number}
      </span>
    </label>
  );
}
