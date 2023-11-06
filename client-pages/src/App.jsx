import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './Register';
import LoginPage from "./Login";
import AllPosts from "./AllPosts";
import NavBar from "./Navbar";

function App() {



    return (
        <>
            
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<RegisterPage />} > </Route>
                    <Route path='/register' element={<RegisterPage />} > </Route>
                    <Route path='/login' element={<LoginPage />} > </Route>
                    <Route path='/allposts' element={<AllPosts />} > </Route>
                </Routes>
            </BrowserRouter>

        </>

    )

}

export default App;
