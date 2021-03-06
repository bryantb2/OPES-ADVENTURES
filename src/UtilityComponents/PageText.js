let TextConstants = (()=> {
    // navbar text
    let itemOne="";
    let itemTwo="";
    let itemThree="";
    let itemFour="";
    let itemFive="";
    
    // intro and main title text
    let coverPageTitle = "";
    let homePageText = "";
    let homePageText2 = "";
    
    // button text
    let firstButtonText = "";
    let secondButtonText = "";
    let thirdButtonText = "";
    let supportLink = "";
    let productLink = "";
    
    // dividers text
    let firstDividerText = "";
    let secondDividerText = "";
    let thirdDividerText = "";
    
    // sections text
    let firstSubjectTitle = "";
    let firstSubjectParagraph = "";
    let secondSubjectTitle = "";
    let secondSubjectParagraph = "";
    let thirdSubjectTitle = "";
    let thirdSubjectParagraph = "";
    
    // participation text
    let participationTitleArray = []; // this is an array because we might want to accent certain words with different fonts
    let firstColTitle = "";
    let firstColParagraph = "";
    let secondColTitle = "";
    let secondColParagraph = "";
    let thirdColTitle = "";
    let thirdColParagraph = "";
    
    // support text
    let supportTitle = "";
    let supportParagraph = "";
    let downloadTitle = "";
    let downloadParagraph = "";
    let visitTitle = "";
    let visitParagraph = "";
    
    // contact text
    let contactTite = "";
    let contactSubTitle = "";
    let locationText = "";
    let merchStoreText = "";
    let emailText = "";
    let phoneText = "";
    let twitterText = "";
    let facebookText = "";
    
    return class {
        
        // NAVBAR METHODS
        static get FirstNavItemText() {
            return itemOne;
        }
        static set FirstNavItemText(data) {
            itemOne = data;
        }
        
        static get SecondNavItemText() {
            return itemTwo;
        }
        static set SecondNavItemText(data) {
            itemTwo = data;
        }
        
        static get ThirdNavItemText() {
            return itemThree;
        }
        static set ThirdNavItemText(data) {
            itemThree = data;
        }
        
        static get FourthNavItemText() {
            return itemFour;
        }
        static set FourthNavItemText(data) {
            itemFour = data;
        }
        
        static get FifthNavItemText() {
            return itemFive;
        }
        static set FifthNavItemText(data) {
            itemFive = data;
        }
        
        
        // BUTTON METHODS
        static get FirstButtonText() {
            return firstButtonText;
        }
        static set FirstButtonText(data) {
            firstButtonText = data;
        }
        
        static get SecondButtonText() {
            return secondButtonText;
        }
        static set SecondButtonText(data) {
            secondButtonText = data;
        }
        
        static get ThirdButtonText() {
            return thirdButtonText;
        }
        static set ThirdButtonText(data) {
            thirdButtonText = data;
        }
        
        static get ButtonSupportLink() {
            return supportLink;
        }
        static set ButtonSupportLink(data) {
            supportLink = data;
        }
        
        static get ButtonProductLink() {
            return productLink;
        }
        static set ButtonProductLink(data) {
            productLink = data;
        }
        
        // INTRO AND HOMEPAGE METHODS
        static get CoverPageTitle() {
            return coverPageTitle;
        }
        static set CoverPageTitle(data) {
            coverPageTitle = data;
        }
        
        static get HomePageText() {
            return homePageText;
        }
        static set HomePageText(data) {
            homePageText = data;
        }
        static get HomePageText2() {
            return homePageText2;
        }
        static set HomePageText2(data) {
            homePageText2 = data;
        }
        
        // DIVIDER METHODS
        static get FirstDividerText() {
            return firstDividerText;
        }
        static set FirstDividerText(data) {
            firstDividerText = data;
        }
        
        static get SecondDividerText() {
            return secondDividerText;
        }
        static set SecondDividerText(data) {
            secondDividerText = data;
        }
        
        static get ThirdDividerText() {
            return thirdDividerText;
        }
        static set ThirdDividerText(data) {
            thirdDividerText = data;
        }
        
        
        // SECTIONS METHODS
        static get FirstSectionSubject() {
            return firstSubjectTitle;
        }
        static set FirstSectionSubject(data) {
            firstSubjectTitle = data;
        }
        
        static get FirstSectionParagraph() {
            return firstSubjectParagraph;
        }
        static set FirstSectionParagraph(data) {
            firstSubjectParagraph = data;
        }
        
        static get SecondSectionSubject() {
            return secondSubjectTitle;
        }
        static set SecondSectionSubject(data) {
            secondSubjectTitle = data;
        }
        
        static get SecondSectionParagraph() {
            return secondSubjectParagraph;
        }
        static set SecondSectionParagraph(data) {
            secondSubjectParagraph = data;
        }
        
        static get ThirdSectionSubject() {
            return thirdSubjectTitle;
        }
        static set ThirdSectionSubject(data) {
            thirdSubjectTitle = data;
        }
        
        static get ThirdSectionParagraph() {
            return thirdSubjectParagraph;
        }
        static set ThirdSectionParagraph(data) {
            thirdSubjectParagraph = data;
        }
        
        
        // PARTICIPATION METHODS
        static get ParticipationTitleArray() {
            return participationTitleArray;
        }
        static set ParticipationTitleArray(data) {
            participationTitleArray = data;
        }
        
        static get FirstColTitle() {
            return firstColTitle;
        }
        static set FirstColTitle(data) {
            firstColTitle = data;
        }
        
        static get FirstColParagraph() {
            return firstColParagraph;
        }
        static set FirstColParagraph(data) {
            firstColParagraph = data;
        }
        
        static get SecondColTitle() {
            return secondColTitle;
        }
        static set SecondColTitle(data) {
            secondColTitle = data;
        }
        
        static get SecondColParagraph() {
            return secondColParagraph;
        }
        static set SecondColParagraph(data) {
            secondColParagraph = data;
        }
        
        static get ThirdColTitle() {
            return thirdColTitle;
        }
        static set ThirdColTitle(data) {
            thirdColTitle = data;
        }
        
        static get ThirdColParagraph() {
            return thirdColParagraph;
        }
        static set ThirdColParagraph(data) {
            thirdColParagraph = data;
        }
        
        
        // SUPPORT METHODS
        static get SupportTitle() {
            return supportTitle;
        }
        static set SupportTitle(data) {
            supportTitle = data;
        }
        
        static get SupportParagraph() {
            return supportParagraph;
        }
        static set SupportParagraph(data) {
            supportParagraph = data;
        }
        
        static get DownloadTitle() {
            return downloadTitle;
        }
        static set DownloadTitle(data) {
            downloadTitle = data;
        }
        
        static get DownloadParagraph() {
            return downloadParagraph;
        }
        static set DownloadParagraph(data) {
            downloadParagraph = data;
        }
        
        static get VisitTitle() {
            return visitTitle;
        }
        static set VisitTitle(data) {
            visitTitle = data;
        }
        
        static get VisitParagraph() {
            return visitParagraph;
        }
        static set VisitParagraph(data) {
            visitParagraph = data;
        }
        
        
        // CONTACT METHODS
        static get ContactTitle() {
            return contactTite;
        }
        static set ContactTitle(data) {
            contactTite = data;
        }
        
        static get ContactSubTitle() {
            return contactSubTitle;
        }
        static set ContactSubTitle(data) {
            contactSubTitle = data;
        }
        
        static get LocationText() {
            return locationText;
        }
        static set LocationText(data) {
            locationText = data;
        }
        
        static get MerchStoreText() {
            return merchStoreText;
        }
        static set MerchStoreText(data) {
            merchStoreText = data;
        }
        
        static get EmailText() {
            return emailText;
        }
        static set EmailText(data) {
            emailText = data;
        }
        
        static get PhoneText() {
            return phoneText;
        }
        static set PhoneText(data) {
            phoneText = data;
        }
        
        static get TwitterText() {
            return twitterText;
        }
        static set TwitterText(data) {
            twitterText = data;
        }
        
        static get FacebookText() {
            return facebookText;
        } 
        static set FacebookText(data) {
            facebookText = data;
        } 
    };
})(); 
    
