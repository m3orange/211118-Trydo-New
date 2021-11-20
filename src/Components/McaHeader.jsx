import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'
import { Link } from 'react-router-dom';

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class MusicasaHeader extends Component{
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
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images-mca/logo/logo-white.png" alt="Musicasa" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images-mca/logo/logo-all-dark.png" alt="Musicasa" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images-mca/logo/logo-symbol-dark.png" alt="Musicasa" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images-mca/logo/logo-symbol-light.png" alt="Musicasa" />;
        }else{
            logoUrl = <img src="/assets/images-mca/logo/logo.png" alt="Musicasa" />;
        }
        
        return(

            <header className={`header-area header-style-two header--fixed default-color`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/login">
                                <img className="logo-1" src="/assets/images-mca/logo/logo-white.png" alt="Logo Images"/>
                                <img className="logo-2" src="/assets/images-mca/logo/logo-black.png" alt="Logo Images"/>
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block ml--50">

                            <ul className="mainmenu">
                                <li><a href="/login">Home</a></li>
                                <li><a href="https://www.musicasaa.com/concerts">Concerts</a></li>
                                <li className="has-droupdown"><Link to="#" >My Profile</Link>
                                    <ul className="submenu">
                                        <li><Link to="#">Artists</Link></li>
                                        <li><Link to="host-profile">Hosts</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/main-demo" >Demos</Link></li>
                            </ul>

                            
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
        )
    }
}
export default MusicasaHeader;