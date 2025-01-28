import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { createUser, signInWithGoogle} = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);

    
    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 6) errors.push("Password must be at least 6 characters long.");
        if (!/[A-Z]/.test(password)) errors.push("Password must contain at least one uppercase letter.");
        if (!/[a-z]/.test(password)) errors.push("Password must contain at least one lowercase letter.");
        if (!/\d/.test(password)) errors.push("Password must contain at least one number.");
        if (!/[@$!%*?&]/.test(password)) errors.push("Password must contain at least one special character.");
        return errors;
      };
    
      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordErrors(validatePassword(newPassword));
      };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            navigate('/')
            e.target.reset();
        })
        .catch(error => console.log('error', error))
    }

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {email, password}
        console.log('form login', email, password);


        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            setSuccess(true);
           
            e.target.reset();
            navigate('/');
            const newUser = { name, email, photo }

            //save new user
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => console.log('successfully added', data));
        })
        .catch(error => {
            console.log('error', error);
            setErrorMessage(error.message);
            setSuccess(false);
        });
    }
    return (
        <div>
            <div>
            <Helmet>
                <title>Register | MovieHub</title>
            </Helmet>
                <div className="hero bg-base-200 min-h-screen">
                        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                            <form  onSubmit={handleRegister} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Let's Create Account Now!</h1>
                            
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
                                </div>
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
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className={`input input-bordered ${
                                            passwordErrors.length ? "input-error" : ""
                                        }`}
                                        required
                                    />
                                    {passwordErrors.length > 0 && (
                                        <ul className="mt-2 text-sm text-red-500">
                                            {passwordErrors.map((error, index) => (
                                                <li key={index}>{error}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn hover:bg-[#E50914] bg-[#b70c14] text-white">Register</button>
                                </div>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogleSignIn} className="btn flex items-center max-w-3xl mx-auto my-2 w-2/3">
                                    <img className='h-8' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /> 
                                    <span>Countinue with Google</span>
                                </button>
                                <p>Already have an account? <Link to="/login" className='text-[#b70c14]'>Login here</Link></p>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Register;