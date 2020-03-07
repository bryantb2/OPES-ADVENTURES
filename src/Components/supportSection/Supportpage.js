import React from 'react';
import Styles from './Supportpage.module.css';
import StyledButton from '../styledButton/Button.js';
import TextConstants from "../../UtilityComponents/PageText.js";

function Supportpage(props) {
    
    return(
        <section id="supportSection" className={Styles.customSupportPadding + " row justify-content-center"}>
            <div className="col-lg-4 col-10 flex-column mb-5">
                <div className={" d-flex p-2 justify-content-center text-center"}>
                    <h1 className={Styles.titleTextStyle}>{props.firstTitle}</h1>
                </div>
                <div className={" d-flex p-3 justify-content-center"}>
                    <p className={Styles.paraTextStyle + " text-center"}>{props.firstPara}</p>
                </div>
                <div className={" d-flex mb-2 p-2 justify-content-center"}>
                    <StyledButton
                        buttonText={TextConstants.SecondButtonText}
                        buttonLink={TextConstants.ButtonSupportLink}
                    />
                </div>
            </div>
            <div className="col-lg-4 col-10 flex-column mb-5">
                <div className={" d-flex p-2 justify-content-center text-center"}>
                    <h1 className={Styles.titleTextStyle}>{props.secondTitle}</h1>
                </div>
                <div className={" d-flex mb-2 p-3 justify-content-center"}>
                    <p className={Styles.paraTextStyle + " text-center"}>{props.secondPara}</p>
                </div>
                <div className={Styles.imageRestrictions + " d-flex mb-2 p-2 justify-content-center"}>
                    <img src={props.QRCodeImage} className={Styles.imageStyling}/>
                </div>
            </div>
        </section>
    );
}
export default Supportpage;