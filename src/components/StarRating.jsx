function StarsRating(props) {
  const vote = props.vote;

  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star ${i < vote ? "yellow" : "grey"}-star`}
      ></i>
    );
  }

  return (
    <>
      <div>{stars}</div>
    </>
  );
}

export default StarsRating;
