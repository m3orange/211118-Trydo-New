import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";


import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';
import Helmet from "../component/common/Helmet";
videoTagString({ src: '/assets/images/service/video.mp4', poster: '/assets/images/bg/bg-image-24.jpg' })



/* This page template – Based on Startup Agency */

const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        title: 'Welcome Video Studio',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]


class FullwidthVideoTemplate extends Component{
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
                <Helmet pageTitle="Studio Agency" />
                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="video-inner">
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-background">
                                <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`}  src={`${"/assets/images/service/video.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}

                    
                </div>
                {/* End Slider Area   */}




                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default FullwidthVideoTemplate;