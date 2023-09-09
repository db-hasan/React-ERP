import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='p-5 '>
                <form action="" method="post">
                    <div className="mb-3 col-md-6">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to="/dashboard"><button type="submit" className="btn btn-primary">Submit</button></Link>
                </form>
            </div >
        </>
    )
}
export default Login