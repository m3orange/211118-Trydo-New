import React, { Component } from "react";
import ModalVideo from 'react-modal-video';


class ArtistVideo extends Component {
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
    render() {
        return (
            <>


                {/* Start Page Wrapper  */}
                <main className="section-video">

                    {/* Start Video Area  */}
                    <div className="rn-section ptb--80">
                        <div className="container-lg container-mca-wider">
                             <div className="row sercice-details-content align-items-center">
                                <div className="col-lg-12">
                                    <div className="thumb position-relative">
                                        <img className="w-100" src="/assets/images/blog/bl-big-01.jpg" alt="Service Images"/>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='BD7_AW9H97M' onClose={() => this.setState({isOpen: false})} />
                                        <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                    </div>
                                </div>
                                <div className="col-lg-12 ptb-80 omg">
                                    <button className="btn draw-border">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Video Area  */}

                </main>
                {/* End Page Wrapper  */}
             
            </>
        )
    }
}

export default ArtistVideo;