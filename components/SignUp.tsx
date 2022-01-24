import { Button as SignInBtn } from '@mui/material';
import { Button as Btn } from '@material-ui/core';
import { SignUpWrapper } from '../styles/Auth.modules';
import { User } from '../pages/auth';

interface Props {
    values: User;
    setValue: () => void;
    handleRegistration: () => void;
    handleChange_isSignUp: () => void;
}

const SignUp: React.FC<Props> = ({ values, setValue, handleRegistration, handleChange_isSignUp }) => {
    return (
        <div className='form-wrapper'>
            <SignUpWrapper className='flex flex-jc-c'>
                <span className="sign-title">Sign up</span>
                <form>
                    <div className="user-names flex flex-jc-sb">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={values.firstName}
                            onChange={setValue}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={values.lastName}
                            onChange={setValue}
                        />
                    </div>
                    <input
                        id='full-length'
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={values.email}
                        onChange={setValue}
                    />
                    <div className='passwords flex flex-jc-sb'>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={setValue}
                        // showPassword={makeVisible}
                        />
                        <input
                            type="password"
                            name="confirm_pass"
                            placeholder="Confirm password"
                            value={values.confirm_pass}
                            onChange={setValue}
                        />
                    </div>
                </form>
                <Btn color='primary' onClick={(() =>handleRegistration())}> Sign up</Btn>
                <span className='small'>Already A Registered User?
                    <SignInBtn onClick={handleChange_isSignUp}>Sign in</SignInBtn>
                </span>
            </SignUpWrapper>
        </div>
    )
}

export default SignUp
