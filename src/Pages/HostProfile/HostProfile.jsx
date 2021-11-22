import React, { Component , Fragment } from "react";
import {Link} from "react-router-dom";
import { Parallax } from "react-parallax";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";


import MusicasaHeader from "../../Components/McaHeader";
import Helmet from "../../Components/Helmet";
import ArtistVideo from "../../Components/McaArtistVideo";
import BlogList from "../../Components/McaBlogList";
import FooterTwo from "../../Components/McaFooterTwo";

import HostCoverPic from "../../Components/McaHostCoverPic";
import BlogContent from "../../Components/McaBlogContent";


import Slider from "react-slick";


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

                {/* Start HeaderThree Area  */}
                <MusicasaHeader />
                {/* End HeaderThree Area  */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">


                    {/* Start Host Cover Pic (based on Breadcrumb)  */}
                    <HostCoverPic />
                    {/* End Host Cover Pic (based on Breadcrumb)  */}

                    {/* Start Bio Header (based on Portfolio Details) */}
                    <div className="rn-portfolio-details ptb--120 bg_color--1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-details">
                                        <div className="inner">
                                            <div className="profile-container">
                                            <div className="">
                                                <img src="/assets/images-mca/event-cards/artist-03.jpg" className="clip-path-circle-01"/>
                                            </div>

                                            </div>



                                            <h2>Erik & Isabella Saccomani</h2>
                                            <p className="subtitle">Erik and Isabella’s home offers the perfect setting for a perfect music night, under a string of lights and orange and purple skies.</p>
 

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
                    {/* End Bio Header (based on Portfolio Details) */}

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
                    {/* End VideoPopup Area */}

                    {/* Start Concert Cards inside Parallax (based on Blog Area in Startup) */}
                    <Parallax className="rn-blog-area rn-testimonial-light" strength={700} data-black-overlay="7">
                        <div className="blog-area ptb--120" data-black-overlay="6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                            <h2>Latest News</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                        </div>
                                    </div>
                                </div>


                                {/* Start BlogList.jsx  */}
                                <BlogList />
                                {/* End BlogList.jsx  */}

                            </div> 
                        </div>
                        
                    </Parallax>
                    {/* End Concert Cards inside Parallax (based on Blog Area in Startup) */}




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