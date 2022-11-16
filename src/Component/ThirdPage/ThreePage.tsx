import React from 'react';
import './ThreePage.css';
import bis from '../../pictr/bis.jpg'
import nes from '../../pictr/nes.png'
import idea from '../../pictr/idea.jpg'

export const ThreePage = () => {
    return (
        <div className={'divStyle'}>

            <h2 className={'h1Three'}>Dvgfsd vdfvdfvd
                <div className={'moduleLine'}></div>
            </h2>
            <div className={'threeContainer'}>

                <div className={'textThree'}>
                    <div data-aos="zoom-in" className={'imageThree'}><img className={'img'} src={bis} alt="фото"/>
                        <div className={'styleText'}> Lorem Ipsum has Lorem Ipsum h Lorem Ipsum h Lorem Ipsum h Lorem
                            Ipsum h Lorem Ipsum h
                        </div>
                    </div>


                </div>
                <div className={'textThree'}>
                    <div data-aos="zoom-in" data-aos-delay="300" className={'imageThree'}><img className={'img'}
                                                                                               src={bis} alt="фото"/>
                        <div className={'styleText'}> Lorem Ipsum has Lorem Ipsum h Lorem Ipsum h Lorem Ipsum h Lorem
                            Ipsum h Lorem Ipsum h
                        </div>
                    </div>


                </div>
                <div className={'textThree'}>
                    <div data-aos="zoom-in" data-aos-delay="500" className={'imageThree'}><img className={'img'}
                                                                                               src={bis} alt="фото"/>
                        <div className={'styleText'}> Lorem Ipsum has Lorem Ipsum h Lorem Ipsum h Lorem Ipsum h Lorem
                            Ipsum h Lorem Ipsum h
                        </div>
                    </div>


                </div>

            </div>

        </div>

    );
};


