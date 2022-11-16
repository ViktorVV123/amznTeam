import React from 'react';
import style from './ServicesTwo.module.css'
import account from "../../../pictr/account_tree_FILL0.svg";
import liderBoard from "../../../pictr/leaderboard_FILL0.svg";
import money from "../../../pictr/query_stats_FILL0.svg";
import monitoring from "../../../pictr/monitoring_FILL0.svg";
import query from "../../../pictr/query_stats_FILL0.svg";
import list from "../../../pictr/description.svg";

export  const ServicesTwo = () => {
    return (
        <div className={style.fivePage} id={'fivePAge'}>
            <h1 className={'h1Three'}>vsdfvs fvdfv
                <div className={style.moduleLine}></div></h1>
            <div className={style.containerFive}>
                <div className={style.containerAllFive}>
                    <div data-aos="flip-left"  data-aos-duration="1000"
                         className={style.imageFive}><img src={account} alt={'photo'}/></div>
                    <div className={style.textFive}>Listing
                        Optimization</div>
                </div>
                <div className={style.containerAllFive}>
                    <div data-aos="flip-left"  data-aos-duration="1500"
                         className={style.imageFive}><img src={liderBoard} alt={'photo'}/></div>
                    <div className={style.styletextFive}>Industry
                        Research</div>
                </div>
                <div className={'containerAllFive'}>
                    <div data-aos="flip-left"  data-aos-duration="2000"
                         className={style.imageFive}><img src={money} alt={'photo'}/></div>
                    <div className={style.textFive}>Product Sourcing &
                        Development</div>
                </div>
                <div className={style.containerAllFive}>
                    <div data-aos="flip-left"  data-aos-duration="2500"
                         className={style.imageFive}><img src={monitoring} alt={'photo'}/></div>
                    <div className={style.textFive}>Analytics &
                        Reporting</div>
                </div>
                <div className={style.containerAllFive}>
                    <div data-aos="flip-left"  data-aos-duration="1500"
                         className={style.imageFive}><img src={query} alt={'photo'}/></div>
                    <div className={style.textFive}>Review
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
}

