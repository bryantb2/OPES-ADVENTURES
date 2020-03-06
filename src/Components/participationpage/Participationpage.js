import React from 'react';
import Styles from './Participation.module.css';
import ImgFirstCol from './ImgFirstCol.js';
import TextFirstCol from './TextFirstCol.js';

// section content circle vector
import DarkBlueCircleDivider from "../../ImageAssets/circleDividerDarkBlue.png";

class Participationpage extends React.Component  {
    constructor(props) {
        super(props);
        this.state={
            isMobileLayoutSet: false, // this variable is used to simply track the setLayout logic, since a bool variable takes the place of directly checking the DOM for a style
        };
        
        // BINDS
        this.setProperLayout = this.setProperLayout.bind(this);
        this.layoutBuilder = this.layoutBuilder.bind(this);
        this.initializeLayout = this.initializeLayout.bind(this);
    }

    // LIFECYCLE METHODS
    componentDidMount() {
        this.initializeLayout();
        window.addEventListener('resize',this.setProperLayout);
    }
    
    // METHODS
    setProperLayout() {
        // DETERMINE WHICH LAYOUT TO USE
        let windowWidth = window.innerWidth;
        let mobileLayoutUsed = this.state.isMobileLayoutSet;
        if(windowWidth <= 990 && mobileLayoutUsed === false) {
            this.setState({
                isMobileLayoutSet: true,
            });
        }
        // BG was set to mobile layout and then the layout was expanded
        else if(!(windowWidth <= 990) && mobileLayoutUsed === true) {
            this.setState({
                isMobileLayoutSet: false,
            });
        }
    }
    
    layoutBuilder(layoutSize) {
        // Establish required components
        const ImageFirst = () => (
            <ImgFirstCol
                imageURL={this.props.imageArray[1]}
                ID={1}
                titleText={this.props.titleArray[1]}
                paraText={this.props.paraTextArray[1]}
            />
        );
        const ContentFirst = () => (
            <TextFirstCol
                imageURL={this.props.imageArray[1]}
                ID={1}
                titleText={this.props.titleArray[1]}
                paraText={this.props.paraTextArray[1]}
            />
        );
        const Container = (props) => (
            <div className={" col-lg-4 col-12 mb-5"}>
                {props.children}
            </div>
        );
        
        // render layout
        if(layoutSize === "small") {
            return (
                <Container>
                    <ContentFirst />
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <ImageFirst />
                </Container>
            );
        }
    }
    
    initializeLayout() {
        // sets the mobileLayout bool in the state to true AND BG image if the screen size is below 990px
        // if not below 990, then the BG bool stays at false, meaning the website is using the desktop image
        let windowWidth = window.innerWidth;
        if(windowWidth <= 990) {
            this.setState({
                isMobileLayoutSet: true,
            });
        }
    }
    
    render() {
        return (
            <section id="participationSection">
                <div className={Styles.mainColContainer}>
            
                    <div className={"d-flex justify-content-center mb-1"}>
                        <h1 className={Styles.mainTitleStyle + " p-2"}>
                            {this.props.mainTitleText[0]}
                            <span className={Styles.mainTitleAccentStyle}>{this.props.mainTitleText[1]}</span>
                            {this.props.mainTitleText[2]}
                        </h1>
                    </div>
            
                    <div className={Styles.customLineMargin + " d-flex justify-content-center"}>
                        <span className={Styles.horizontalLine}>&nbsp;</span>
                    </div>
            
                    <article className={"row mb-5 " + Styles.rowPaddingFix}>
                        <div className={" col-lg-4 col-12 mb-5"}>
                            <TextFirstCol
                                imageURL={this.props.imageArray[0]}
                                ID={0}
                                titleText={this.props.titleArray[0]}
                                paraText={this.props.paraTextArray[0]}
                            />
                        </div>
            
                        {(this.state.isMobileLayoutSet === true ? this.layoutBuilder('small') : this.layoutBuilder('large'))}
    
                        <div className={" col-lg-4 col-12"}>
                            <TextFirstCol
                                imageURL={this.props.imageArray[2]}
                                ID={2}
                                titleText={this.props.titleArray[2]}
                                paraText={this.props.paraTextArray[2]}
                            />
                        </div>
                    </article>

                    <div className={" d-flex mb-2 p-2 justify-content-center"}>
                        <img className={Styles.dividerImageRestrictions + ""} src={this.props.divider} />
                    </div>
                </div>
            </section>
    )}; 
}

export default Participationpage;