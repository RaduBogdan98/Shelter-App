import React from "react";
import loginIllustration from "./../../assets/login-illustration.png";
import registerIllustration from "./../../assets/register-illustration.png";
import logo from "./../../assets/logo.png";
import mailIcon from "./../../assets/username.png";
import passwordIcon from "./../../assets/password.png";
import showPasswordIcon1 from "./../../assets/show-password-1.png";
import hidePasswordIcon1 from "./../../assets/hide-password-1.png";
import styles from "./Account.module.scss";
import { LoginState } from "../../models/AccountModels";

interface LoginProps {
    //handleSubmit: () => void;
}

const defaultLoginState: LoginState = {
    showPassword: false,
    //sexistentAccount: false,
    //forgotPassword: false,
};

function Login(props: LoginProps) {
    const [loginState, setLoginState] = React.useState<LoginState>(defaultLoginState);
    const handleSubmit = () => { };

    return (
        <div className={styles.Form}>
            <p className={styles.FormHeader}>Login</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.MailField}>
                    <img className={styles.MailFieldIcon} src={mailIcon} />
                    <input
                        className={styles.MailFieldInput}
                        type="text"
                        placeholder={"user@gmail.com"}
                        onChange={(e) => { }}
                    />
                </div>
                <div className={styles.PasswordField}>
                    <img
                        className={styles.PasswordFieldIcon}
                        src={passwordIcon}
                    />
                    <input
                        className={styles.PasswordFieldInput}
                        type={loginState.showPassword ? "text" : "password"}
                        placeholder={"Password"}
                        onChange={(e) => { }}
                    />
                    <button
                        className={styles.ShowHidePasswordButton}
                        onClick={(e) => {
                            e.preventDefault();
                            setLoginState((prevState) => {
                                return {
                                    ...prevState,
                                    showPassword: !loginState.showPassword
                                }
                            });
                        }}
                    >
                        <img
                            className={styles.ShowHidePasswordIcon}
                            src={loginState.showPassword ? hidePasswordIcon1 : showPasswordIcon1}
                            alt="Show password"
                        ></img>
                    </button>
                </div>
                <p className={styles.AdditionalText}><a href="">Forgot password?</a></p>
                <input className={styles.SubmitButton} type="submit" value="Login" />
                <div className={styles.AlternativeLoginMethodDiv}>
                    <hr className={styles.StylingLine} />
                    <p className={styles.AdditionalText}>or connect with</p>
                    <hr className={styles.StylingLine} />
                </div>
                <div className="g-signin2" data-width="300" data-onsuccess="onSignIn" data-longtitle="true"></div>
                <div className={styles.AdditionalText}>
                    Don't have an account?
                    <button
                        className={styles.AdditionalLink}
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );


    /*  return (
         <div className={styles.Login}>
             <div className="Illustration">
                 <img
                     src={connectState.existentAccount ? loginIllustration : registerIllustration}
                     className={styles.LoginImage}
                     alt="illustration"
                 />
             </div>
             <div className={styles.Logo}>
                 <img src={logo} className={styles.AppLogo} alt="logo" />
                 <p className={styles.AppName}>Shelter</p>
             </div>
             <div className={styles.Form}>
                 <p className={styles.FormHeader}>{connectState.existentAccount ? "Login" : "Sign up"}</p>
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
                     <div className={styles.PasswordField}>
                         <img
                             className={styles.PasswordFieldIcon}
                             src={passwordIcon}
                         />
                         <input
                             className={styles.PasswordFieldInput}
                             type={connectState.showPassword ? "text" : "password"}
                             placeholder={"Password"}
                             onChange={(e) => { }}
                         />
                         <button
                             className={styles.ShowHidePasswordButton}
                             onClick={(e) => {
                                 e.preventDefault();
                                 setConnectState((prevState) => {
                                     return {
                                         ...prevState,
                                         showPassword: !connectState.showPassword
                                     }
                                 });
                             }}
                         >
                             <img
                                 className={styles.ShowHidePasswordIcon}
                                 src={connectState.showPassword ? hidePasswordIcon1 : showPasswordIcon1}
                                 alt="Show password"
                             ></img>
                         </button>
                     </div>
                     <p className={styles.AdditionalText1}><a href="">Forgot password?</a></p>
                     <input className={styles.SubmitButton} type="submit" value="Login" />
                     <div className={styles.AlternativeLoginMethodDiv}>
                         <hr className={styles.StylingLine} />
                         <p className={styles.AdditionalText}>or connect with</p>
                         <hr className={styles.StylingLine} />
                     </div>
                     <div className="g-signin2" data-width="300" data-onsuccess="onSignIn" data-longtitle="true"></div>
                     <p className={styles.AdditionalText}>Don't have an account?
                         <button
                             className={styles.AdditionalLink}
                             onClick={(e) => {
                                 e.preventDefault();
                                 setConnectState((prevState) => {
                                     return { ...prevState, existentAccount: !connectState.existentAccount }
                                 })
                             }}>
                             Sign Up
                         </button>
                     </p>
                 </form>
             </div>
         </div>
     ); */
}

export default Login;
