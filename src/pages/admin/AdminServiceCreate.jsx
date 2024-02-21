import { useRef, useEffect, useState } from 'react'

// QUILL
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Error from '../../components/Error'
import Loader from '../../components/Loader'


// import request-hook
import useRequestData from '../../hooks/useRequestData'
// import thumbhook
import useThumb from '../../hooks/useThumb'


const AdminServiceCreate = () => {

    // init request-hook
    const [ data, isLoading, error, makeRequest ] = useRequestData()

    // thumbhook (state + function)
    const [ makeThumb, thumbImage ] = useThumb()


    const refForm = useRef();

    // state til quill-tekst
    const [ quillContent, setQuillContent ] = useState( "" )

    // Quill toolbar-options - https://quilljs.com/docs/modules/toolbar/
    let toolbarOptions = [ [ 'bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' } ] ];


    // Når data er gemt - hvad skal der så ske
    useEffect( () => {

        if ( data && data.service ) {

            // tøm felter efter afsendelse           
            refForm.current.reset()

            // tøm quill-feltet ved at tømme den state som quill-feltet henter sin value fra
            setQuillContent( "" )

        }

    }, [ data ] )



    // når formular submittes - kald airtable med POST-request
    const handleSubmit = e => {

        e.preventDefault() // forhindrer reload af component

        let fd = new FormData( e.target )
        fd.append( "content", quillContent ) // quill er en div - så den skal tilføjes "manuelt"

        makeRequest( "services/admin", "POST", fd )

    }

    return (
        <div>

            <h1 >Opret en service nu</h1>

            { isLoading && <Loader /> }

            { error && <Error /> }

            {
                // Besked til brugeren når nyt er oprettet
                data && <article>{ data.service.title } er oprettet med ID: { data.service._id }</article>
            }

            <form onSubmit={ handleSubmit } ref={ refForm } className="my-5">

                {/* Titel ... evt. med ref={ refInputTitel } */ }
                <input type="text" name="title" placeholder="Skriv en titel" required className="form-control" />

                {/* Indhold */ }
                <ReactQuill
                    theme="snow"
                    onChange={ setQuillContent }
                    value={ quillContent }
                    placeholder="Lang produktbeskrivelse (formateret)"
                    modules={ { toolbar: toolbarOptions } }
                    style={ {} }
                    className="my-5"
                />


                {/* Fil */ }
                <input type="file" name="image" onChange={ e => makeThumb( e.target.files[ 0 ] ) } required className="form-control" />
                {
                    thumbImage && thumbImage
                }

                <button type="submit" className="btn btn-success form-control my-5">Opret service</button>
            </form>



        </div>
    )
}


export default AdminServiceCreate