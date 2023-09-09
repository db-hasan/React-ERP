import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='p-5 '>
                <form action="" method="post">
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to="/dashboard"><button type="submit" class="btn btn-primary">Submit</button></Link>
                </form>
            </div >
        </>
    )
}
export default Login