import React from 'react';
import Styles from './Navbar.module.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navBarSticking: false,
        }
        
        //these are not part of state because they are not part of any rendered JSX
        this.navBar = null;
        //this variable exists to counteract the effects of resizing the window, which changes the offset height of the parent elements
        this.navBarHeight = null;
        
        //BINDS
        this.navbarScrollEventHandler = this.navbarScrollEventHandler.bind(this);
        this.updateNavbarHeight = this.updateNavbarHeight.bind(this);
        this.updateNavbarData = this.updateNavbarData.bind(this);
        this.eventListeners = this.eventListeners.bind(this);
    }
    
    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //LIFECYCLE METHODS
    componentDidMount() {
        //used to prevent premature loading of document elements into state before they have rendered
        //fill state navBar THEN navBar height
        //proceed to assign event handlers
        this.updateNavbarData();
        this.updateNavbarHeight();
        this.eventListeners();
    }
    
    //EVENT LISTENERS
    eventListeners() {
        //EVENT LISTENERS
        window.addEventListener('scroll', this.debounce(this.navbarScrollEventHandler,5));
    }
    
    //EVENT HANDLERS AND METHODS
    navbarScrollEventHandler() {
        //function will calculate navbar and pageOffset height to make the navbar stick or unstick to the top
        this.updateNavbarHeight(); //accounts for resizing of the window and the element being removed from the viewport
        if(window.pageYOffset > this.navBarHeight) {
            this.setState({
                navBarSticking: true,
            });
        }
        else {
            this.setState({
                navBarSticking: false,
            });
        }
        //console.log("INSIDE NAVBAR SCROLL EVENT");
    }
    
    //METHODS
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
    };
    
    updateNavbarData() {
        //loads navbar element into the navbar class variable
        this.navBar = document.getElementById("navigationBar");
    }
    
    updateNavbarHeight() {
        //loads height data into the height class variable
        this.navBarHeight = this.getOffsetTop(this.navBar);
    }
    
    getOffsetTop(element){
        //gets the offset height of the navbar by iterating through parent elements until it's null
        let offsetTop = 0;
        while(element) {
            offsetTop += element.offsetTop;
            element = element.parentElement;
        }
        return offsetTop;
    }
    
    
    render() {
        return (
            <nav id="navigationBar" className={((this.props.alwaysFixed===true || this.state.navBarSticking===true) ? Styles.customNavStylesFixed : Styles.customNavStylesunFixed) + " " + Styles.customNavStylesunFixed + " " + Styles.customNavBar + " navbar navbar-expand-lg navbar-dark "}>
              <a className={Styles.customNavBrand + " navbar-brand"} href="#">OPES Adventures</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className={Styles.customNavVerticalLine}>&nbsp;</div>
                <ul className="navbar-nav mr-auto">
                    <li className={Styles.customNavItem + " nav-item active"}>
                        <a className={Styles.customNavLink + " nav-link"} href="#homeSection">{this.props.firstItemText}<span className="sr-only">(current)</span></a>
                    </li>
                    <li className={Styles.customNavItem + " nav-item active"}>
                        <a className={Styles.customNavLink + " nav-link"} href="#divider1" >{this.props.secondItemText}<span className="sr-only">(current)</span></a>
                    </li>
                    <li className={Styles.customNavItem + " " + Styles.customItemWidth + " nav-item active"}>
                        <a className={Styles.customNavLink + " nav-link"} href="#divider2">{this.props.thirdItemText}<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Navbar;