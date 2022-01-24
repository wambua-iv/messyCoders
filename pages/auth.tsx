import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useForm } from '../CustomHooks';
import { AuthWrapper } from '../styles/Auth.modules';

export interface User{
    firstName : string,
    lastName : string,
    email: string,
    password : string,
    confirm_pass : string
}

// const loginUser = async (user) => {
//     await axios
//       .post(`http://localhost:5000/users/login`, user)
//       .then((res) => sessionStorage.setItem("Profile", JSON.stringify(res.data)));
//   };

//   const registerUser = async (newUser) => {
//     await axios
//       .post(`http://localhost:5000/users/add`, newUser)
//       .then((res) => console.log(res.data));

const Auth: NextPage = () => {
    const [isSignUp, setSignUp] = useState(false);
    const [values, setValue] = useForm({
        firstName: "",
        lastName: "",
        password: "",
        confirm_pass: "",
        email: "",
    });
    const router = useRouter()

    const handleRegistration = () => {
        const newUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          };
        console.log(newUser);
        setSignUp(prev => !prev)

    };
    const handleLogin = async() => {
        const user = {
            email: values.email,
            password: values.password,           
          };

          console.log(user)

        // await axios
        //     .post(`http://localhost:5000/users/login`, user)
        //     .then((res) => sessionStorage.setItem("Profile", JSON.stringify(res.data)));
    };
    const handleChange_isSignUp = () => setSignUp(prev => !prev);
    return (
        <>
            <AuthWrapper>
            {isSignUp? (        
                <SignUp 
                    values={values}
                    setValue={setValue}
                    handleRegistration={handleRegistration}
                    handleChange_isSignUp={handleChange_isSignUp}/>  
                 ) : (
                <Login 
                    handleLogin={handleLogin}
                    values={values}
                    setValue={setValue}
                    handleChange_isSignUp={handleChange_isSignUp}/>  
                 ) }       
            </AuthWrapper>  
        </>
    )
}

export default Auth;
