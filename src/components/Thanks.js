function Thanks(props) {
  return (
    <div className="card">
      <div>
        <p>You selected {props.rating} out of 5</p>
      </div>
      <div>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Thanks;
