import React from 'react';
import Styles from './Button.module.css';

function StyledButton(props) {
    return(
        <div>
            <a className={Styles.supportButton + " btn btn-primary"} href={props.buttonLink}>{props.buttonText}</a>
        </div>
    );
}

export default StyledButton;