import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ movie_id, fetchMovie }) => {
  const api_url = `${import.meta.env.VITE_API_URL}/movies/${movie_id}/reviews`;

  const initialFormData = {
    text: "",
    name: "",
    vote: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");

  const isValid = () => {
    if (!formData.name || !formData.text || !formData.vote) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) {
      setErrorMessage("Devi compilare tutti i campi!");
      return;
    }

    axios
      .post(api_url, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setFormData(initialFormData);
        fetchMovie(movie_id);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Errore durante l'invio della recensione");
      });
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
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
