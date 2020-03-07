import React from 'react';
import StyledButton from '../styledButton/Button.js';
import Styles from './Coverpage.module.css';
import TextConstants from "../../UtilityComponents/PageText.js";

class Coverpage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    // LIFECYCLE METHODS
    componentDidMount() {
        document.getElementById("coverPage").style.backgroundImage = `url('${this.props.mainBackgroundImage}')`;
    }
    
    render() {
        return (
        <section id="coverPage" className={Styles.coverPageContainer + " jumbotron " + Styles.verticalCenter}>
            <div id="coverPageContainerSecondary" className={"container"}>
                <div className={Styles.coverTextContainer + "d-flex flex-column justify-content-center mb-3"}>
                    <div className={"text-center mb-2 pb-2"}>
                        <img src={this.props.mainLogo} width="200px" height="200px"/>
                    </div>
                    <div className={Styles.generalTitleTextStyling + " text-center mb-2 pb-2"}>
                        <h1 className={Styles.coverTitleText}>{this.props.titleText}</h1>
                    </div>
                    <div className={"mb-4 pb-2 text-center"}>
                        <StyledButton
                            buttonText={TextConstants.FirstButtonText}
                            buttonLink={TextConstants.ButtonSupportLink}
                        />
                    </div>
                    <div className={Styles.generalTitleTextStyling + " text-center pb-2"}>
                        <h2 className={Styles.coverScrollText}>Scroll Down for More</h2>
                    </div>
                </div>
            </div>
        </section>
    )};   
}

export default Coverpage;