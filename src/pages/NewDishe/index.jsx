import { Container } from "./style"
import { FiUpload } from "react-icons/fi"

import { Link } from "react-router-dom"

import React, { useState } from "react"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { NewIngredients } from "../../components/NewIngredient"
import { TextArea } from "../../components/TextArea"

import arrow from "../../assets/arrow.svg"



export function NewDishe() {
  const [selectedOption, setSelectedOption] = useState("")

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Container>
      <Header isAdmin={true} />

      <main>
        <Link to="/menu">
          <div id="toBack">
            <img src={arrow} alt="icone para voltar" />
            <p>voltar</p>
          </div>
        </Link>

        <h1>Novo prato</h1>

        <div className="inputWrapper">
          <label htmlFor="disheImg">Imagem do prato</label>
          <Input
            id="disheImgInput"
            type="text"
            icon={FiUpload}
            placeholder="Selecione Imagem"
            style={{ backgroundColor: "#0D161B" }}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="DisheName">Nome</label>
          <Input
            id="DisheName"
            type="text"
            placeholder="Ex: Salada Ceasar"
            style={{ backgroundColor: "#0D161B" }}
          />
        </div>

        <div className="inputWrapper" id="select">
          <label htmlFor="options">Categoria</label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="Refeição">Refeição</option>
            <option value="PratosPrincipais">Pratos Principais</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div className="inputWrapper">
          <label htmlFor="ingredients">Ingredientes</label>
          <div className="ingredients">
            <NewIngredients value="Pão naan" />
            <NewIngredients value="Queijo suiço" />
            <NewIngredients value="Pimenta" />
            <NewIngredients value="Oceano acustico da malacia" />
            <NewIngredients isNew={true} placeholder="Adicionar" />
          </div>
        </div>

        
        <div className="inputWrapper">
          <label htmlFor="DishePrice">Preço</label>
          <Input
            id="DishePrice"
            type="text"
            placeholder="R$ 40,00"
            style={{ backgroundColor: "#0D161B" }}
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="DisheDescription">Descrição</label>
          <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
        </div>

        <div className="inputWrapper" id="button">
          <Button
            title="Salvar alterações"
            style={{ width: "100%", backgroundColor: "#AB4D55" }}
          />
        </div>
      </main>

      <Footer />
    </Container>
  )
}
