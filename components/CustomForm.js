import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
      });
  };

  return (
    <div id="emailFormContainer">
      <h2>get the latest tips and training</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            id="emailField"
            placeholder="What's a good email for you?"
          />
        </label>
        <input type="submit" value="&nbsp;" required />
        <span className="lineBottom"></span>
      </form>
      {status === "success" && <div>ta da, done</div>}
      {status === "error" && <div>error</div>}
    </div>
  );
};

export default CustomForm;
