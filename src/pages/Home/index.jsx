import { useState, useEffect, useRef } from "react"

import { motion } from "framer-motion"

import { Container } from "./style"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

import Macarom from "../../assets/macaromhome.svg"
import spaguettiGambe from "../../assets/spaguettiGambe.svg"
import saladaRavanello from "../../assets/saladaRavanello.svg"
import coke from "../../assets/coke.png"

const dishes = [
  <Card disheImg={spaguettiGambe} name={"Spaguetti Gambe"} price={"79,97"} />,
  <Card disheImg={saladaRavanello} name={"Salada Ravanello"} price={"49,99"} />,
  <Card disheImg={spaguettiGambe} name={"Spaguetti Gambe"} price={"79,97"} />,
  <Card disheImg={saladaRavanello} name={"Salada Ravanello"} price={"49,99"} />,
  <Card
    disheImg={coke}
    name={"Salada Ravanello"}
    price={"49,99"}
    style={{ width: "50px" }}
  />,
]

export function Home() {
  const carousel = useRef()

  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <Container>
      <Header />
      <div id="block">
        <img id="macarom" src={Macarom} alt="" />

        <div id="text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
      <section id="meals">
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
      <section id="meals">
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
      <section id="meals">
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
    </Container>
  )
}
