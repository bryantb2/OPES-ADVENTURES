import React from 'react';
import Styles from './Homepage.module.css';
import DownArrow from "../../ImageAssets/downArrow.svg";

function Homepage(props) {
    return (
        <section id="homeSection" className={Styles.homePageContainer}>
            <div className={Styles.homePageContainerSecondary + " " + Styles.generalTextStyling}>

                <article className={Styles.mainContentContainer + " row"}>
                    <div className="h-100 col-xl-4 col-lg-12 col-12">
                        <div className={Styles.homeTitleContainer + " d-flex flex-column justify-content-center mb-3"}>
                            <div className={Styles.homeAboutText + " d-flex p-2 justify-content-center"}>
                               About
                            </div>
                            <div className={Styles.homeBoldText + " " + Styles.homeOpesText + " d-flex p-2 justify-content-center"}>
                                Opes
                            </div>
                            <div className={Styles.homeUsaText + " " + Styles.homeBoldText + " d-flex p-2 justify-content-center"}>
                                USA
                            </div>
                            <div className={" d-flex justify-content-center"}>
                                <span className={Styles.horizontalLine}>&nbsp;</span>
                            </div>
                        </div>
                    </div>
        
                    <div className="h-100 col-xl-6 col-lg-10 col-md-10 col-10">
                        <div className={Styles.homeParagraphContainer}>
                            <p className={Styles.homeParagraphText}>
                                {props.mainContentText}
                            </p>
                        </div> 
                    </div>
                </article>

                <aside className={Styles.imageGroupContainer}>
                    <div className={Styles.homeScrollText + " " + Styles.imageGroupInnerContainer + " d-flex flex-column justify-content-center"}>
                        <div className={" d-flex mb-2 p-2 justify-content-center text-center"}>
                            Scroll Down to Checkout Site Sections         
                        </div>
                        <div className="d-flex mb-2 p-2 justify-content-center">
                            <img className={Styles.downArrowStyle} src={DownArrow}/>
                        </div>
                    </div>
                </aside>

            </div>
        </section>
    );
}

export default Homepage;