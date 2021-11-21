import React, { Component , Fragment } from "react";
import {Link} from "react-router-dom";
import { Parallax } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";


import MusicasaHeader from "../../Components/McaHeader";
import Helmet from "../../Components/McaHelmet";
import ArtistVideo from "../../Components/McaArtistVideo";
import BlogList from "../../Components/McaBlogList";
import FooterTwo from "../../Components/McaFooterTwo";

import ArtistCoverPic from "../../Components/ArtistCoverPic";
import BlogContent from "../../Components/McaBlogContent";
import ArtistSlider from "../../Components/ArtistSlider";




const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]



class ArtistTemplate extends Component{
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
                <Helmet pageTitle="ArtistProfile" />
                <div className="artist-container">
                
                
                {/* Start HeaderThree Area  */}
                <MusicasaHeader />
                {/* End HeaderThree Area  */}

                {/* Start Main Tag with Page Wrapper  */}
                <main className="page-wrapper">

                    <ArtistCoverPic />

                    {/* Start Bio Header (based on Portfolio Details) */}
                    <div id="bio-area-container" className="rn-portfolio-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 left-area">
                                    <div className="profile-pic"></div>
                                    <div className="portfolio-share-link">
                                        <ul className="social-share rn-md-size d-flex justify-content-start liststyle mt--15">
                                            {SocialShare.map((val , i) => (
                                                <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="membership-date">Member since 2019</div>
                                </div>

                                <div className="col-12 col-md-8 col-lg-8 right-area">
                                    <h1>Nicky Stefan</h1>
                                    <div className="snippet"><h3>A talented jazz singer, Stefan has been fusing jazz and Latino sounds since lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></div>
                                    <div className="row genre-and-city ">
                                        <div className="col-12 col-md-6 block-genres"><h5>Genres:</h5> Jazz, Blues, Soul… More +</div>
                                        <div className="col-12 col-md-6 block-location"><h5>Location:</h5> Miami, Florida</div>
                                    </div>                                                
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Bio Header (based on Portfolio Details) */}

                    {/* Start About Area */}
                    <div id="about" className="about-area mca-gradient-01">
                        <div className="about-wrapper">
                            <div className="container ptb-80">
                                <div className="row">
                                    <div className="col-lg-4 about-container">
                                        <h3 className="pink-text">About the Artist</h3>
                                        <p className="description">Nicky Stefan, an Ecuadorian urban pop singer whose current country of residence is the USA and has lived and graduated as a singing teacher and professional singer in Moscow, Russia. Nicky Stefan participated in several international competitions, such as La Voz Russia, New Wave Lithuania, and La Voz Ecuador.  
                                        </p>
                                    </div>
                                    <div className="col-lg-8">
                                        {/* Start SliderTwo, from slider component  */}
                                        <ArtistSlider />
                                        {/* End  SliderTwo, from slider component  */}
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
                                            <h2>Concerts</h2>
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
                {/* End Main Tag with Page Wrapper  */}

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
                

                </div>

            </Fragment>
        )
    }
}

export default ArtistTemplate;