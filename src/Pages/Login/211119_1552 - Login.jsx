import React, { Component , Fragment } from "react";
import {Link} from "react-router-dom";
import { Parallax } from "react-parallax";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";


import MusicasaHeader from "../../Components/McaHeader";
import Helmet from "../../Components/McaHelmet";
import FooterTwo from "../../Components/McaFooterTwo";



import Slider from "react-slick";



const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Login',
         buttonText: 'Perform With Us',
        buttonLink: '/contact'
    },
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
                <Helmet pageTitle="Login" />

                {/* Start HeaderThree Area  */}
                <MusicasaHeader />
                {/* End HeaderThree Area  */}

                {/* Start Page Wrapper  */}
                <main id="home" className="page-wrapper bg-login" data-black-overlay="1">

                    {/* Start Slider Area   */}
                    <div className="slider-wrapper ">
                        <div className="slider-activation">
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href="#">Become a Host</a></div>
                                            </div>
                                            <div className="col-6">
                                                <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href="#">Perform with Us</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End Slider Area   */}


                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <div id="home-footer-variation">
                {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
                </div>



                </main>
                {/* End Page Wrapper  */}



                


            </Fragment>
        )
    }
}

export default Login;