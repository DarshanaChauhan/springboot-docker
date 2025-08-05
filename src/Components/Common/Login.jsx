import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();
    const { user: loggedInUser, setUser: setLoggedInUser } = useContext(UserContext); 

    const [message, setMessage] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleInput = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value,
        });
        console.log(loginData);
    };

    const handleSubmit = (evt) => {
        console.log(loginData);
        evt.preventDefault();
        if (loginData.username == "zeel"&& loginData.password == "12345") {
            
            setLoggedInUser(loginData.username);
            setMessage("Logged in successfully!");
            navigate("/navbar");
        }
        else {
            setLoggedInUser(loginData.username);
            setMessage("Invalid credentials!")
        }

    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center mb-4 login-header">
                            <p className="display-4 text-primary">Login</p>
                            <hr />
                            <p className="lead">Login here to continue</p>
                        </div>

                        <div className="card login-card">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
                                    <input type="text" name="username" className="form-control" value={loginData.username} onChange={handleInput} placeholder="Please enter username" required autoFocus />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                                    <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleInput} placeholder="Please enter password" required />
                                </div>
                                <input type="submit" className="btn btn-outline-primary w-100" value="Submit" />
                            </form>

                            {message && (
                                <p className={`mt-3 text-center login-message ${message === 'Invalid credentials!' ? 'text-danger' : 'text-success'}`}>
                                    {message}
                                </p>
                            )}

                            <p className="mt-3 text-center register-link-text">
                                Not yet registered? <Link to="/register" className="text-decoration-none">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    // return (
    //     <>
    //         <div className="container mt-3">
    //             <p className="display-4 text-primary">Login</p>
    //             <hr />
    //             <p className="lead">Login here to continue</p>

    //             <div className="col-4">
    //                 <p>{loggedInUser}</p>
    //                 <form onSubmit={handleSubmit} className="form-group">
    //                     <div className="mb-3">
    //                         <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
    //                         <input type="text" name="username" className="form-control" value={loginData.username} onChange={handleInput} placeholder="Please enter username" required autoFocus />
    //                     </div>
    //                     <div className="mb-3">
    //                         <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
    //                         <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleInput} placeholder="Please enter password" required />
    //                     </div>
    //                     <input type="submit" className="btn btn-outline-primary" value="Submit" />
    //                 </form>
    //                 {message &&
    //                     <p className={`mt-3 ${(message === 'Invalid credentials!') ? 'text-danger' : 'text-success'}`}>{message}</p>
    //                 }
    //                 <p className="mt-3">Not yet registerd? <Link to="/register" className="text-decoration-none">Register</Link> </p>
    //             </div >
    //         </div>
    //     </>
    // );
};

export default Login;








// const Login = () => {

//     return <p>Login Component</p>
// };

// export default Login;
