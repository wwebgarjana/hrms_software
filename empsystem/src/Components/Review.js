import React from 'react';
import './Review.css';

function Review() {
  const reviews = [
    {
      id: 1,
      reviewer: 'Pooja Lakhangave',
      role: 'Frontend Developer',
      feedback: 'I really enjoyed working on the Payroll module. The deadlines were realistic and team coordination was smooth.',
      rating: 4
    },
    {
      id: 2,
      reviewer: 'Ravi Jadhav',
      role: 'Team Lead',
      feedback: 'The project was well-organized. However, some design changes were requested late, which affected delivery.',
      rating: 3
    },
    {
      id: 3,
      reviewer: 'Sneha More',
      role: 'QA Tester',
      feedback: 'Clear test cases were given, and overall collaboration with developers was effective. Happy with the quality!',
      rating: 5
    }
  ];

  return (
    <div className="review-section">
      <h2>Project Reviews</h2>
      {reviews.map(review => (
        <div className="review-card" key={review.id}>
          <h4>{review.reviewer} <span className="role">({review.role})</span></h4>
          <p className="feedback">"{review.feedback}"</p>
          <p className="rating">Rating: {Array(review.rating).fill('⭐').join('')}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;