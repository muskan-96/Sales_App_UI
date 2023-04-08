// import React from "react";
import "./style.css";
function Login()  {
    return(
        <>
        <h2 className="Heading">LOGIN FORM</h2>
        <div className="container border" >
            <form actioin=" "  className='d-flex flex-column justify-content-start'>
            <label htmlFor="email" className='mt-3 text-muted'>Email</label>
                    <input type="email" name='email' className='mt-2' placeholder='Enter Product Name' required />
                    <label htmlFor="password" className='mt-3 text-muted'>Password</label>
                    <input type="password" name='password' className='mt-2' placeholder='Enter Quantity' required />
                    <input type="submit" value="LOGIN" className='btn btn-primary mt-3 mb-3' />
            </form>
        </div>

        </>
    )
}
export default Login;