import { Button as SignInBtn } from '@mui/material';
import { Button as Btn } from '@material-ui/core';
import { LoginWrapper } from '../styles/Auth.modules';

interface Props {
    value: any;
    setValue: () => void;
    handleLogin: () => void;
    handleChange_isSignUp: () => void;
}

const Login: React.FC<Props> = ({ value, setValue, handleLogin, handleChange_isSignUp }) => {
    return (
        <div className='form-wrapper'>
            <LoginWrapper>
                <span className="sign-title">Sign in</span>
                <form>
                    <input
                        id='full-length'
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={value.email}
                        onChange={setValue}
                    />
                    <input
                        id='full-length'
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={value.password}
                        onChange={setValue}
                    // showPassword={makeVisible}
                    />
                </form>
                <Btn color='primary' onClick={(() =>handleLogin)}> Sign in</Btn>
                <span className='small'>Not Yet Registered?
                    <SignInBtn onClick={handleChange_isSignUp}>Sign up</SignInBtn>
                </span>
            </LoginWrapper>
        </div>
    )
}

export default Login
