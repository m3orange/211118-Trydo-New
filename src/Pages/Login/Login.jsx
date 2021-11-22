import React, { Component , Fragment } from "react";
import {Link} from "react-router-dom";
import { Parallax } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";


import MusicasaHeader from "../../Components/McaHeader";
import Helmet from "../../Components/McaHelmet";

import FooterMusicasa from "../../Components/FooterMusicasa";

import BlogContent from "../../Components/McaBlogContent";





const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]



class Login extends Component{
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
                <Helmet pageTitle="Homepage" />
                <div className="musicasa-container">
                
                {/* Start HeaderThree Area  */}
                <MusicasaHeader />
                {/* End HeaderThree Area  */}

                {/* Start Main Tag with Page Wrapper  */}
                <main className="page-wrapper">

                    <div className="slider-activation">
                    {/* Start Single Slide */}
                        <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center bg_image mca-bg-image-parallax-01" data-black-overlay="1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="">
                                            <div className="slide-btn">
                                                <a className="rn-button-style--2 btn-primary-color" href="">Text</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* End Single Slide */}
                    </div>


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
                 <FooterMusicasa />
                {/* End Footer Style  */}
                

                </div>

            </Fragment>
        )
    }
}

export default Login;