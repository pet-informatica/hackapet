import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Menus from "./Menus";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Gif from "../components/Gif";

export default class App extends Component {
  render() {
    const sections = [
      {
        id: "o-que",
        header: "O que?",
        content: (
          <p>
           Problemas na graduação é algo que é comum a todos nós, mas como bons CIners a gente odeia
           ficar só reclamando sem colocar a mão na massa e resolver os problemas que nos afligem.
           Sim, as vezes nos sentimos de mãos atadas e sem saber o que fazer. Em sua primeira edição
           o HACKAPET traz o tema Educação focando em encontrar soluções para nós mesmos, alunos do CIn.
          </p>
        )
      },
      {
        id: "para-quem",
        header: "Para quem?",
        content: (
          <p>
            O Hackathon busca integrar todos os alunos do CIn porém de formas diferentes. Os alunos do 1º ao 5º período (2016.1 até 2018.1)
            dos três cursos podem participar como competidores e qualquer aluno pode participar como tutor
            ministrando workshops de tecnologias que serão usadas durante o evento.
          </p>
        )
      },
      {
        id: "como",
        header: "Como?",
        content: (
          <p>
            A ideia antes de tudo é trocar experiências e sobretudo aprender. Para isso, todo o processo será acompanhado por
            uma equipe usando a metodologia Problem Based Learning - PBL. Metodologia usada pelo PET-Informática em suas 
            atividades que usa solução de problemas para gerar aprendizagem.
          </p>
        )
      },
      {
        id: "onde",
        header: "Onde?",
        content: (
          <p>
           Centro de Informática - UFPE
          </p>
        )
      },
      {
        id: "quando",
        header: "Quando?",
        content: (
          <p>
           O HACKAPET vai acontecer nos dias 9 e 10 de agosto de 2018, totalizando 36 horas de imersão. 
          </p>
        )
      },
      {
        id: "mas-e",
        header: "Mas e...?",
        content: (
          <p>
             <p className="question">Mas eu não sei nada, como vou participar de um hackathon? <br/></p>
            Nosso intuito é exatamente esse! Aprender coisas novas colocando a mão na massa e resolvendo problemas. Além disso,
            durante o evento serão oferecidos vários workshops de variadas áreas que você pode aplicar no seu projeto e
            ir aprendendo junto com seu time. 

            <br/><br/>
            <p className="question">Como fica alimentação?<br/></p>
            Nós vamos oferecer alguns snacks durante o evento, mas as refeições são por sua conta. 

            <br/><br/>

            <p className="question">Preciso levar computador?<br/></p>
            Os computadores do CIn estarão disponíveis para nós, mas fique à vontade para trazer seu bebê. Os grads serão divulgados em breve.

            <br/><br/>

            <p className="question">Não sou aluno do CIn, posso participar?<br/></p> 
            O evento é exclusivo para alunos dos cursos de Ciência da Computação, Engenharia da Computação e Sistemas da Informção
            do Centro de Informática.

            <br/><br/>

            <p className="question">Quanto que vai custar?<br/></p> 
            As inscrições serão abertas em breve e serão no valor de 30 reais. O evento é 
            100% sem fins lucrativos e toda a renda obtida será convertida para o próprio evento.

            <br/><br/>

            <p className="question">Preciso chegar com a equipe formada?<br/></p> 
            Não. Quando levantarmos os problemas e quais as soluções que devem ser desenvolvidas, as equipes podem ser formadas.
            Mas se você já vier com seu time pronto, também não tem problema. 

            <br/><br/>

           
          </p>
        )
      },
      {
        id: "inscricoes",
        header: "Inscrições",
        content: (
          <p>
            Inscrições abertas!!
            <br/><br/>
            <a href="https://goo.gl/forms/EvdeUAlWhaDseMR13" target="_blank" rel="noopener noreferrer">Inscrições para participantes</a>
            <br/>
            <a href="https://goo.gl/forms/BYhPSvYzhOrw0i843" target="_blank" rel="noopener noreferrer">Inscrições para tutores</a>
          </p>          
        )
      }
    ];

    return (
      <div>
        <div className="index-page">
          <Gif />
          <div className="index-navbar">
            <Container text>
              <Navbar />
            </Container>
          </div>
          <Container text>
            <Menus sections={sections} />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
