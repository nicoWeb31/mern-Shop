import React,{ useState} from "react";
import { auth } from '../../../firebase';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {

    const [email, setEmail] = useState('')


    const HandleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            url:'http://localhost:3000/register/complete',
            handleCodeInApp: true,
        }

        await auth.sendSignInLinkToEmail(email, config);

        toast.success(`Email is Sent to ${email}.Please Click the link to complete your registration.`)
        
        //save user and email in local storage
        window.localStorage.setItem('emailForRegistration',email);
        
        //clear state
        setEmail("");
    }

//____________________form_________________________________
    const registerForm = () =>{
        return (
            <form onSubmit={HandleSubmit}>
                <div className="form-group">

                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" autoFocus />

                </div>
                <button className="btn btn-raised" type="submit">register</button>
                    
            </form>
        )
    }


    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
                <div className="col-6"></div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;
