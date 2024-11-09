import { useState, useEffect, useRef } from "react"

import { Link } from "react-router-dom"

import { motion } from "framer-motion"

import { Container } from "./style"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"

import Macarom from "../../assets/macaromhome.svg"
import spaguettiGambe from "../../assets/spaguettiGambe.svg"
import saladaRavanello from "../../assets/saladaRavanello.svg"
import coke from "../../assets/coke.png"

const dishes = [
  <Card isAdmin={true} disheImg={spaguettiGambe} name={"Spaguetti Gambe"} price={"79,97"} />,
  <Card isAdmin={true} disheImg={saladaRavanello} name={"Salada Ravanello"} price={"49,99"} />,
  <Card isAdmin={true} disheImg={spaguettiGambe} name={"Spaguetti Gambe"} price={"79,97"} />,
  <Card isAdmin={true} disheImg={saladaRavanello} name={"Salada Ravanello"} price={"49,99"} />,
]

export function HomeAdmin() {
  const carousel = useRef()

  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <Container>
      <Header isAdmin={true} />
      <div id="block">
        <img id="macarom" src={Macarom} alt="Imagem de macarom caindo" />

        <div id="text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
      <section className="sec">
        <h2>Refeições</h2>

        <motion.div ref={carousel} className="carousel">
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width + 100 }}
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {dishes.map((dishe) => (
              <motion.div className="item" key={dishe}>
                {dishe}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="sec">
        <h2>Pratos principais</h2>

        <motion.div ref={carousel} className="carousel">
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width + 100 }}
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {dishes.map((dishe) => (
              <motion.div className="item" key={dishe}>
                {dishe}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="sec">
        <h2>Sobremesas</h2>

        <motion.div ref={carousel} className="carousel">
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width + 100 }}
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {dishes.map((dishe) => (
              <motion.div className="item" key={dishe}>
                {dishe}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="sec">
        <h2>Bebidas</h2>

        <motion.div ref={carousel} className="carousel">
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width + 100 }}
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {dishes.map((dishe) => (
              <motion.div className="item" key={dishe}>
                {dishe}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </Container>
  )
}
