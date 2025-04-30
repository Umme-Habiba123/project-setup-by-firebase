import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const LogIn = () => {
    const Navigate = useNavigate()

    const { userSignin } = use(AuthContext)


    const handleLogin = e => {

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(password, email)



        userSignin(email, password)
            .then(result => {
                console.log(result.user)
            }).catch(error => console.log(error))
           Navigate('/')
           
    }
    return (
        <div>

            <div className="max-w-lg mx-auto ">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold m-10">Login now!</h1>

                </div>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-sm'>New to this site? Please <NavLink className='text-blue-600 underline' to='/Register'>Register</NavLink></p>
                        </form>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default LogIn;