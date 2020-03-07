import React from 'react';
import './ContactInfo.css';

// importing images for layout
import emailIcon from '../../ImageAssets/icons/emailIcon.png';
import locationIcon from '../../ImageAssets/icons/locationIcon.png';
import phoneIcon from '../../ImageAssets/icons/phoneIcon.png';
import socialMediaIcon from '../../ImageAssets/icons/socialMediaIcon.png';

function ContactInfo(props) {
    return (
        <footer id="contactSection" className="py-5">
            <div className="container w-100">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-8 col-8 contactInfoHeader">
                        {props.contactTitle}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-8 col-8 dividerSubText contactInfo-subHeaderText">
                        {props.contactSubTitle}
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-4 footer-subText">
                        <div className="d-flex justify-content-left">
                            <div className="p-1">
                                <img className="icon specialMaxIconWidth" width="25" src={locationIcon}/>
                            </div>
                            <div className="p-1">{props.locationText}</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4 footer-subText pl-0">
                        <div className="d-flex justify-content-start">
                            <div className="p-1">
                                <img className="icon maxIconWidth" width="30" src={emailIcon}/>
                            </div>
                            <div className="p-1">{props.emailText}</div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-4 footer-subText">
                        <div className="d-flex ">
                            <div className="p-1">
                                <img className="icon maxIconWidth" width="29" src={phoneIcon}/>
                            </div>
                            <div className="p-1">{props.phoneText}</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4 footer-subText pl-0">
                        <div className="d-flex ">
                            <div className="p-1">
                                <img className="icon maxIconWidth" width="30" src={socialMediaIcon}/>
                            </div>
                            <div className="p-1">{props.twitterText}</div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
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

export default ContactInfo