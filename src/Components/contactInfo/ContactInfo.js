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
                <div className="row justify-content-center text-center mb-3">
                    <div className="col-lg-12 col-md-8 col-12 contactInfoHeader">
                        {props.contactTitle}
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 dividerSubText contactInfo-subHeaderText">
                        {props.contactSubTitle}
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-lg-4 col-md-6 col-6 footer-subText pl-0 mb-4">
                        <div className="d-flex justify-content-center">
                            <div className="px-2">
                                <img className="icon maxIconWidth" width="30" src={emailIcon}/>
                            </div>
                            <a href={props.emailText} className="text-light p-1" target="_blank">{props.emailText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default ContactInfo