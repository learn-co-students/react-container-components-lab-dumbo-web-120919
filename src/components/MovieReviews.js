// Code MovieReviews Here
import React from 'react';


const Review = ({ byline, headline, link, summary_short }) => {
    return (
        <div className="review" key={headline}>
            <h3><a href={link.url}>{headline}</a></h3>
            <h5>{byline}</h5>
            <p>{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({
    reviews
}) => (
    <div className="review-list">
        {reviews.map(Review)}
    </div>
);

export default MovieReviews;
