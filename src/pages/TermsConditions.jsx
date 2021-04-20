import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Disclaimer extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="products-wrapper">
                <div className="container">
                    <h1>
                    Terms and Conditions
                    </h1>
                    <p>
                    Updated as of Apr 18, 2021
                    </p>
                </div>
                <div className="container">
                    <p className="left-text">
                    By accessing the web page <a href="/">www.nflabs.io</a> (“the Website”) you (“you, your or yourself”) are agreeing to accept and comply with the terms and conditions stated below (“Terms of Use”). You should read the entire Terms and Conditions before using this Website carefully before using this Website.
                    </p>
                    <ol style={{fontSize:"24px"}}>
                        <li><h1 className="left-text head-text">Use of the Website materials</h1>
                        <p className="left-text">
                        The purpose of this Website is to provide its visitors with information about NF Lab’s projects, services, news.
                        <br/><br/>
                        NF Labs uses reasonable efforts to ensure that the Website is constantly available twenty-four hours a day, seven days a week. However, there might be occasions when the Website can be interrupted for maintenance, repairs or due to the failure of telecommunications links and equipment. Every reasonable step will be taken by the Company to minimize such disruptions.
                        </p>
                        </li>
                        <li className="mg-top"><h3 className="left-text head-text">What personal data we collect and why we collect it</h3>
                        <p className="left-text">
                            <span className="text-red">Comments</span><br/>
                         When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. <br/><br/> <span className="text-red">Media</span><br/>  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website. <br/><br/> <span className="text-red">Cookies</span> <br/>
                          If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. <br/><br/> If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. <br/><br/> When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed. <br/><br/> If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                        </p>
                        </li>
                        <li>
                            <h1 className="left-text head-text">Embedded content from other websites</h1>
                            <p className="left-text">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. <br/><br/> These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                        </li>
                        <li>
                            <h1 className="left-text head-text">Analytics</h1>
                            <p className="left-text">
                                <span className="text-red">How long we retain your data</span><br/>
                                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. <br/><br/>
                                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information. <br/><br/>
                                <span className="text-red">What rights you have over your data</span><br/>
                                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes. <br/><br/>
                                <span className="text-red">Where we send your data</span><br/>
                                  Visitor comments may be checked through an automated spam detection service.
                            </p>
                        </li>
                        <li><h1 className="left-text head-text">Changes</h1>
                        <p className="left-text">
                        We may modify, suspend or discontinue this website and/or the Content at any time and without notifying you. We may also change, update, add or remove provisions of these Terms from time to time.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Electronic communications</h1>
                        <p className="left-text">
                        By using our website, you consent to receive electronic communications from us. These electronic communications may include notices and other information concerning or related to the website. These electronic communications are part of your relationship with us.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Copyright</h1>
                        <p className="left-text">
                        Use of any part of or content from this website for commercial purposes of any kind is expressly prohibited. To request permission to use any of the content on this website for commercial purposes, please contact us at <a href = "mailto: support@nflabs.io">support@nflabs.io</a>. <br/><br/> Under no circumstances may any of the content on this website be displayed on either a commercial or personal website without obtaining prior permission. Unauthorized use of any information from this website may violate copyright, trademark and other laws.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Disclaimer</h1>
                        <p className="left-text">
                        This website and all information contained herein is provided “as is”, without warranty of any kind, either express or implied, including but not limited to any implied warranty of merchantability or fitness for a particular purpose. <br/><br/> The content, texts, documents, and related illustrations published on this website could include technical inaccuracies or typographical mistakes. NF Labs may make changes and/or enhancements in the content of this website at any time, without notification. <br/><br/> Without limiting the generality of the foregoing, we make no warranty that your use of our websites will be uninterrupted, timely, secure, or error free or that defects will be corrected. No advice or information, whether oral or written, obtained by you through this website or from us or our subsidiaries/other affiliated companies shall create any warranty. We disclaim all equitable indemnities.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Links to Third Party Sites</h1>
                        <p className="left-text">
                        Our provision of a link to any other site or location is for your convenience only and does not signify our endorsement of any such other site or location, or its contents. NF LABS WILL NOT ACCEPT LIABILITY FOR ANY INFORMATION, SOFTWARE, OR LINKS FOUND AT ANY OTHER WEBSITE, INTERNET LOCATION, OR SOURCE OF INFORMATION, OR FOR ANY USE OF SUCH INFORMATION.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Limitation of Liability</h1>
                        <p className="left-text">
                        In no event shall NF Labs be liable for any direct, indirect, special, or consequential damages, or any other damages whatsoever, for any use of or reliance on this website, or any linked or referenced website, including, without limitation, any lost opportunity, lost profits, business interruption, loss of programs or data, even if expressly advised or otherwise aware of the possibility of such damages, whether in an action of contract, negligence, tort, or otherwise.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Applicable law</h1>
                        <p className="left-text">
                        By using this website, you agree that the laws of Ukraine, without regard to principles of conflict of laws, will govern these Terms of Use and any dispute of any sort that might arise between you and NF Labs.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Local laws</h1>
                        <p className="left-text">
                        We control and operate the website from our headquarter in Ukraine, and the entirety of the website may not be appropriate or available for use in other locations. If you use our websites outside Ukraine, you are solely responsible for following applicable local laws.
                        </p>
                        </li>
                        <li><h1 className="left-text head-text">Contact Us</h1>
                        <p className="left-text">
                        If you have any questions about these Terms or otherwise need to contact us for any reason, you can reach us at <a href = "mailto: support@nflabs.io">support@nflabs.io</a>.
                        </p>
                        </li>
                    </ol>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}
