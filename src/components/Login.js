import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom"
import "./login.css";
import {validateData} from "../utils/Validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/fireBase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage]= useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)



    const toggleSignIn = () =>{
        setIsSignInForm(!isSignInForm)
    }

    const handleOnSubmitForm = () =>{
        const message = isSignInForm?validateData(email.current?.value,password.current?.value):validateData(email.current?.value,password.current?.value,name.current?.value||"")
        setErrorMessage(message)
        if(message) return 

        if(!isSignInForm){//sign up a user
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;

              updateProfile(user, {
                    displayName: name.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    // ..
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(errorMessage)
                  });
              console.log(user)

              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }
        else{
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage)
          });
        }
        
    }

  return (
    <>
    <div className="login-container">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="background"
        className="background-image"
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Form */}
      <div className="form-wrapper">
        <form onSubmit={(e)=>e.preventDefault()}className="login-form">
          <h1>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder="Name" ref={name}/> }
          <input type="email" placeholder="Email Address"
            ref = {email}
           />
          <input type="password" placeholder="Password" ref={password} />
          {errorMessage && <p className="errorMsg">{errorMessage}</p>}
          <button type="submit" onClick={()=>handleOnSubmitForm()}>{isSignInForm?"Sign In":"Sign Up"}</button>
          {isSignInForm ? <p>
            New to Netflix? <a onClick={()=>toggleSignIn()}>Sign up now</a>
          </p>:<p>Already have an account? <a onClick={()=>toggleSignIn()}>Sign In Now</a></p>}
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
