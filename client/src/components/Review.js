import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import ReactDOM from "react-dom";
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { CREATE_REVIEW } from '../utils/mutations';
import { QUERY_REVIEWS } from '../utils/queries';


export default function Review() {
  //extract username from params and save it to a variable
  const { username } = useParams();

  const [ createReview ] = useMutation(CREATE_REVIEW);
  const { reviewData } = useQuery(QUERY_REVIEWS, {
    variables: { reviewee: username },
  });
  console.log("REVIEW DATA")
  console.log(reviewData);
//saving the user information from QUERY_SINGLE_USER to profile variable
const profile = reviewData?.review || {};


  const [reviewContent, setContent] = useState({
    rating: 0,
    reviewee: "", //need a user ID
    title: "",
    body: "",
  });

  reviewContent.reviewee = username;

  const reviewChange = (event) => {
    const { name, value } = event.target;
    setContent({
      ...reviewContent,
      [name]: value,
    });
  };

  const reviewFormSubmit = async (event) => {
    event.preventDefault();

    const sumbitRating = parseFloat(reviewContent.rating)
    reviewContent.rating = sumbitRating;

    console.log(reviewContent)

    try {
      const mutationResponse = await createReview({
        //* added this from mutations.js
        variables: {
          rating: reviewContent.rating,
          reviewee: reviewContent.reviewee, //need a user ID
          title: reviewContent.title,
          body: reviewContent.body,
          // reviewTitle: reviewContent.title,
          // body: reviewContent.review,
          // username: window.location.pathname.split("/")[2],
          // starRating: reviewContent.rating,
          // reviewee: reviewContent.reviewee,
        },
      });

      window.location.assign('/profile/'+ username);

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="review-container">
      <form className="animate login-form" onSubmit={reviewFormSubmit}>
        <div className="container">
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            value={reviewContent.title}
            onChange={reviewChange}
            required
          />
          <label htmlFor="review-content">
            <b>Review</b>
          </label>
          <input
            id="review"
            type="text"
            placeholder="Enter Review"
            name="body"
            value={reviewContent.body}
            onChange={reviewChange}
            required
          />
          <div className="slidecontainer">
            <input type="range" min="1" max="5" value="50" className="slider" id="myRange" name="rating" value={reviewContent.rating} onChange={reviewChange}/>
          </div>
        </div>
        <div className="container" style={{ background: "var(--gray)" }}>
          <button type="submit" className="submitbtn">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
