import React from 'react';

import './App.css';
import Navbar from "./Components/navbar/Navbar.js";
import Coverpage from "./Components/coverpage/Coverpage.js";
import Homepage from "./Components/homepage/Homepage.js";
import Sectionpage from "./Components/appSections/Sectionpage.js";
import Divider from "./Components/dividers/Divider.js";
import Participationpage from "./Components/participationpage/Participationpage.js";
import ContactInfo from "./Components/contactInfo/ContactInfo.js";
import Supportpage from "./Components/supportSection/Supportpage.js";

import TextConstants from "./UtilityComponents/PageText.js";

// cover page background images
import GradientImage from "./ImageAssets/coverPageGradient.svg";
import MainBackgroundImage from "./ImageAssets/mountainVector.svg";
import MobileBackgroundImage from "./ImageAssets/mountainVectorMobile.svg";
import ForegroundImage from "./ImageAssets/logoGroup.png";

// section images
import PeopleImage from "./ImageAssets/ronaldR.jpg";
import PlacesImage from "./ImageAssets/forest.jpg";
import RWBImage from "./ImageAssets/RWB.jpg";

// section content icons
import PeopleIcon from "./ImageAssets/profileVector.png";
import PlacesIcon from "./ImageAssets/mountainVector.png";
import RWBIcon from "./ImageAssets/flagVector.png";

// section content circle vectors
import RedCircleDivider from "./ImageAssets/circleDividerRed.png";
import LightBlueCircleDivider from "./ImageAssets/circleDividerLightBlue.png";
import DarkBlueCircleDivider from "./ImageAssets/circleDividerDarkBlue.png";

// participation images
// participation image content
import Image1 from "./ImageAssets/stockOne.jpg";
import Image2 from "./ImageAssets/stockTwo.jpg";
import Image3 from "./ImageAssets/stockThree.jpg";

// support page QR code import
import QRCodeImage from "./ImageAssets/QRCode.png";

// contact page background image
import footerBackground from './ImageAssets/footerBackground.png';

function App() {
    // sections image URL arrays
    const sectionIconArray = [PeopleIcon,PlacesIcon,RWBIcon];
    const sectionImagesArray = [PeopleImage,PlacesImage,RWBImage];
    const sectionDividerArray = [RedCircleDivider,LightBlueCircleDivider,DarkBlueCircleDivider];
    
    // sections text content arrays
    const titleTextArray = [TextConstants.FirstSectionSubject,TextConstants.SecondSectionSubject,TextConstants.ThirdSectionSubject];
    const paraTextArray = [TextConstants.FirstSectionParagraph,TextConstants.SecondSectionParagraph,TextConstants.ThirdSectionParagraph];
    
    // participation image URL array
    const participationImagesArray = [Image1,Image2,Image3];
    
    // participation text content arrays
    const participationTitleArray = [TextConstants.FirstColTitle,TextConstants.SecondColTitle, TextConstants.ThirdColTitle];
    const participationParaTextArray = [TextConstants.FirstColParagraph,TextConstants.SecondColParagraph, TextConstants.ThirdColParagraph];
    
  return (
    <div className="UIContainer" >
        <Coverpage 
            titleText={TextConstants.CoverPageTitle}
            gradientImage={GradientImage}
            mainBackgroundImage={MainBackgroundImage}
            mobileBackgroundImage={MobileBackgroundImage}
            foregroundImage={ForegroundImage}
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
        />
        <Divider
            dividerNumber={1}
            text={TextConstants.FirstDividerText}
        />
        <Sectionpage 
            headerTextArray={titleTextArray}
            mainContentArray={paraTextArray}
      
            iconArray={sectionIconArray}
            mainImageArray={sectionImagesArray}
            dividerArray={sectionDividerArray}
        />
        <Divider
            dividerNumber={2}
            text={TextConstants.SecondDividerText}
        />
        <Participationpage 
            mainTitleText={TextConstants.ParticipationTitleArray}
            imageArray={participationImagesArray}
            titleArray={participationTitleArray}
            paraTextArray={participationParaTextArray}
            divider={DarkBlueCircleDivider}
        />
        <Divider
            dividerNumber={3}
            text={TextConstants.ThirdDividerText}
        />
        <Supportpage
            firstTitle={TextConstants.SupportTitle}
            firstPara={TextConstants.SupportParagraph}
            secondTitle={TextConstants.DownloadTitle}
            secondPara={TextConstants.DownloadParagraph}
            thirdTitle={TextConstants.VisitTitle}
            thirdPara={TextConstants.VisitParagraph}
            QRCodeImage={QRCodeImage}
        />
        <ContactInfo
            contactTitle={TextConstants.ContactTitle}
            contactSubTitle={TextConstants.ContactSubTitle}
            emailText={TextConstants.EmailText}
            merchStoreText={TextConstants.MerchStoreText}
            phoneText={TextConstants.PhoneText}
            twitterText={TextConstants.TwitterText}
            locationText={TextConstants.LocationText}
            contactBackground={footerBackground}
        />
    </div>
  );
}

export default App;