import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const {signInUser, signInWithGoogle} = useContext(AuthContext);

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('from sign up', email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => console.log('error', error))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate('/');
        })
        .catch(error => console.log('error', error))
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
          
     
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form  onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-2xl text-center font-bold">Welcome Back</h1>
                    
                        <button onClick={handleGoogleSignIn} className="btn flex items-center max-w-3xl mx-auto my-5 w-2/3">
                            <img className='h-8' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /> 
                            <span>Countinue with Google</span>
                        </button>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#E50914] bg-[#b70c14] text-white">Login</button>
                        </div>
                        <p>Create an account? <Link to="/register" className='text-[#b70c14]'>Register here</Link></p>
                    </form>
                    </div>
               
            </div>
        </div>
    );
};

export default Login;