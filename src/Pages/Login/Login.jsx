import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaYoutube, FaSpotify} from "react-icons/fa";

import Helmet from "../../Components/Helmet";

import MusicasaHeader from "../../Components/McaHeader";

import BlogContent from "../../elements/blog/BlogContent";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';

videoTagString({ src: 'https://www.youtube.com/watch?v=dXZbhZugU1A', poster: '/assets/images/bg/bg-image-24.jpg' })



/* This page template – Based on Startup Agency - Fullwidth video view */

const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        title: '',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const SocialShare = [
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/musicasaa/'},
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/Musicasaa/'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/channel/UCLdAapdJUAqtOyOFqcOp3wg'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/musicasalive?lang=en'},
    {Social: <FaSpotify /> , link: 'https://open.spotify.com/playlist/7lDn8dZWXBZxKFMYs0K5Dh'},
]

class FullwidthLogin extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment>
                <Helmet pageTitle="Login" />
                <div className="login-container" styl="background-color: black;">

                    {/* Start HeaderThree Area  */}
                    <MusicasaHeader />
                    {/* End HeaderThree Area  */}

                    {/* Start Slider Area   */}
                    <div className="slider-wrapper">
                        {/* Start Single Slide */}
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" key={index} data-black-overlay="6">

                                <div className="video-background">
                                    <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`}  src={`${"/assets/video/211116-1517-alemor.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                                </div>
                            </div>
                        ))}
                        {/* End Single Slide */}

                        
                    </div>
                    {/* End Slider Area   */}


                    {/* Start Footer Style based on FooterTwo  */}
                    <div className="footer-style-2 footer-musicasa footer-home-variation bg_image" data-black-overlay="1">
                        <div className="wrapper plr--50 plr_sm--20">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="inner">
                                        <div className="logo text-center text-sm-left mb_sm--20 footer-mca-logo">
                                            <a href="/login">
                                                <img src="/assets/images-mca/logo/logo-white-2x.png" alt="Logo images"/>
                                            </a>
                                            <div className="footer-miami-love">Made with 💛 in Miami.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="inner text-center">
                                        <ul className="social-share rn-md-size d-flex justify-content-center liststyle">
                                            {SocialShare.map((val , i) => (
                                                <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                                        <div className="footer-copyright-links">
                                            ©Musicasa Corporation 2021, All Rights Reserved.<br />
                                            <a href="https://www.musicasaa.com/termsandconditions" target="_blank" className="terms">
                                            Privacy Policy &amp; Terms and Conditions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default FullwidthLogin;