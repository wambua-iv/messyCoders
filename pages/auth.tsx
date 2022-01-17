import type { NextPage } from 'next';
import { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useForm } from '../CustomHooks';

const Auth: NextPage = () => {
    const [isSignUp, setSignUp] = useState(false);
    const [value, setValue] = useForm({
        firstName: "",
        lastName: "",
        password: "",
        confirm_pass: "",
        email: "",
    });

    const handleRegistration = () => null;
    const handleLogin = () => null;
    const handleChange_isSignUp = () => setSignUp(prev => !prev);
    return (
        <>
        {isSignUp? (        
                <SignUp 
                    value={value}
                    setValue={setValue}
                    handleRegistration={handleRegistration}
                    handleChange_isSignUp={handleChange_isSignUp}/>  
                 ) : (
                <Login 
                    handleLogin={handleLogin}
                    value={value}
                    setValue={setValue}
                    handleChange_isSignUp={handleChange_isSignUp}/>  
                 ) }         
        </>
    )
}

export default Auth;
