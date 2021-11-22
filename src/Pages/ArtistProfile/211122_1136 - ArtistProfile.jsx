import React, { Component , Fragment } from "react";
import {Link} from "react-router-dom";
import { Parallax } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaRegCheckCircle} from "react-icons/fa";

import Helmet from "../../Components/Helmet";
import MusicasaHeader from "../../Components/McaHeader";
import ArtistCoverPic from "../../Components/ArtistCoverPic";
import ArtistSlider from "../../Components/ArtistSlider";
import ArtistVideo from "../../Components/McaArtistVideo";
import ConcertCardGrid01 from "../../Components/ConcertCardGrid01";
import FooterMusicasa from "../../Components/FooterMusicasa";

import BlogContent from "../../Components/McaBlogContent";



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
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-4 col-lg-4 left-area">
                                        <div className="profile-pic">
                                            <img src="assets/images-mca/artists/artist-profile-pic.jpg" className="clip-path-circle-01"/>
                                        </div>
                                        <div className="membership-date">
                                        <FaRegCheckCircle className="membership-date-icon" />Member since 2019
                                        
                                        
                                        <i class="fas fa-badge-check"></i>
                                        </div>
                                        <div className="social-media-links">
                                            <ul className="social-share-profile-bio rn-md-size d-flex justify-content-start liststyle">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-8 col-lg-8 right-area">
                                        <h1>Nicky Stefan</h1>
                                        <div className="snippet"><h3>A talented jazz singer, Stefan has been fusing jazz and Latino sounds since lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></div>
                                        <div className="row genre-and-city ">
                                            <div className="col-12 col-md-6 block-areas"><span className="label">Genres:</span> Jazz, Blues, Soul… More +</div>
                                            <div className="col-12 col-md-6 block-areas"><span className="label">Location: </span>Miami, Florida</div>
                                        </div>                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Bio Header (based on Portfolio Details) */}

                    


                        {/* Start About Area */}
                        <div id="about" className="about-area mca-gradient-01">
                            <div className="container-xl container-mca-wider">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="about-container mca-container-radius">
                                            <h3 className="pink-text">About the Artist</h3>
                                            <p className="description">Nicky Stefan, an Ecuadorian urban pop singer whose current country of residence is the USA and has lived and graduated as a singing teacher and professional singer in Moscow, Russia. Nicky Stefan participated in several international competitions, such as La Voz Russia, New Wave Lithuania, and La Voz Ecuador.  
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        {/* Start SliderTwo, from slider component  */}
                                        <ArtistSlider />
                                        {/* End  SliderTwo, from slider component  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About Area */}

                        {/* Start VideoPopup Area */}
                        <ArtistVideo />
                        {/* End VideoPopup Area */}

                        {/* Start Concert Cards inside Parallax (based on Blog Area in Startup) */}
                        <Parallax className="concerts-section rn-blog-area rn-testimonial-light" strength={700} data-black-overlay="6">
                            <div className="container-xl container-mca-wider">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title service-style--2 text-center mt--40 mb--80">
                                            <h2>Concerts</h2>
                                        </div>
                                    </div>
                                </div>
                                                        
                                {/* Start Concert Card Grid (based on BlogList) */}

                                <ConcertCardGrid01 />
                                
                                {/* End Concert Card Grid (based on BlogList) */}
                            </div> 
                            
                        </Parallax>
                        {/* End Concert Cards inside Parallax (based on Blog Area in Startup) */}


                    </main>
                    {/* End Main Tag with Page Wrapper  */}



                    {/* Start Footer Style based on FooterTwo  */}
                    <FooterMusicasa />
                    {/* End  Footer Style based on FooterTwo  */}

                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}             

                </div>

            </Fragment>
        )
    }
}

export default ArtistTemplate;