import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaYoutube, FaSpotify} from "react-icons/fa";

const SocialShare = [
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/musicasaa/'},
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/Musicasaa/'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/channel/UCLdAapdJUAqtOyOFqcOp3wg'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/musicasalive?lang=en'},
    {Social: <FaSpotify /> , link: 'https://open.spotify.com/playlist/7lDn8dZWXBZxKFMYs0K5Dh'},
]

const FooterMusicasa = () => {
    return (
        <div className="footer-style-2 footer-musicasa bg_image" data-black-overlay="1">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20 footer-mca-logo">
                                <a href="/login">
                                    <img src="/assets/images-mca/logo/logo-white.png" alt="Musicasa"/>
                                </a>
                                <div className="footer-miami-love">Made with 💛 in Miami.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
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
    )
}
export default FooterMusicasa;