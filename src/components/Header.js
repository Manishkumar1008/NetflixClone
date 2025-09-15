import "./Header.css"
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/fireBase'
import { addUser, removeUser } from "../utils/userSlice"


const Header = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)


    useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

              navigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
              navigate("/login")
            }
          });

          //unsubscribe function will be called whenever the component unmounts
          return ()=>unsubscribe()
    },[])

    const handleSignOut = () =>{
        
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/login")
        dispatch(removeUser())
        }).catch((error) => {
        // An error happened.
        });
    }
    return (<div className="header">
        <img className="logo" src="
        https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        {user && <div className="user-logo">
            <img src={user.photoURL} alt="user-logo"></img>
            <button onClick={()=>handleSignOut()}>(sign out)</button>
        </div>}
        
    </div>)
}

export default Header