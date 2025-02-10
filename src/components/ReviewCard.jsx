import StarsRating from "./StarRating";

const ReviewCard = ({ review }) => {
  const { name, text, vote } = review;

  return (
    <>
      <div className="container review my-3">
        <div className="review-box">
          <div className="user d-flex justify-content-between">
            <h4>{name}</h4>
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
