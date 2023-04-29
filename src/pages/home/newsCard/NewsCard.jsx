import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, rating, total_view } = news;

    return (
        <div>
            <Card className=" mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '50px' }} src={author?.img} roundedCircle />
                    <div className='ps-3 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format('YYYY-MM-D')}</small></p>
                    </div>
                    <div>
                        <FaBookmark style={{ height: '30px', marginRight: '10px' }}></FaBookmark>
                        <FaShareAlt style={{ height: '30px' }}></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1 d-flex '>
                        <span className='me-2'>{rating.number}</span>
                    
                        {/* <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar />}
                        ></Rating> */}
                         <Rating  style={{ maxWidth: 100 }} value={rating?.number} readOnly />
 
                    </div>
                    <div>
                        <FaEye></FaEye>{total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;