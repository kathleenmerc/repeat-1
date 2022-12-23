import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function SignUpPage (props) {
    return (
        <div className="signUp">
            <h1>sign up page</h1>
            <SignUpForm setUser={props.setUser}/>
        </div>
    )
}