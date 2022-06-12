import MailchimpSubscribe from "react-mailchimp-subscribe";
// import CustomForm from "../components/CustomForm";
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
            onChange={setEmail}
            type="email"
            name="email"
            value={email}
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            id="emailField"
            required
            placeholder="What's a good email for you?"
          />
        </label>
        <input type="submit" value="&nbsp;" />
        <span className="lineBottom"></span>
      </form>
      {status === "success" && <div>ta da, done</div>}
      {status === "error" && <div>error</div>}
    </div>
  );
};

const MailchimpForm = (props) => {
  const u = "4e778288cd778da2a7cfb695d";
  const id = "fcec88ebc1";

  const actionURL = `https://cartwrightintl.us18.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <div>
      {/* <div> */}
      <MailchimpSubscribe
        url={actionURL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
      {/* </div> */}
    </div>
  );
};

export default MailchimpForm;
