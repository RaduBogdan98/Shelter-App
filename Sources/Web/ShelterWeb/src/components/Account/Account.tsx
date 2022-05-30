import React from "react";
import loginIllustration from "./../../assets/login-illustration.png";
import registerIllustration from "./../../assets/register-illustration.png";
import logo from "./../../assets/logo.png";
import usernameIcon from "./../../assets/username.png";
import passwordIcon from "./../../assets/password.png";
import showPasswordIcon1 from "./../../assets/show-password-1.png";
import hidePasswordIcon1 from "./../../assets/hide-password-1.png";
import styles from "./Account.module.scss";
import { AccountState } from "../../models/AccountModels";
import Login from "./Login";
import Register from "./Register";

const defaultAccountState: AccountState = {
    existentAccount: true,
};

function Account() {
    const [accountState, setAccountState] = React.useState(defaultAccountState);

    const connectForm = accountState.existentAccount ? <Login /> : <Register />;
    return (
        <div className={styles.Account}>
            <div className={styles.Illustration}>
                <img
                    src={accountState.existentAccount ? loginIllustration : registerIllustration}
                    className={styles.IllustrationImage}
                    alt="illustration"
                />
            </div>
            <div className={styles.Logo}>
                <img src={logo} className={styles.AppLogo} alt="logo" />
                <p className={styles.AppName}>Shelter</p>
            </div>
            {connectForm}
        </div>
    );
}

export default Account;
