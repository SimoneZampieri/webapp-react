import StarsRating from "./StarRating";

const ReviewCard = ({ review }) => {
  const { name, text, vote } = review;

  return (
    <>
      <div className="container">
        <div className="review-box">
          <div className="user d-flex justify-content-between">
            <address>{name}</address>
            <div className="vote">
              <StarsRating vote={vote} />
            </div>
          </div>
          <p className="review-text">"{text}"</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
