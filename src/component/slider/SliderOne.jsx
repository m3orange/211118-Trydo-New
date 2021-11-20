import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";

class SliderOne extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center mca-bg-image-01" data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h1 className="title theme-gradient">A digital <br /> agency. </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;