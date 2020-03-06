import React from 'react';
import Styles from './Sections.module.css';

function SectionContentHalf(props)  {
    
    return(
        <div className={Styles.pageContentContainer + " " + Styles.textColor + " d-flex flex-column justify-content-center"}>
            <div className={" d-flex mb-2 p-2 justify-content-center"}>
                <img className={Styles.iconImageRestrictions + ""} src={props.icon} />
            </div>
            <div className={ " d-flex justify-content-center"}>
                <h1 className={Styles.titleTextStyle + " text-dark"}>{props.titleText}</h1>
            </div>
            <div className={"mb-5 d-flex justify-content-center"}>
                <span className={Styles.horizontalLine}>&nbsp;</span>
            </div>
            <div className={Styles.paragraphContainer + " mb-3 d-flex justify-content-center"}>
                <p className={Styles.paragraphStyling}>
                    {props.paraText}
                </p>
            </div>  
            <div className={" d-flex mb-2 p-2 justify-content-center"}>
                <img className={Styles.dividerImageRestrictions + ""} src={props.divider} />
            </div>
        </div>
    );
}

export default SectionContentHalf;