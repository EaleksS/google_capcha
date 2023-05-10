import "./App.css";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3-non-autoload";

function App() {
  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey="6LdrbvklAAAAAGMcyiX70N_J0QZGycnpDdTJYTtK">
        <GoogleReCaptcha onVerify={(v) => console.log(v)} />
      </GoogleReCaptchaProvider>
      , ,
    </>
  );
}

export default App;
