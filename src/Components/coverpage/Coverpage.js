import React from 'react';
import StyledButton from '../styledButton/Button.js';
import Styles from './Coverpage.module.css';
import TextConstants from "../../UtilityComponents/PageText.js";

class Coverpage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            //isMobileBGSet: false, // this variable is used to simply track the setbackground logic, since a bool variable takes the place of directly checking the DOM for a BG image name
        };
        
        // BINDS
        //this.setProperBackgroundImage = this.setProperBackgroundImage.bind(this);
       // this.initializeBGImage = this.initializeBGImage.bind(this);
        
        // EVENT LISTENERS
        //window.addEventListener('resize',this.setProperBackgroundImage);
    }
    
    // LIFECYCLE METHODS
    componentDidMount() { 
        // easiest way to add a CSS background image given the fact that the URL comes from the parent component
        //document.getElementById("coverPage").style.backgroundImage = `url('${this.props.gradientImage}')`; 
        //document.getElementById("coverPageContainerSecondary").style.backgroundImage = `url('${this.props.mainBackgroundImage}')`;
        //this.initializeBGImage();
        
        document.getElementById("coverPage").style.backgroundImage = `url('${this.props.mainBackgroundImage}')`;
    }
    
    // METHODS
    /*setProperBackgroundImage() {
        // BG was set to desktop layout and then the layout was shrunk
        let windowWidth = window.innerWidth;
        let mobileBGBool = this.state.isMobileBGSet;
        if(windowWidth <= 990 && mobileBGBool === false) {
            this.setState({
                isMobileBGSet: true,
            });
            document.getElementById("coverPageContainerSecondary").style.backgroundImage = `url('${this.props.mobileBackgroundImage}')`; 
        }
        // BG was set to mobile layout and then the layout was expanded
        else if(!(windowWidth <= 990) && mobileBGBool === true) {
            this.setState({
                isMobileBGSet: false,
            });
            document.getElementById("coverPageContainerSecondary").style.backgroundImage = `url('${this.props.mainBackgroundImage}')`; 
        }
    }*/
    
    /*initializeBGImage() {
        // sets the mobileBG bool in the state to true AND BG image if the screen size is below 990px
        // if not below 990, then the BG bool stays at false, meaning the website is using the desktop image
        let windowWidth = window.innerWidth;
        if(windowWidth <= 990) {
            this.setState({
                isMobileBGSet: true,
            });
            document.getElementById("coverPageContainerSecondary").style.backgroundImage = `url('${this.props.mobileBackgroundImage}')`; 
        }
    }
    */
    
    render() {
        return (
        <section id="coverPage" className={Styles.coverPageContainer + " jumbotron " + Styles.verticalCenter}>
            <div id="coverPageContainerSecondary" className={"container"}>
                <div className={Styles.coverTextContainer + "d-flex flex-column justify-content-center mb-3"}>
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