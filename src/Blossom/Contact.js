import React from "react";
import SendEnquiry from "./SendEnquiry";

const Contact = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-lg-8 p-5">
          <SendEnquiry />
        </div>
        <div className="col-lg-4 p-5">
          <div className="shadow love p-2">
            <h4 className="text-center">“We'd Love to Hear from You”</h4>
            <ul>
              “Have questions or need assistance? Get in touch with our team,
              and we'll be happy to help.”
              <p>
                <i className="bi bi-telephone"></i> Phone: 1-800-555-BLOOM
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i> Email:
                info@blossomflorists.com
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
