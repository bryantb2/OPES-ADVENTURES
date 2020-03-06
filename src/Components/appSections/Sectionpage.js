import React from 'react';
import Styles from './Sections.module.css';
import SectionContentHalf from './SectionContentHalf.js';
import SectionImageHalf from './SectionImageHalf.js';

class Sectionpage extends React.Component {
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
    
    // LIFEYCYCLE METHODS
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
        const ImageHalf = () => (
            <div className={Styles.overwriteGridStyles + " " + Styles.heightExpanded + " col-lg-6 col-md-12 col-12"}>
                <SectionImageHalf 
                    ID={"2"}
                    halfPageImage={this.props.mainImageArray[1]}
                />
            </div>
        );
        const ContentHalf = () => (
            <div className={Styles.overwriteGridStyles + " col-lg-6 col-md-12 col-12"}>
                <SectionContentHalf
                    icon={this.props.iconArray[1]}
                    titleText={this.props.headerTextArray[1]}
                    paraText={this.props.mainContentArray[1]}
                    divider={this.props.dividerArray[1]}
                />
            </div>
        );
        const Container = (props) => (
            <article id="middleRow" className={"row "}>
                {props.children}
            </article>
        );
        
        // render layout
        if(layoutSize === "small") {
            return (
                <Container>
                    <ContentHalf />
                    <ImageHalf />
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <ImageHalf />
                    <ContentHalf />
                </Container>
            );
        }
    }
    
    initializeLayout() {
        // sets the mobileBG bool in the state to true AND BG image if the screen size is below 990px
        // if not below 990, then the BG bool stays at false, meaning the website is using the desktop image
        let windowWidth = window.innerWidth;
        if(windowWidth <= 990) {
            this.setState({
                isMobileLayoutSet: true,
            });
        }
    }
    
    render() {
        return(
        <section id="appSections">
            <article className={"row "}>
                <div className={Styles.overwriteGridStyles +" col-lg-6 col-md-12 col-12"}>
                    <SectionContentHalf 
                        icon={this.props.iconArray[0]}
                        titleText={this.props.headerTextArray[0]}
                        paraText={this.props.mainContentArray[0]}
                        divider={this.props.dividerArray[0]}
                    />
                </div>
                <div className={Styles.overwriteGridStyles + " " + Styles.heightExpanded + " col-lg-6 col-md-12 col-12"}>
                    <SectionImageHalf 
                        ID={"1"}
                        halfPageImage={this.props.mainImageArray[0]}
                    />
                </div>
            </article>
            
            {(this.state.isMobileLayoutSet === true ? this.layoutBuilder('small') : this.layoutBuilder('large'))}
        
            <article className={"row "}>
                <div className={Styles.overwriteGridStyles +" col-lg-6 col-md-12 col-12"}>
                    <SectionContentHalf 
                        icon={this.props.iconArray[2]}
                        titleText={this.props.headerTextArray[2]}
                        paraText={this.props.mainContentArray[2]}
                        divider={this.props.dividerArray[2]}
                    />
                </div>
                <div className={Styles.overwriteGridStyles + " " + Styles.heightExpanded +" col-lg-6 col-md-12 col-12"}>
                    <SectionImageHalf 
                        ID={"3"}
                        halfPageImage={this.props.mainImageArray[2]}
                    />
                </div>
            </article>
        </section>
        
    )};
}

export default Sectionpage;