import React from 'react';
import Styles from './Divider.module.css';

function Divider(props)  {
    
    return(
        <div id={"divider"+props.dividerNumber} className={Styles.highlightsDivider}>
            <div className={Styles.dividerHeader + " d-flex justify-content-center dividerHeader"}>
                <div className="p-2">{props.text}</div>
            </div>
        </div>
    );
}

export default Divider;