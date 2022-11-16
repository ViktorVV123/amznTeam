import React from 'react';
import './FourPage.css'
import oneImage from '../../pictr/looksone.svg'
import twoImage from '../../pictr/looks_two.svg'
import threeImage from '../../pictr/looks_three.svg'
import fourImage from '../../pictr/looks_four.svg'

export const FourPage = () => {
    return (
        <div className={'FourPage'}>
            <h1 className={'h1Three'}>Fsdfvdfvk fbdfb
                <div className={'moduleLine'}></div></h1>
            <div className={'containerFour'}>
                <div data-aos="fade-up"  className={'containerAll'}>
                    <div   className={'containerImage'}><img src={oneImage} alt={'photo'}/></div>
                    <div  className={'containerText'}>
                        <ul className={'ul'}>
                            <li>Analyze Products</li>
                        <li> Analyze the Market</li>
                        <li>Leverage Opportunities & Set Goals</li>
                        <li> Facilitate Customized Action Plan</li></ul>
                    </div>
                </div>
                <div data-aos="fade-up"  className={'containerAll'}>
                    <div className={'containerImage'}><img src={twoImage} alt={'photo'}/></div>
                    <div className={'containerText'}>
                        <ul className={'ul'}>
                        <li>Develop Paid Advertising Strategy</li>
                        <li>Develop Keyword Strategy & Optimize Listings</li>
                        <li>Utilize or Improve High ROI Ads</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up"  className={'containerAll'}>
                    <div className={'containerImage'}><img src={threeImage} alt={'photo'}/></div>
                    <div  className={'containerText'}>
                        <ul className={'ul'}>
                            <li >Evaluate New Marketplaces</li>
                        <li>Manage Your products exposure</li>
                        <li>Get Customer Reviews</li>
                        <li> Refine Pricing Strategies as Needed</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up"  className={'containerAll'}>
                    <div className={'containerImage'}><img src={fourImage} alt={'photo'}/></div>
                    <div className={'containerText'}>
                        <ul className={'ul'}>
                            <li>Evaluate New Marketplaces</li>
                            <li>Manage Your products exposure</li>
                            <li>Get Customer Reviews</li>
                            <li> Refine Pricing Strategies as Needed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
