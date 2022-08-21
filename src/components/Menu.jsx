import React from 'react';
import '../styles/navbar.css';
import Img6 from '../assets/6.jpg';

const Menu = () => {
    return (
        <div>
            <figure className='position-relative'>
                <img src={Img6} alt="" className='img-fluid' />
                <figcaption>
                    OANIKO ELA ANDROANY RY BE TAY BE ITY
                </figcaption>
            </figure>
            <div className="container">
                <h3>accordion</h3>
                <div className="accordion" id="accordionSection">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne"><button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">menu</button></h2>
                        <div className="accordion-collapse collapse show " id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionSection">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus atque tenetur modi cupiditate quam voluptas, nihil, distinctio labore pariatur corporis aliquid dolorem quaerat qui eos! Repellendus laborum voluptatibus ex vel?
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Menu;
