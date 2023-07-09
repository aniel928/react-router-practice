import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

// App Components
import About from './components/About';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import Teachers from './components/Teachers';

import CSS from './components/courses/CSS';
import HTML from './components/courses/HTML';
import JavaScript from './components/courses/JavaScript';

import NotFound from './components/NotFound';

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about/' element={<About />} />
                <Route path='/teachers/' element={<Teachers />} />
                <Route path='/courses/' element={<Courses />}>
                    <Route index element={<Navigate replace to="html" />} />
                    <Route path='html' element={<HTML />} />
                    <Route path='css' element={<CSS />} />
                    <Route path='javascript' element={<JavaScript />} />
                </Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
