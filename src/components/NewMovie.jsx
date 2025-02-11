import { useState } from "react";

const NewMovie = () => {
  const [formData, setFormData] = useState(initialData);

  initialData = {
    name: "",
    image: null,
    description: "",
  };

  const handleSetValue = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
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
