import React from "react";
import { Route, Routes } from 'react-router-dom';

// App Components
import About from './components/About';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import Teachers from './components/Teachers';

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/teachers' element={<Teachers />} />
                <Route path='/courses' element={<Courses />} />
            </Routes>
        </div>
    );
}

export default App;
