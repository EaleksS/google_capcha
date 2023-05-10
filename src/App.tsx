import "./App.css";
import ReCaptcha from "@matt-block/react-recaptcha-v2";

function App() {
  return (
    <>
      <ReCaptcha
        siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        theme="light"
        size="normal"
        onSuccess={(captcha) => console.log(`Successful, result is ${captcha}`)}
        // onError={() =>
        //   console.log("Something went wrong, check your conenction")
        // }
        // onExpire={() => console.log("Verification has expired, re-verify.")}
      />
    </>
  );
}

export default App;
