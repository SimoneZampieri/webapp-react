import { useState } from "react";

const ReviewForm = ({ book_id }) => {
  const api_url = `${import.meta.env.VITE_API_URL}/${book_id}/reviews`;

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
    const { value, name } = e.target;
    console.log(e.target);
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="card my-3">
      <header className="card-header">
        <h1>Aggiungi una recensione</h1>
      </header>
      <div className="card-body">
        <form action="#">
          <div className="form-group">
            <label>Nome:</label>
            <input
              className="form-control my-3"
              name="name"
              type="text"
              placeholder="Inserisci nome..."
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="form-group">
            <label>Testo:</label>
            <textarea
              className="form-control my-3"
              name="text"
              type="text"
              placeholder="Inserisci testo..."
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Voto:</label>
            <input
              className="form-control my-3"
              type="number"
              name="vote"
              min={1}
              max={5}
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>
          <div className="justify-content-end">
            <button className="btn btn-success">Aggiungi Recensione</button>
          </div>
        </form>
      </div>
    </div>
  );
};
