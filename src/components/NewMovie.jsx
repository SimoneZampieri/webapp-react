import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NewMovie = () => {
  const api_url = import.meta.env.VITE_API_URL;

  const initialData = {
    title: "",
    image: null,
    genre: "",
    abstract: "",
  };

  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();
  const [placeHolder, setPlaceholder] = useState("/images.jpeg");

  const handleSetValue = (e) => {
    const { value, name } = e.target;

    if (name === "image") {
      setPlaceholder(URL.createObjectURL(e.target.files[0]));
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();

    for (let key in formData) {
      dataToSend.append(key, formData[key]);
    }

    axios
      .post(api_url, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <header className="card-header">
        <h1>Aggiungi un film</h1>
      </header>

      <section className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group">Titolo:</label>
            <input
              type="text"
              name="title"
              className="form-control my-3"
              placeholder="Inserisci il titolo del film..."
              value={formData.title}
              onChange={handleSetValue}
            />
          </div>
          <div className="form-group">
            <label className="form-group">Genere:</label>
            <input
              type="text"
              name="genre"
              className="form-control my-3"
              placeholder="Inserisci il genere..."
              value={formData.genre}
              onChange={handleSetValue}
            />
          </div>
          <div className="form-group">
            <label className="form-group">Descrizione:</label>
            <input
              type="text"
              name="abstract"
              className="form-control my-3"
              placeholder="Inserisci la descrizione..."
              value={formData.abstract}
              onChange={handleSetValue}
            />
          </div>
          <div className="form-group">
            <label className="form-group">Locandina</label>
            <input
              type="file"
              className="form-control my-3"
              name="image"
              onChange={handleSetValue}
            />
            <img src={placeHolder} alt="placeholder" className="placeholder" />
          </div>

          <button type="submit" className="btn btn-success my-3">
            Inserisci
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewMovie;
