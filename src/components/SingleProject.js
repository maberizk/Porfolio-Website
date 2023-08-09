// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { projects } from "../data";
// import { NavLink, useParams } from 'react-router-dom';


// export default function SingleProject() {
//     const { id } = useParams(); // Make sure to use the correct property name, 'id'.

//     const project = projects.find((project) => project.id === parseInt(id));

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="projectPage">
//             <Navbar />
//             <div>
//                 <div className="singleProject_info">
//                     <div className="singleProject_header">
//                     <h1>{project.title}</h1>
//                     <p>{project.description}</p>
//                     </div>
//                     <p>{project.about}</p>
//                 </div>
//                 <div className="singleProject">
//                     {project.images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             className="singleProject_images"
//                             alt={`${project.title} - Image ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink, useParams } from 'react-router-dom';

export default function SingleProject() {
    const { id } = useParams(); // Make sure to use the correct property name, 'id'.

    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <div className='projectPage'>
            <Navbar />
            <div>
                <Carousel>
                    {project.images.map((image, index) => (
                        <Carousel.Item key={index} interval={1000}>
                            <img
                                src={image}
                                className="singleProject_images"
                                alt={`${project.title} - Image ${index + 1}`}
                            />
                            <Carousel.Caption>
                                {/* <h3>{project.title}</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <Footer />
        </div>
    );
}