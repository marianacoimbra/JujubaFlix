import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const inputs = {
    category: "",
    description: "",
    color: "",
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(inputs);

  function setValue(name, value) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategories([...categories, values]);

          setValues(inputs);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          required={true}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="description"
          value={values.description}
          onChange={handleChange}
          required={true}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
          required={true}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.category}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
