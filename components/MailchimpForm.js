import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const u = "4e778288cd778da2a7cfb695d";
const id = "fcec88ebc1";

const actionURL = `https://cartwrightintl.us18.list-manage.com/subscribe/post?u=${u}&id=${id}`;

const MailchimpFormContainer = ({ props, heading }) => {
  return (
    <MailchimpSubscribe
      url={actionURL}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          heading={heading}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
export default MailchimpFormContainer;
