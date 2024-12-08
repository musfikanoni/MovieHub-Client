import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('form login', email, password);
        

        //reset error and status
        setErrorMessage('');
        setSuccess(false);

        if(password.length < 6){
            setErrorMessage('Password should be 6 charecter')
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if(!passwordRegex.test(password)){
            setErrorMessage('At last 1 uppercase,1 lowercase and 1 number and 1 special character');
            return;
        }

        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            setSuccess(true);
            e.target.reset();
            navigate('/');
            const newUser = { name, email }

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
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Let's Register Now!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form  onSubmit={handleRegister} className="card-body">
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            {
                                errorMessage && <p className='text-red-700'>{errorMessage}</p>
                            }
                            {
                                success && <p>Succssfully Register</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;