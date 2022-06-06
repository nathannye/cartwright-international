import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = (props) => {
  const u = "807464c84508cec5b0c91f836";
  const id = "f412627b4c";

  const actionURL = `https://ferris.us2.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <div className="formContainer">
      <div>
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
      </div>
    </div>
  );
};

export default MailchimpFormContainer;
