import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

// App Components
import About from './components/About';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import Teachers from './components/Teachers';

import CourseContainer from './components/courses/CourseContainer';
import { HTMLCourses } from './data/courses';
import { JSCourses } from './data/courses';
import { CSSCourses } from './data/courses';


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
                    <Route path='html' element={<CourseContainer data={HTMLCourses} />} />
                    <Route path='css' element={<CourseContainer data={CSSCourses} />} />
                    <Route path='javascript' element={<CourseContainer data={JSCourses} />} />
                </Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
