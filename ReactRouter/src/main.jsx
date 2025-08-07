import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Home from './components/Home.jsx'


//-------------------Method 1------------------------
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//       path:"",
//       element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contacts/>
//         }
//     ]
//   }
// ])


//------------------Method 2------------------
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contacts/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
