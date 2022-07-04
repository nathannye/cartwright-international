import { useState, useRef } from "react";

const CustomForm = ({ status, message, onValidated, heading }) => {
  const [email, setEmail] = useState("");
  const [st, setStatus] = useState(status);
  const split = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });

    // setTimeout(() => {
    //   emailRef.current.value = "";
    // }, 3000);
  };

  return (
    <div id="emailFormContainer">
      <h2>{heading}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="MERGE0">
          <input
            type="email"
            name="email"
            value={email}
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            id="MERGE0"
            required
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="What's a good email for you?"
          />
        </label>
        <input
          type="submit"
          value="&nbsp;"
          //   formValues={[email, firstName, lastName]}
        />
        <span className="lineBottom"></span>
        <div
          className="invisiFields"
          aria-hidden="true"
          aria-label="Please leave the following three fields empty"
        >
          <label htmlFor="b_name">Name: </label>
          <input
            type="text"
            name="b_name"
            tabIndex="-1"
            defaultValue=""
            placeholder="Freddie"
            id="b_name"
          />

          <label htmlFor="b_email">Email: </label>
          <input
            type="email"
            name="b_email"
            tabIndex="-1"
            defaultValue=""
            placeholder="youremail@gmail.com"
            id="b_email"
          />

          <label htmlFor="b_comment">Comment: </label>
          <textarea
            name="b_comment"
            tabIndex="-1"
            placeholder="Please comment"
            id="b_comment"
          ></textarea>
        </div>
      </form>
      <div className="formStatus">
        {status === "success" && <p>Thanks for signing up!</p>}
        {status === "error" && <p>Ohp, something went wrong</p>}
        {/* {statusMessage} */}
      </div>
    </div>
  );
};

export default CustomForm;
