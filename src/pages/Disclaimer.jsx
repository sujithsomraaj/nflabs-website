import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Disclaimer extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="products-wrapper mg-buttom">
                <div className="container">
                    <h1>
                    Income Disclaimer
                    </h1>
                    <p>
                    Updated as of Apr 18, 2021
                    </p>
                </div>
                <div className="container mg-top">
                <ol className="disclaimer-list">
                <li>Although we make every effort to accurately represent the services and/or products presented on this website, we make no assurance, representation or promise regarding future earnings or income, or that you will make any specific amount of money, or any money at all, or that you will not lose money.</li>
                <li>Earnings or income statements, or examples of earnings or income, represent estimates of what you may earn; however, there is no promise or guarantee that you may experience the same level of earnings or income.</li>
                <li>There is no assurance that any prior success or past results regarding earnings or income may be an indication of your future success or results.</li>
                <li> Statements or examples of actual earnings on this website that are attributed to a specified individual or business are true and correct, and we will verify them upon request and also provide statements of expected typical results; however, these statements or examples should not be viewed as promises or guarantees of earnings or income. Earnings and income potential are affected by a number of factors over which we have no control, including but not limited to your financial condition, talent, skills, level of effort, motivation, past experience and education, your competition, and changes within the market.</li>
                <li>Operating a business on the Internet involves unknown risks. You should make decisions based on information provided through services and/or products presented on this website with the understanding that an Internet business may not be suitable for you, and that you could experience significant losses or fail to generate any earnings or income at all.</li>
                <li>You should undertake your own due diligence regarding your evaluation of any services and/or products presented on this website, and this includes relying on qualified professional advisors to assist you with your evaluation.</li>
                <li>For the foregoing reasons, you agree that we are not responsible for any decision you may make regarding any information presented on this website or any of the services and/or products presented on this website.</li>
                </ol>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

    