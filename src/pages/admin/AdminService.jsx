import { useEffect } from 'react'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom';

// icons
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';


// import axios hook
import useRequestData from '../../hooks/useRequestData'


const AdminService = () => {

    // GET data
    const [ data, isLoading, error, makeRequest ] = useRequestData()

    // DELETE data
    const [ dataDelete, isLoadingDelete, errorDelete, makeRequestDelete ] = useRequestData()


    // Hent nyheder fra API'et
    useEffect( () => {


        makeRequest( "services" )


    }, [ dataDelete ] ) // lyt efter data fra slet-kald




    // SLET nyhed
    const handleDelete = ( ID, title ) => {

        console.log( "Service der skal slettes: " + ID )

        if ( window.confirm( "Er du sikker på at du vil slette services: " + title ) ) {

            // Kald til API - slet nyhed
            makeRequestDelete( "services/admin/" + ID, "DELETE" )

        }
    }


    return (

        <div>

            <h1>Administrer nyheder</h1>

            {/* FEJL - ved hentning af nyheder eller ved slet en nyhed */ }
            { ( error || errorDelete ) && <Error errorMessage="Admin services" /> }

            {/* FEJL - ved loading når nyheder hentes eller ved slet en nyhed */ }
            { ( isLoading || isLoadingDelete ) && <Loader /> }


            <table>

                <thead>

                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <Link to="/admin/adminservicecreate">
                                <AiFillPlusCircle />  Opret ny
                            </Link>
                        </th>
                    </tr>

                    <tr>
                        <th>Titel</th>
                        <th>Ret</th>
                        <th>Slet</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        data && data.map( s =>

                            <tr key={ s._id }>
                                <td>{ s.title }</td>
                                <td>


                                    <Link to={ "/admin/adminserviceedit/" + s._id } >
                                        <AiFillEdit size="2em" color="darkgreen" className="pointer" />
                                    </Link>


                                </td>
                                <td>
                                    <AiFillDelete onClick={ () => handleDelete( s._id, s.title ) } size="2em" className="deleteIcon" />
                                </td>
                            </tr>

                        )
                    }

                </tbody>
            </table>

        </div>
    )
}


export default AdminService