import * as React from "react";

interface EmailTemplateProps {
  Email: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Email,
  Message,
}) => (
  <div>
    <b>
      Hi Sushans Londhe you got an message from {Email} from your portfolio site
    </b>
    <br />
    <p>{Message}</p>
  </div>
);
