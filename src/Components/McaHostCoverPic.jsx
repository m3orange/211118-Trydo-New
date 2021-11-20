import React, { Component } from "react";
import { Link } from "react-router-dom";

class HostCoverPic extends Component{
    render(){
        const { title , parent} = this.props;
        return(
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color " data-black-overlay="1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HostCoverPic;

