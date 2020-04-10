import React from 'react';

import './App.css';
import Navbar from "./Components/navbar/Navbar.js";
import Coverpage from "./Components/coverpage/Coverpage.js";
import Homepage from "./Components/homepage/Homepage.js";
import Divider from "./Components/dividers/Divider.js";
import ContactInfo from "./Components/contactInfo/ContactInfo.js";
import Supportpage from "./Components/supportSection/Supportpage.js";

import TextConstants from "./UtilityComponents/PageText.js";

// cover page background and logo images
import MainBackgroundImage from "./ImageAssets/adventurePics/campingStock.jpg";
import Logo from "./ImageAssets/icons/QAMainLogo.png";

// support page QR code import
import QRCodeImage from "./ImageAssets/QRCode.png";

function App() {
  return (
    <div className="UIContainer">
        <Coverpage 
            titleText={TextConstants.CoverPageTitle}
            mainBackgroundImage={MainBackgroundImage}
            mainLogo={Logo}
        />
        <div className="page-divider">
            <Navbar 
                firstItemText={TextConstants.FirstNavItemText}
                secondItemText={TextConstants.SecondNavItemText}
                thirdItemText={TextConstants.ThirdNavItemText}
                fourthItemText={TextConstants.FourthNavItemText}
                fifthItemText={TextConstants.FifthNavItemText}
            />
        </div>
        <Homepage 
            mainContentText={TextConstants.HomePageText}
            mainContentText2={TextConstants.HomePageText2}
        />
        <Divider
            dividerNumber={1}
            text={TextConstants.FirstDividerText}
        />
        <Supportpage
            firstTitle={TextConstants.SupportTitle}
            firstPara={TextConstants.SupportParagraph}
            secondTitle={TextConstants.DownloadTitle}
            secondPara={TextConstants.DownloadParagraph}
            QRCodeImage={QRCodeImage}
        />
        <ContactInfo
            contactTitle={TextConstants.ContactTitle}
            contactSubTitle={TextConstants.ContactSubTitle}
            emailText={TextConstants.EmailText}
            twitterText={TextConstants.TwitterText}
        />
    </div>
  );
}

export default App;