import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='row p-5 login'>
                <div className='col-md-6'>

                </div>
                <div className='col-md-6 g-3 from'>
                    <div className='card p-5 text-dark bg-light'>
                        <form className='row g-3'action="" method="post">
                            <h3>Login Now</h3>
                            <div className="">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <Link to="/dashboard"><button type="submit" className="btn btn-primary">Login</button></Link>
                        </form>
                    </div>
                </div>
            </div >
           
        </>
    )
}
export default Login