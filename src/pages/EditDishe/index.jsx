import { Container } from "./style"
import { FiUpload } from "react-icons/fi"

import React, { useState } from "react"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { NewIngredients } from "../../components/NewIngredient"
import { TextArea } from "../../components/TextArea"

import arrow from "../../assets/arrow.svg"



export function EditDishe() {
  const [selectedOption, setSelectedOption] = useState("")

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Container>
      <Header isAdmin={true} />

      <main>
        <div id="toBack">
          <img src={arrow} alt="icone para voltar" />
          <p>voltar</p>
        </div>

        <h1>Editar prato</h1>

        <div className="inputWrapper">
          <label htmlFor="disheImg">Imagem do prato</label>
          <Input
            id="disheImgInput"
            type="text"
            icon={FiUpload}
            placeholder="Selecione Imagem para alterá-la"
            style={{ backgroundColor: "#0D161B" }}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="DisheName">Nome</label>
          <Input
            id="DisheName"
            type="text"
            placeholder="Salada Ceasar"
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
          <TextArea placeholder="A Salada César é uma opção refrescante para o verão."/>
        </div>

        <div className="inputWrapper" id="button">
          <Button
            title="Excluir prato"
            style={{ width: "45%", backgroundColor: "#0D161B", fontSize: "14px"}}
          />
          <Button
            title="Salvar alterações"
            style={{ width: "60%", backgroundColor: "#AB4D55", fontSize: "14px" }}
          />
        </div>
      </main>

      <Footer />
    </Container>
  )
}
