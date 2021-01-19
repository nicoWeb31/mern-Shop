import React,{ useState} from "react";

const Register = () => {

    const [email, setEmail] = useState('')


    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

//____________________form_________________________________
    const registerForm = () =>{
        return (
            <form onSubmit={HandleSubmit}>
                <div className="form-group">

                    <input type="email" vlaue={email} onChange={e=>setEmail(e.target.value)} className="form-control" autoFocus />

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
        </div>
    );
};

export default Register;
