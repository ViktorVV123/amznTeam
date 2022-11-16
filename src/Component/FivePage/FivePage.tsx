import React from 'react';
import './FivePage.css'
import account from '../../pictr/account_tree_FILL0.svg'
import money from '../../pictr/query_stats_FILL0.svg'
import list from '../../pictr/description.svg'
import liderBoard from '../../pictr/leaderboard_FILL0.svg'
import monitoring from '../../pictr/monitoring_FILL0.svg'
import query from '../../pictr/query_stats_FILL0.svg'

export const FivePage = () => {
    return (
        <div className={'fivePage'} id={'fivePAge'}>
            <h1 className={'h1Three'}>vsdfvs fvdfv
                <div className={'moduleLine'}></div></h1>
            <div className={'containerFive'}>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="1000"
                         className={'imageFive'}><img src={account} alt={'photo'}/></div>
                    <div className={'textFive'}>Listing
                        Optimization</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="1500"
                        className={'imageFive'}><img src={liderBoard} alt={'photo'}/></div>
                    <div className={'textFive'}>Industry
                        Research</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="2000"
                        className={'imageFive'}><img src={money} alt={'photo'}/></div>
                    <div className={'textFive'}>Product Sourcing &
                        Development</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="2500"
                        className={'imageFive'}><img src={monitoring} alt={'photo'}/></div>
                    <div className={'textFive'}>Analytics &
                        Reporting</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="1500"
                        className={'imageFive'}><img src={query} alt={'photo'}/></div>
                    <div className={'textFive'}>Review
                        Management</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="2000"
                        className={'imageFive'}><img src={list} alt={'photo'}/></div>
                    <div className={'textFive'}>FBA &
                        Logistics</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="2500"
                        className={'imageFive'}><img src={account} alt={'photo'}/></div>
                    <div className={'textFive'}>Pricing
                        Monitoring</div>
                </div>
            </div>
        </div>
    );
};

