import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

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

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/categorias";
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();

          setCategories([...resposta]);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.category}</h1>

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
          label="Descrição"
          type="textarea"
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

        <Button>Cadastrar</Button>
      </form>

      {values.length === 0 && <div>Carregando...</div>}

      <ul>
        {categories.map((category) => {
          return <li key={`${category.name}`}>{category.category}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
