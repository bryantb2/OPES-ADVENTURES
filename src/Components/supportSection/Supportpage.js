import React from 'react';
import Styles from './Supportpage.module.css';
import StyledButton from '../styledButton/Button.js';
import TextConstants from "../../UtilityComponents/PageText.js";

// UI IMPORTS
import Card from "../../UtilityComponents/Card";

function Supportpage(props) {
    return(
        <section id="supportSection">
            <div className={Styles.customSupportPadding}>
                <div className="">
                    <div className="p-2 mb-4 d-flex justify-content-center">
                        <Card
                            title={props.firstTitle}
                            bodyText = {props.firstPara}
                            bgColor={"#E3B049"}
                        >
                           <StyledButton
                                buttonText={TextConstants.SecondButtonText}
                                buttonLink={TextConstants.ButtonSupportLink}
                            /> 
                        </Card>
                    </div>
                    <div className="p-2 mb-4 d-flex justify-content-center">
                        <Card
                            title={props.secondTitle}
                            bodyText = {props.secondPara}
                            bgColor={"#E3B049"}
                        >
                            <img src={props.QRCodeImage} className={Styles.imageStyling + " img-thumbnail shadow-sm"} width="200"/>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Supportpage;