import { useState } from "react";

const ReviewForm = ({ movie_id }) => {
  const api_url = `${import.meta.env.VITE_API_URL}/movies/${movie_id}/reviews`;

  const initialFormData = {
    text: "",
    name: "",
    vote: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("invio");
  };

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={setFieldValue}
        />
      </div>
      <div>
        <label htmlFor="text">Review:</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={setFieldValue}
        />
      </div>
      <div>
        <label htmlFor="vote">Vote:</label>
        <input
          type="number"
          id="vote"
          name="vote"
          value={formData.vote}
          onChange={setFieldValue}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
