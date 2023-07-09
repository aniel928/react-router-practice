import React from 'react';
import { useParams } from 'react-router-dom';

const Featured = () => {
    let { course, name } = useParams();
    name = name.replace('-', ' ');

    return (
        <div className="main-content">
            <h2>{name}
            </h2>
            <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{course}</strong>!</p>
        </div>
    );
}

export default Featured;