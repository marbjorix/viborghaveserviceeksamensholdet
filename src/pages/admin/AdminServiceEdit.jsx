import { useRef, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


// QUILL
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Error from '../../components/Error'
import Loader from '../../components/Loader'

// import request-hook
import useRequestData from '../../hooks/useRequestData'


const AdminServiceEdit = () => {

    // ID på det der skal rettes - sendes med via params (tjek App.jsx!)
    const { ID } = useParams()
    // Så siden kan forlades efter PUT:
    const navigate = useNavigate()


    // init request-hook - til GET data (når siden loader) og PUT data (når der trykkes på gem-rettelse-button)
    const [ data, isLoading, error, makeRequest ] = useRequestData()
    const [ dataPUT, isLoadingPUT, errorPUT, makeRequestPUT ] = useRequestData()


    const refForm = useRef(); // så jeg tømme formularen for data

    // state til quill-tekst
    const [ quillContent, setQuillContent ] = useState( "" )

    // Quill toolbar-options - https://quilljs.com/docs/modules/toolbar/
    let toolbarOptions = [ [ 'bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' } ] ];


    // Når data er gemt - hvad skal der så ske
    useEffect( () => {



        if ( dataPUT && dataPUT.rettet ) {

            // 2. Forlad siden efter succesfuld PUT
            navigate( "/admin/adminservice" )

        } else {

            // 1. Hent data der skal rettes - når siden er loadet
            makeRequest( 'services/' + ID )

        }

    }, [ dataPUT ] )



    // når formular submittes - kald airtable med POST-request
    const handleSubmit = e => {

        e.preventDefault() // forhindrer reload af component

        let fd = new FormData( e.target )
        fd.append( "content", quillContent ) // quill er en div - så den skal tilføjes "manuelt"

        makeRequestPUT( "/services/admin/" + ID, "PUT", fd )

    }

    return (
        <div>

            <h1>Ret en service</h1>

            { ( isLoading || isLoadingPUT ) && <Loader /> }

            { ( error || errorPUT ) && <Error /> }

            {
                // Besked til brugeren når nyt er oprettet
                // data && <article>{ data.service.title } er oprettet med ID: { data.service._id }</article>
            }

            {
                data &&


                <form onSubmit={ handleSubmit } ref={ refForm } className="my-5">

                    {/* Titel ... evt. med ref={ refInputTitel } */ }
                    <input type="text" name="title" defaultValue={ data.title } placeholder="Skriv en titel" required className="form-control" />

                    {/* Indhold */ }
                    <ReactQuill
                        theme="snow"
                        onChange={ setQuillContent }

                        defaultValue={ data.content }
                        placeholder="Lang produktbeskrivelse (formateret)"
                        modules={ { toolbar: toolbarOptions } }
                        style={ {} }
                        className="my-5"
                    />


                    {/* Fil */ }
                    <p>Nuværende billede: <img src={ "http://localhost:5023/images/" + data.image } width="100" /></p>
                    <h4>Ret/vælg billede (overskriver det eksisterende):</h4>

                    <input type="file" name="image" className="form-control" />

                    <button type="submit" className="btn btn-success form-control my-5">RET service</button>
                </form>

            }



        </div>
    )
}



export default AdminServiceEdit
