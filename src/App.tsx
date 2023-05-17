import { FC, useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

const App: FC = () => {
  const [captcha, setCaptcha] = useState<string | null>(null);

  console.log(captcha);

  return (
    <>
      <ReCAPTCHA
        sitekey="6LcRaPolAAAAANy9LLcMs7-1A2RHHFM32KMPI7fc"
        onChange={(value) => setCaptcha(value)}
      />
    </>
  );
};

export default App;
