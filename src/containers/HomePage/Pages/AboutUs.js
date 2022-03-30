import React from 'react'
import { Carousel, Divider } from 'antd';

const HeroSection = () => {

    return (
        <div className="about-us-container">
            <h1 className="about-us-header">Aileler neden bakıcım.com'u tercih ediyor?</h1>
            <div className="about-us-section">
                <ul>
                    <li>
                        <h3>✓</h3>
                        <p>Referanslı ve nitelikli bakıcı profillerine ulaşabiliyorlar</p>
                    </li>
                    <li>
                        <h3>✓</h3>
                        <p>İlan sürecinde ve sonrasında ekibimizden destek alıyorlar</p>
                    </li>
                    <li>
                        <h3>✓</h3>
                        <p>Kendileri için en doğru adaya ulaşıyorlar</p>
                    </li>
                </ul>
                <img src={require('../../../images/old2.png').default} alt='' className="about-us-img" />

            </div>

            <Carousel dots={{ color: 'red' }} autoplay className="about-us-carousel">
                <div>
                    <div className="about-us-carousel-container">
                        <div className="about-us-carousel-header">
                            <h2>Mert Kaim</h2>
                            <img src={"https://picsum.photos/200/300"} alt="" className="about-us-carousel-img" />
                            <p>Bilgisayar Mühendisi</p>
                        </div>
                        <Divider >●</Divider>
                        <p className="about-us-carousel-detail">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div>
                    <div className="about-us-carousel-container">
                        <div className="about-us-carousel-header">
                            <h2>Mert Kaim</h2>
                            <img src={"https://picsum.photos/200/300"} alt="" className="about-us-carousel-img" />
                            <p>Bilgisayar Mühendisi</p>
                        </div>
                        <Divider>●</Divider>
                        <p className="about-us-carousel-detail">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div>
                    <div className="about-us-carousel-container">
                        <div className="about-us-carousel-header">
                            <h2>Mert Kaim</h2>
                            <img src={"https://picsum.photos/200/300"} alt="" className="about-us-carousel-img" />
                            <p>Bilgisayar Mühendisi</p>
                        </div>
                        <Divider>●</Divider>
                        <p className="about-us-carousel-detail">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <div>
                    <div className="about-us-carousel-container">
                        <div className="about-us-carousel-header">
                            <h2>Mert Kaim</h2>
                            <img src={"https://picsum.photos/200/300"} alt="" className="about-us-carousel-img" />
                            <p>Bilgisayar Mühendisi</p>
                        </div>
                        <Divider>●</Divider>
                        <p className="about-us-carousel-detail">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </Carousel>
        </div >
    )
}

export default HeroSection
