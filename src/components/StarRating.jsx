function StarsRating(props) {
  const vote = props.vote;

  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className={`bi bi-star${i < vote && "-fill"}`}></i>);
  }
  return (
    <>
      <div>{stars}</div>
    </>
  );
}

export default StarsRating;
