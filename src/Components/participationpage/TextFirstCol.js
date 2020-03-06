import React from 'react';
import Styles from './Participation.module.css';

//

function TextFirstCol(props) {
    
    return(
        <div id={"contentCol" + props.ID} className={Styles.textColor + " d-flex flex-column justify-content-center"}>
            <div className={ " d-flex justify-content-start mb-2"}>
                <h2 className={Styles.titleTextStyle}>
                    {props.titleText}
                </h2>
            </div>
            <div className={Styles.paragraphContainer + " d-flex justify-content-start mb-2"}>
                <p className={Styles.paraTextStyle}>{props.paraText}</p>
            </div>
            <div className={Styles.imageRestrictions + " d-flex justify-content-center"}> 
                <img src={props.imageURL} className={Styles.imageStyling} />
            </div>
        </div>
    );   
}

export default TextFirstCol;