import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const ReviewForm = ({ movie_id }) => {
  const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`;

  const initialFormData = {
    name: "",
    text: "",
    vote: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const { fetchMovie } = useGlobalContext();

  const isValid = () => {
    if (!formData.text || !formData.name || !formData.vote) return false;
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
        <label htmlFor="name" className="form-control font-weight-bold">
          Name:
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={setFieldValue}
        />
      </div>
      <div>
        <label htmlFor="text" className="form-control font-weight-bold">
          Review:
        </label>
        <textarea
          className="form-control"
          id="text"
          name="text"
          value={formData.text}
          onChange={setFieldValue}
        />
      </div>
      <div>
        <label htmlFor="vote" className="form-control font-weight-bold">
          Vote:
        </label>
        <input
          className="form-control"
          type="number"
          id="vote"
          name="vote"
          value={formData.vote}
          onChange={setFieldValue}
        />
      </div>
      <button type="submit" className="btn btn-success my-2">
        Inserisci la recensione
      </button>
    </form>
  );
};

export default ReviewForm;
