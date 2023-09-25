import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";
import styles from "./Navigation.module.css";

const SignInButton = () => <button className={styles.button} onClick={signInWithGoogle}>Sign in</button>;

const SignOutButton = () => <button className={styles.button} onClick={signOut}>Sign out</button>;

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({ isActive }) => (isActive ? "active" : "inactive");

const Navigation = () => (
  <nav>
    <AuthButton />
  </nav>
);

export default Navigation;
