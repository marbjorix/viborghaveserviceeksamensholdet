import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'


// import contextcomponent som giver adgang til login mv.
import { LoginContext } from '../../context/LoginContext'


const AdminLayout = () => {

    const { user } = useContext( LoginContext )

    if ( !user ) {
        return <Navigate to="/login" replace />
    }


    return (
        <div className="container">

            <AdminNavbar />
            <Outlet />
        </div>
    )
}

export default AdminLayout