// BUTTON AND LINK TEXT

TextConstants.FirstButtonText="Support";
TextConstants.SecondButtonText="Support";
TextConstants.ThirdButtonText="Visit";
TextConstants.ButtonSupportLink="https://mobile.opes.pe/opesapp/check-in?ref=qrcode&name=OPES%20Adventures&url=https%3A%2F%2Faccess.opesadventures.com";
TextConstants.ButtonProductLink="#";


// NAVBAR TEXT

TextConstants.FirstNavItemText = "About";
TextConstants.SecondNavItemText = "Support";
TextConstants.ThirdNavItemText = "Contact";
TextConstants.FourthNavItemText = "";
TextConstants.FifthNavItemText = "";


// INTRO AND HOMEPAGE TEXT

TextConstants.CoverPageTitle = "Blockchain for the Venturous Soul";
TextConstants.HomePageText = `"There can be nothing in the world more beautiful than the Yosemite, the groves of the giant sequoias and redwoods, the Canyon of the Colorado, the Canyon of the Yellowstone, the Three Tetons; and our people should see to it that they are preserved for their children and their children's children forever, with their majestic beauty all unmarred." - Theodore Roosevelt`;

TextConstants.HomePageText2 = `For the souls who love the great outdoors and the discovery of new, beautiful places and for those who wish to share their experiences with the world. Our mission: To bring all adventure seeking people together, here on OPES Adventures.`;

