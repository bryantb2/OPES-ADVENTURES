import React from 'react';
import Styles from './Card.module.css';

function Card(props) {
    // get bootstrap background color class
    const bgColor = props.ColorValue;
    
    // get text
    const title = props.title;
    const bodyText = props.bodyText;
    
    return (
        <article Style={{backgroundColor: bgColor}} className={Styles.profileContainer + " rounded shadow-lg"}>
            <div className="p-4 text-dark">
                <div className="d-flex flex-column justify-content-center">
                    <div className="p-2 text-center">
                        <h2><b>{title}</b></h2>
                    </div>
                    <div className="p-2 d-flex justify-content-center mb-3">
                        {props.children}
                    </div>
                </div>
                <hr className="my-2 border-dark" />
                <div className="text-center">
                    <p className="p-2 pageParagraph">
                       {bodyText}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Card;