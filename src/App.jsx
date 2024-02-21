// scss og bootstrap
import './scss/App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

// routing
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// components
import Layout from './layout/Layout';
import AdminLayout from './layout/admin/AdminLayout';
import Home from './pages/Home';
import AdminHome from './pages/admin/AdminHome';
import NoMatch from './pages/NoMatch';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Extra1 from './pages/Extra1';
import Extra2 from './pages/Extra2';
import Login from './pages/Login';
import AdminService from './pages/admin/AdminService';
import AdminServiceCreate from './pages/admin/AdminServiceCreate';
import AdminServiceEdit from './pages/admin/AdminServiceEdit';

//


function App () {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <>

        {/* PUBLIC */ }
        <Route path="/" element={ <Layout /> }>

          {/* Home er onepager med About og Contact */ }
          <Route index element={ <Home /> } />
          <Route path="/extra1" element={ <Extra1 /> } />
          <Route path="/extra2" element={ <Extra2 /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="*" element={ <NoMatch /> } />

        </Route>







        {/* ADMIN */ }
        <Route path="/admin" element={ <AdminLayout /> }>

          <Route index element={ <AdminHome /> } />
          <Route path="/admin/adminservice" element={ <AdminService /> } />
          <Route path="/admin/adminservicecreate" element={ <AdminServiceCreate /> } />
          <Route path="/admin/adminserviceedit/:ID" element={ <AdminServiceEdit /> } />
          <Route path="*" element={ <NoMatch /> } />

        </Route>


      </>
    )
  )


  return (
    <main>
      <RouterProvider router={ router } />
    </main>
  );
}

export default App;