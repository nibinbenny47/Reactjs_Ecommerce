import React from 'react';
import './DescriptionBox.css';



const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                made of cotton or a cotton-poly blend that is breathable for serious comfort during warm weather
                <p></p>
            </div>
            
        </div>
    );
};

export default DescriptionBox;