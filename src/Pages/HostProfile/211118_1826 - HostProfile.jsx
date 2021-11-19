import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import FooterTwo from "../../Components/FooterTwo";
import Helmet from "../../component/common/Helmet";
import Portfolio from "../../component/HomeLayout/homeOne/Portfolio";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";


import BlogContent from "../../elements/blog/BlogContent";
import { slickDot } from "../../page-demo/script";
import ArtistVideo from "../../blocks/ArtistVideo";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Host Profile',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Perform With Us',
        buttonLink: '/contact'
    },
]

const list = [
    {
        image: 'image-1',
        category: 'A',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'B',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]


class HostProfile extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        const PostList = BlogContent.slice(0 , 5);
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        return(
            <Fragment>
                <Helmet pageTitle="HostProfile" />
                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service', 'about', 'portfolio','team','testimonial','blog', 'contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Concerts</a></li>
                                    <li><a href="#about">My Profile</a></li>
                                    <li><Link to="/main-demo" >Demos</Link></li>
                                </Scrollspy>
                            </nav>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}




                {/* Start Page Wrapper  */}
                <main className="page-wrapper">


                    {/* Start Slider Area   */}
                    <div className="slider-activation slider-creative-agency" id="home">
                        <div className="bg_image bg_image--26" data-black-overlay="6">
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End Slider Area   */}

                    {/* Start Portfolio Details */}
                    <div className="rn-portfolio-details ptb--120 bg_color--1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-details">
                                        <div className="inner">
                                            <h2>Nicky Stefan</h2>
                                            <p className="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p>

                                            <div className="portfolio-view-list d-flex flex-wrap">
                                                <div className="port-view">
                                                    <span>Branch</span>
                                                    <h4>Ability</h4>
                                                </div>

                                                <div className="port-view">
                                                    <span>Project Types</span>
                                                    <h4>Website</h4>
                                                </div>

                                                <div className="port-view">
                                                    <span>Program</span>
                                                    <h4>View Project</h4>
                                                </div>
                                            </div>

                                            <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                                <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                    {SocialShare.map((val , i) => (
                                                        <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Details */}

                    {/* Start About Area */}
                    <div className="about-area ptb--120 bg_color--5" id="about">
                        <div className="about-wrapper">
                            <div className="container">
                                <div className="row row--35 align-items-top">
                                    <div className="col-lg-4">
                                        <div className="about-inner inner">
                                            <div className="section-title">
                                                <h2 className="title">About the Artist</h2>
                                                <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#alteration">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="">
                                            <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End About Area */}

                    {/* Start VideoPopup Area */}
                    <ArtistVideo />
                    {/* End VideoPopup */}

                    {/* Start Portfolio Area */}
                    <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
                        <div className="rn-slick-dot">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title service-style--3 text-center mb--15 mb_sm--0">
                                            <h2 className="title">Concerts</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="slick-space-gutter--15 slickdot--20">
                                            <Slider {...slickDot}>
                                                {list.map((value , index) => (
                                                    <div className="portfolio" key={index}>
                                                        <div className="thumbnail-inner">
                                                            <div className={`thumbnail ${value.image}`}></div>
                                                            <div className={`bg-blr-image ${value.image}`}></div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="inner">
                                                                <p>{value.category}</p>
                                                                <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                                <div className="portfolio-button">
                                                                    <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link className="link-overlay" to="/portfolio-details"></Link>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}

                    {/* Start Portfolio Area */}
                    <div className="portfolio-area ptb--120 bg_color--1">
                        <div className="portfolio-sacousel-inner mb--55">
                            <Portfolio />
                        </div>
                    </div>
                    {/* End Portfolio Area */}



                </main>
                {/* End Page Wrapper  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
                


            </Fragment>
        )
    }
}

export default HostProfile;