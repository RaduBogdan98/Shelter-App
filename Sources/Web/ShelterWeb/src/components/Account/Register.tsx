import React from "react";
import styles from "./Account.module.scss";
import loginIllustration from "./../../assets/login-illustration.png";
import registerIllustration from "./../../assets/register-illustration.png";
import logo from "./../../assets/logo.png";
import usernameIcon from "./../../assets/username.png";
import passwordIcon from "./../../assets/password.png";
import showPasswordIcon1 from "./../../assets/show-password-1.png";
import hidePasswordIcon1 from "./../../assets/hide-password-1.png";
import nameIcon from "./../../assets/name.png";
import mobileIcon from "./../../assets/mobile.png";

function Register() {
  const handleSubmit = () => { };
  return (
    <div className={styles.Form}>
      <p className={styles.FormHeader}>Sign up</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.UsernameField}>
          <img className={styles.UsernameFieldIcon} src={usernameIcon} />
          <input
            className={styles.UsernameFieldInput}
            type="text"
            placeholder={"user@gmail.com"}
            onChange={(e) => { }}
          />
        </div>
        <div className={styles.NameField}>
          <img className={styles.NameFieldIcon} src={nameIcon} />
          <input
            className={styles.NameFieldInput}
            type="text"
            placeholder={"Full name"}
            onChange={(e) => { }}
          />
        </div>
        <div className={styles.MobileField}>
          <img className={styles.MobileFieldIcon} src={mobileIcon} />
          <input
            className={styles.MobileFieldInput}
            type="text"
            placeholder={"Mobile"}
            onChange={(e) => { }}
          />
        </div>
        <p className={styles.AdditionalText1}>By signing up, you agree to our <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></p>
        <input className={styles.SubmitButton} type="submit" value="Continue" />
        <div className={styles.AlternativeLoginMethodDiv}>
          <hr className={styles.StylingLine} />
          <p className={styles.AdditionalText}>or connect with</p>
          <hr className={styles.StylingLine} />
        </div>
        <div className="g-signin2" data-width="300" data-onsuccess="onSignIn" data-longtitle="true"></div>
        <p className={styles.AdditionalText}>Don't have an account?
        </p>
        <div className={styles.AdditionalText}>
          Already have an account?
          <button
            className={styles.AdditionalLink}
            onClick={(e) => {
              e.preventDefault();
            }}>
            Login
          </button>
        </div>
      </form>
    </div >
  );
}

export default Register;
