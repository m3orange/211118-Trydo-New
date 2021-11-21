import React, { Component ,Fragment } from "react";
const BlogContent = [
    {
        images: '01',
        date: 'Friday, December 20',
        title: 'Ignacio Arocena for TECHO in Wynwood Walls, Miami, FL'
    },
    {
        images: '02',
        date: 'Saturday, December 29',
        title: 'Gilmarie Villanueva'
    },
    {
        images: '03',
        date: 'Friday, January 13',
        title: 'Nicky Stefan in Downtown Miami, FL '

    },
    {
        images: '06',
        date: 'Friday, January 28',
        title: 'K and the Band'
    },

]

class ConcertCardGrid01 extends Component{
    render() {
        const PostList = BlogContent.slice(0 , 6);
        return (
             <Fragment>
                 <div className="row">
                    {PostList.map((value , i ) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={i}>
                            <div className="blog blog-style--1 mca-border-radius">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img className="w-100" src={`assets/images-mca/event-cards/artist-${value.images}-400x450.jpg`} alt="Blog Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="event-date">{value.date}</p>
                                    <h4 className="title"><a href="#">{value.title}</a></h4>
                                    <div className="concert-grid-btns">
                                        <a className="btn-concert-card mca-btn-border-radius" href="#">More</a>
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
export default ConcertCardGrid01;