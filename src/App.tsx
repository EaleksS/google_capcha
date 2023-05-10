import { FC } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

const App: FC = () => {
  return (
    <>
      <ReCAPTCHA
        sitekey="6LdrbvklAAAAAKc2anqIkJrTREXWKHiwZf0v6mAN"
        onChange={(value) => console.log("Captcha value:", value)}
      />
    </>
  );
};

export default App;
