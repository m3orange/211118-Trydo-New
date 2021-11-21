import React, { Component ,Fragment } from "react";
const BlogContent = [
    {
        images: '01',
        title: 'Ignacio Arocena for TECHO in Wynwood Walls, Miami, FL',
        date: 'Friday, December 20'
    },
    {
        images: '02',
        title: 'Gilmarie Villanueva',
        date: 'Friday, December 20'
    },
    {
        images: '03',
        title: 'Nicky Stefan in Downtown Miami, FL ',
        date: 'Blues'
    },
    {
        images: '04',
        title: 'Juan Villanueva',
        date: 'Latin Jazz'
    },

]

class BLogList extends Component{
    render() {
        const PostList = BlogContent.slice(0 , 6);
        return (
             <Fragment>
                 <div className="row">
                    {PostList.map((value , i ) => (
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="blog blog-style--1 mca-border-radius">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img className="w-100" src={`assets/images-mca/event-cards/artist-${value.images}.jpg`} alt="Blog Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="event-date">{value.date}</p>
                                    <h4 className="title"><a href="#">{value.title}</a></h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href="#">More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                     ))}
                 </div>
             </Fragment>
        );
    }
}
export default BLogList;