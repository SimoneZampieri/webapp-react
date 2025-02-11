import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const api_url = import.meta.env.VITE_API_URL;

const NewMovie = () => {
  const [formData, setFormData] = useState(initialData);

  initialData = {
    name: "",
    image: null,
    description: "",
  };

  const handleSetValue = (e) => {
    const { value, name } = e.target;

    if (name === "image") {
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
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group">Nome</label>
            <input
              type="text"
              name="titolo"
              className="form-control my-3"
              placeholder="Inserisci il titolo del film..."
              value={formData.name}
              onChange={handleSetValue}
            />
          </div>
          <div className="form-group">
            <label className="form-group">Nome</label>
            <input
              type="text"
              name="titolo"
              className="form-control my-3"
              placeholder="Inserisci il titolo del film..."
              value={formData.name}
              onChange={handleSetValue}
            />
          </div>
          <div className="form-group">
            <label className="form-group">Nome</label>
            <input
              type="text"
              name="titolo"
              className="form-control my-3"
              placeholder="Inserisci il titolo del film..."
              value={formData.name}
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
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewMovie;
