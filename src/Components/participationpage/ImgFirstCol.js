import React from 'react';
import Styles from './Participation.module.css';

//

function ImgFirstCol(props) {
    
    return(
        <div id={"contentCol" + props.ID} className={Styles.textColor + " d-flex flex-column justify-content-center"}>
            <div className={Styles.imageRestrictions + " d-flex justify-content-center mb-2"}> 
                <img src={props.imageURL} className={Styles.imageStyling} />
            </div>
            <div className={ " d-flex justify-content-start mb-2"}>
                <h2 className={Styles.titleTextStyle}>
                    {props.titleText}
                </h2>
            </div>
            <div className={Styles.paragraphContainer + " d-flex justify-content-start mb-2"}>
                <p className={Styles.paraTextStyle}>{props.paraText}</p>
            </div>
        </div>
    );
}

export default ImgFirstCol;