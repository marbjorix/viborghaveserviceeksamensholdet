import { useState } from 'react'
import axios from 'axios'


// BASEURL til api
const apiURL = axios.create( { baseURL: "http://localhost:5023/" } );


const useRequestData = () => {

    const [ isLoading, setisLoading ] = useState( false )
    const [ data, setData ] = useState( null )
    const [ error, setError ] = useState( null )




    // const makeRequest = async ( apiurl, method = "GET", bodydata = null, headers = null, params = null ) => {
    const makeRequest = async ( apiurl, method = "GET", bodydata = null ) => {

        setisLoading( true )

        // Kalder API med GET POST PUT PATCH DELETE
        try {

            let response

            switch ( method ) {
                case "GET":
                    response = await apiURL.get( apiurl )
                    // response = await apiURL.get( apiurl, { headers: headers, params: params } )
                    break;

                // POST PUT PATCH skal have bodydata - altså de data der skal oprettes eller rettes!
                case "POST":
                    response = await apiURL.post( apiurl, bodydata )
                    break;

                case "PUT":
                    response = await apiURL.put( apiurl, bodydata )
                    break;

                case "PATCH":
                    response = await apiURL.patch( apiurl, bodydata )
                    break;

                case "DELETE":
                    response = await apiURL.delete( apiurl )
                    break;

                default:
                    throw new Error( "Invalid method - GET POST PUT PATCH or DELETE was expected" )
            }

            if ( response.data ) {

                setData( response.data )
                setError( null )

            } else {
                throw new Error( "Tomt response/ingen data" )
            }

        } catch ( error ) {

            console.log( error )
            setError( "Der er opstået en fejl: " + error.message )
            setData( null )

        } finally {

            setisLoading( false )

        }



        //}, 5000 );

    }


    // return { data, isLoading, error, makeRequest }
    return [ data, isLoading, error, makeRequest ]

}

export default useRequestData