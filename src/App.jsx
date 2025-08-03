import './App.css'
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Layout from './components/Layout/Layout';




function App() {

  let x = createHashRouter([
    {path:'', element:<Layout/> , children:[
    {path:'home' , element:<Home/>},
    {path:'contact' , element:<Contact/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>}

    ]}
  ])

    
    

  return (
    <RouterProvider router={x} ></RouterProvider>
  )
}

export default App
