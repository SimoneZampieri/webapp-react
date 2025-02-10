import { useState } from "react";

const ReviewForm = () => {
  const initialFormData = {
    text: "",
    name: "",
    vote: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
              name="name"
              type="text"
              placeholder="Inserisci nome..."
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
