import { FC, useEffect, useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

const App: FC = () => {
  const [captcha, setCaptcha] = useState<string | null>(null);

  console.log(captcha);

  useEffect(() => {
    if (typeof captcha !== "string") return;

    document.location.href = "https://cosmos-sochi.ru/thankyou";
  }, [captcha]);

  return (
    <div className="captcha">
      <h1>Подтвердите что вы не робот</h1>
      <ReCAPTCHA
        sitekey="6LcRaPolAAAAANy9LLcMs7-1A2RHHFM32KMPI7fc"
        onChange={(value) => setCaptcha(value)}
      />
    </div>
  );
};

export default App;
