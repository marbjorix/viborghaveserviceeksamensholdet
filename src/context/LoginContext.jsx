import { useState, createContext } from "react"

export const LoginContext = createContext()

const LoginContextProvider = props => {


    // state der fortæller om der er logget ind (= er en user) eller ej (= der er IKKE en user)
    const [ user, setUser ] = useState()



    // Login-metode (email kan evt. være username)
    const signIn = ( email, password ) => {

        console.log( email, password )

        if ( email === "a@a.dk" && password === "abc123" ) {

            setUser( email )

        } else {

            // tøm state for en sikkerheds skyld hvis der logges forkert ind
            setUser()
        }

    }


    // Logud-metode
    const signOut = () => {
        setUser() // tøm state
    }


    return (
        <LoginContext.Provider value={ { signIn, signOut, user } } >
            { props.children }
        </LoginContext.Provider>
    )

}

export default LoginContextProvider