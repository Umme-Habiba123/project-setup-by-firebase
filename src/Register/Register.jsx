import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
// import { auth } from '../firebase.init'
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {

    const {createUser} = use(AuthContext)
    const Navigate=useNavigate()
  

    const handleRegister = e => {
        e.preventDefault()


        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)


        // createUserWithEmailAndPassword(auth, email, password, name).then(result => {
        //     console.log(result)
        // }).catch(error => console.log(error))

        createUser(email,password)
        .then(result=>{
            console.log(result)
            Navigate('/')
        }).catch(error=>console.log(error))


    }



    return (
        <div>

            <div className="max-w-lg mx-auto ">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold m-10">Register now!</h1>

                </div>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Your name" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-sm'>Already have an account? Please <NavLink className='text-blue-600 underline' to='/LogIn'>Login</NavLink></p>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;