// DIVIDERS TEXT

TextConstants.FirstDividerText = "Support Us";
TextConstants.SecondDividerText = "Getting Involved"
TextConstants.ThirdDividerText="";

// SECTIONS TEXT

TextConstants.FirstSectionSubject = "People";
TextConstants.FirstSectionParagraph = "America is great because of her people. All of us know someone who we think deserves to be lifted on broad shoulders, individuals who make this country great. Who is that for you? Post on the MyAmerica app and show the nation a great American. Tell us: THESE ARE MY PEOPLE!!";

TextConstants.SecondSectionSubject = "Places";
TextConstants.SecondSectionParagraph = "Explore the fruited plane. From majestic scenery to bustling night life, America has it all! Show us the best 4th of July parade in the USA. Tell us about a courtyard filled with food carts nobody could pass up.  Take us along on a kayaking trip down the bluest river. Brag about the loudest football stadium that your team calls home. Yell from the rooftop: THIS IS MY LAND!! MyAmerica is your America.";

TextConstants.ThirdSectionSubject = "RW&B";
TextConstants.ThirdSectionParagraph = "The symbol of America is the flag! A beautiful banner that evokes pride and passion. The MyAmerica app will give you a place to celebrate the Red, White and Blue. Post pictures of old glory in all her forms. Tell us what inspired you to post and what you love about the place she flies.";


// PARTICIPATION TEXT
TextConstants.ParticipationTitleArray = ["How "," You ","Can Participate"];
TextConstants.FirstColTitle = "Get OPES ID";
TextConstants.FirstColParagraph = "You can support our effort through the OPES ID app. Using your smart phone, download the app and create an account, then supporting is easy and free. What’s more, you will earn OS points each day when you hit our support button or scan our QR code. Your simple daily action will help the MyAmerica app become reality!";
TextConstants.SecondColTitle = "Look for MyAmerica";
TextConstants.SecondColParagraph = "The app is coming! Check back here frequently to get the latest updates on MyAmerica's progress! We are currently in the conceptual phase. Estimated release date: June 2020.";
TextConstants.ThirdColTitle = "Tell Friends";
TextConstants.ThirdColParagraph = "Spread the word about OPES USA and the MyAmerica app. Share on Facebook, Instagram, Twitter, etc. and get others to tell us all about the America that only they know!";


// SUPPORT TEXT
TextConstants.SupportTitle = "Click to Support";
TextConstants.SupportParagraph = "If you like what we are doing, consider supporting us. It's as easy as hitting the support button above!";
TextConstants.DownloadTitle = "Scan to Support";
TextConstants.DownloadParagraph = "Scan the QR code within the OPES ID mobile app to support our community!";
TextConstants.VisitTitle = "";
TextConstants.VisitParagraph = "";


// CONTACT TEXT
TextConstants.ContactTitle = "Contact Information";
TextConstants.ContactSubTitle = "For Comments, Questions, or Business Inquiries about OPES Adventures:";
TextConstants.MerchStoreText = "abc.com";
TextConstants.LocationText = "USA";
TextConstants.PhoneText = "541 665 7834 ";
TextConstants.TwitterText = "AdventuresOpes";
TextConstants.EmailText = "opesadventures@protonmail.com";



export default TextConstants;