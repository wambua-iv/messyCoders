import { Button as SignInBtn } from '@mui/material';
import { Button as Btn } from '@material-ui/core';
import { LoginWrapper } from '../styles/Auth.modules';
import { User } from '../pages/auth';

interface Props {
    values: User,
    setValue: () => void;
    handleLogin: () => void;
    handleChange_isSignUp: () => void;
}

const Login: React.FC<Props> = ({ values, setValue, handleLogin, handleChange_isSignUp }) => {
    return (
        <div  className='form-wrapper'>
            <LoginWrapper className='flex flex-jc-c'>
                <span className="sign-title">Sign in</span>
                <form>
                    <input
                        id='full-length'
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={values.email}
                        onChange={setValue}
                    />
                    <input
                        id='full-length'
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={setValue}
                    // showPassword={makeVisible}
                    />
                </form>
                <Btn color='primary' onClick={(() =>handleLogin())}> Sign in</Btn>
                <span className='small'>Not Yet Registered?
                    <SignInBtn onClick={handleChange_isSignUp}>Sign up</SignInBtn>
                </span>
            </LoginWrapper>
        </div>
    )
}

export default Login
