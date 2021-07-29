import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
    return (
        <div className="AuthPage">
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </div>
    )
}