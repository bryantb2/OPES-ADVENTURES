import React from 'react';
import Styles from './Homepage.module.css';
import DownArrow from "../../ImageAssets/downArrow.svg";

function Homepage(props) {
    return (
        <section id="homeSection" className={Styles.homePageContainer}>
            <div className={Styles.homePageContainerSecondary + " pt-5 pb-2"}>
                <div className="container">
                    <article>
                        <div className="h-100">
                            <div style={{marginBottom:"-5%"}} className={Styles.homeBoldText + " w-100 text-center p-2"}>
                                Opes
                            </div>
                            <div className={Styles.homeBoldText + " w-100 text-center p-2 mb-0"}>
                                Adventures
                            </div>
                        </div>
                    </article>

                    <article className="h-100 text-center">
                        <p className={Styles.homeParagraphText}>
                            {props.mainContentText}
                        </p>
                        <hr style={{width: "15%", borderWidth:"thick"}} className="my-5 border-light bg-light" />
                        <p className={Styles.homeParagraphText}>
                            {props.mainContentText2}
                        </p>
                    </article>

                    <aside>
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
            </div>
        </section>
    );
}

export default Homepage;