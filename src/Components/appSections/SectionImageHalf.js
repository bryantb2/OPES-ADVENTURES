import React from 'react';
import Styles from './Sections.module.css';

class SectionImageHalf extends React.Component  {
    constructor(props) {
        super(props);
    }
    
    // LIFECYCLE METHODS
    componentDidMount() {
        // easiest way to add a CSS background image given the fact that the URL comes from the parent component
        document.getElementById("ImageContainer" + this.props.ID).style.backgroundImage = `url('${this.props.halfPageImage}')`; 
    }
    
    render() {
        return(
            <div className={Styles.sectionImageRestrictions}> 
                <img id={"ImageContainer" + this.props.ID} className={Styles.imageStyling} />
            </div>
        );
    }
}

export default SectionImageHalf;