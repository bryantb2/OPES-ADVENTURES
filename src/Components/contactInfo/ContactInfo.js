import React from 'react';
import './ContactInfo.css';
//importing images for layout
import emailIcon from '../../ImageAssets/icons/emailIcon.png';
import locationIcon from '../../ImageAssets/icons/locationIcon.png';
import phoneIcon from '../../ImageAssets/icons/phoneIcon.png';
import socialMediaIcon from '../../ImageAssets/icons/socialMediaIcon.png';

class ContactInfo extends React.Component {
    //WORKING ASSUMPTIONS: will recieve a prop.layoutSize string argument that containing either a "small" or "large"
    constructor(props) {
        super(props);
        this.state={
            //determines which JSX layout is used for footer
            layoutSize: "large",
        }
        
        //BINDS
       // this.createEventListeners = this.createEventListeners.bind(this);
       // this.determineLayout = this.determineLayout.bind(this);
       // this.footerResizeHandler = this.footerResizeHandler.bind(this);
        //this.initializeLayoutSize = this.initializeLayoutSize.bind(this);
        //this.smallLayout = this.smallLayout.bind(this);
        //this.largeLayout = this.largeLayout.bind(this);
        
        //METHOD CALLS
        //this.initializeLayoutSize();
        //this.createEventListeners();
    }
    
    // LIFECYCLE METHODS
    componentDidMount() {
        // easiest way to add a CSS background image given the fact that the URL comes from the parent component
        //document.getElementById("contactSection").style.backgroundImage = `url('${this.props.contactBackground}')`; 
    }
    
    //EVENT LISTENERS
    /*createEventListeners() {
        window.addEventListener('resize', this.debounce(this.footerResizeHandler,500));
    }
    
    //EVENT HANDLERS
    footerResizeHandler() {
        let windowWidth = window.outerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 575) {
            this.setState({
                layoutSize: "small",
            });
        }
        //setState of layout to "large" if the size is above 575 but hasn't switched
        else if(this.state.layoutSize === "small") {
            this.setState({
                layoutSize: "large",
            });
        }
    }
    
    //METHODS
    initializeLayoutSize() {
        let windowWidth = window.outerWidth;
        //setState of layoutSize to "small" if below 575px
        if(windowWidth < 575) {
            this.setState({
                layoutSize: "small",
            })
        }
        //no need for else statement to switch to large because layoutSize is already set to large by default
    }
    
    determineLayout(layoutSize) {
        //use layout state to conditionally reder the footer layout
        if(layoutSize==="large") {
            return (
                this.largeLayout()
            )
        }
        else {
            return (
                this.smallLayout()
            )
        }
    }
    
    debounce(func, wait, immediate) {
        //debounce function prevents overloaded client
        //function borrowed from https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
        let timeout;
        return function executedFunction() {
            let context = this;
            let args = arguments;
            
            let later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };*/
    
    //LAYOUTS
    /*smallLayout() {
        return (
        
        )
    }*/
    
    /*largeLayout() {
        return (
            <footer id="contactSection" className="py-5"> 
                <div className="container footer-contentContainer">
                    <div className="row customContentJustify-center customHeaderAlignText">
                        <div className="col-lg-8 col-md-8 col-8 contactInfoHeader">
                            {this.props.contactTitle}
                        </div>
                    </div>
                    <div className="row customContentJustify-center">
                        <div className="col-lg-8 col-md-8 col-8 contactInfo-subHeaderText">
                            {this.props.contactSubTitle}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-4 footerLeftSection footer-subText">
                            <div className="d-flex justify-content-left">
                                <div className="p-2">
                                    <img className="icon specialMaxIconWidth" width="15" src={locationIcon}/>
                                </div>
                                <div className="p-2">{this.props.locationText}</div>
                            </div>
                            <div className="d-flex justify-content-left">
                                <div className="p-2">
                                    <img className="icon maxIconWidth" width="20" src={emailIcon}/>
                                </div>
                                <div className="p-2">{this.props.emailText}</div>
                            </div>
                            <div className="d-flex justify-content-left">
                                <div className="p-2">
                                    <img className="icon maxIconWidth" width="20" src={phoneIcon}/>
                                </div>
                                <div className="p-2">{this.props.phoneText}</div>
                            </div>
                            <div className="d-flex justify-content-left">
                                <div className="p-2">
                                    <img className="icon maxIconWidth" width="20" src={socialMediaIcon}/>
                                </div>
                                <div className="p-2">{this.props.twitterText}</div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1 m-1">
                        </div>
                        <div className="col-lg-1 col-md-1 col-1 m-1 verticalLineStyle">
                        </div>
                        <div className="col-lg-4 col-md-4 col-4 footerRightSection">
                            <div className="d-flex customContentJustify-right">
                                <div className="p-2 text-light">Please consider sharing this site:</div>
                            </div>
                            <div className="d-flex customContentJustify-right customPadding">
                                  <button type="button" className="shareButton text-center btn btn-lg btn-light ">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }*/
    
    
    render() {
            //this.determineLayout(this.state.layoutSize)
        return (
            <footer id="contactSection" className="py-5">
                <div className="container w-100">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8 col-md-8 col-8 contactInfoHeader">
                            {this.props.contactTitle}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-8 dividerSubText contactInfo-subHeaderText">
                            {this.props.contactSubTitle}
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-4 footer-subText">
                            <div className="d-flex justify-content-left">
                                <div className="p-1">
                                    <img className="icon specialMaxIconWidth" width="25" src={locationIcon}/>
                                </div>
                                <div className="p-1">{this.props.locationText}</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4 footer-subText pl-0">
                            <div className="d-flex justify-content-start">
                                <div className="p-1">
                                    <img className="icon maxIconWidth" width="30" src={emailIcon}/>
                                </div>
                                <div className="p-1">{this.props.emailText}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-4 col-md-4 col-4 footer-subText">
                            <div className="d-flex ">
                                <div className="p-1">
                                    <img className="icon maxIconWidth" width="29" src={phoneIcon}/>
                                </div>
                                <div className="p-1">{this.props.phoneText}</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4 footer-subText pl-0">
                            <div className="d-flex ">
                                <div className="p-1">
                                    <img className="icon maxIconWidth" width="30" src={socialMediaIcon}/>
                                </div>
                                <div className="p-1">{this.props.twitterText}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-4 h-100">
                            <div className="d-flex justify-content-start pl-0">
                                <div className="p-2 shareTextCustom text-light">Please consider sharing this site:</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="d-flex p-1">
                                  <button type="button" className="shareButton text-center btn btn-lg btn-light ">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default ContactInfo