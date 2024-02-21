import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


// import login-context filen med singin-metoden
import { LoginContext } from '../context/LoginContext'


const Login = () => {

    const { signIn, user } = useContext( LoginContext )

    const navigate = useNavigate() // så vi kan navigere væk fra siden, når noget er rettet


    // Håndter login
    const handleLogin = e => {

        e.preventDefault()

        signIn( e.target.email.value, e.target.password.value )

        navigate( "/admin" ) // hvis det er forkert sender admin retur til login!
    }


    return (
        <section className="container">
            <div className="row justify-content-center">

                <h1>Login</h1>

                <form onSubmit={ handleLogin } className="col-6">

                    {/* bredden kan også styres med w-50 fx <div className="mb-3 w-50"> */ }
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pw" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="pw" required />
                    </div>

                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login