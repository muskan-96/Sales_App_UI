import "./style.css";
function Register()  {
    return(
        <>
        <h2 className="Heading">REGISTRATION FORM</h2>
        <div className='container border mt-2'>
                <form action="" className='d-flex flex-column justify-content-start' >

                    <label htmlFor="firstName" className='mt-3 text-muted'>First Name</label>
                    <input type="text" name='firstName' className='mt-2'  required 
                    />

                    <label htmlFor="lastName" className='mt-3 text-muted'>Last Name</label>
                    <input type="text" name='lastName' className='mt-2' required 
                   />

                    <label htmlFor="email" className='mt-3 text-muted'>Email</label>
                    <input type="email" name='email' className='mt-2' required 
                  />

                    <label htmlFor="pass" className='mt-3 text-muted'>Password</label>
                    <input type="password" name='pass' className='mt-2' required 
                   />
                    
                    <input type="submit" value="Submit" className='btn btn-primary mt-3 mb-3' />
                </form>
            </div>
        </>
    )
}
export default Register;