import styles from '../../Home.module.scss';


export default function Cronograma(){

    return(
        <section id="cronograma" className={styles.sCronograma}>
          <h2 data-aos="fade-right">Cronograma</h2>
          <p data-aos="fade-down">
            O cronograma ainda está sendo definido. Siga-nos no{' '}
            <a
              href="https://www.instagram.com/secompuem/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{' '}
            da SECOMP para ficar atualizado sobre os eventos que ocorrerão nesta edição.<br></br>
          </p>
          <table
            data-aos="fade-down"
            class="table-fixed border-4 border-secomp"
          >
            <thead>
              <tr class="border-secomp border-b-2">
                <th class="bg-secomp bg-opacity-25 border-b-2 border-r-2 border-secomp p-4 w-3/20">
                  Dia
                </th>
                <th class="bg-secomp bg-opacity-25 border-b-2 border-r-2 border-secomp p-4 w-1/50">
                  Hora
                </th>
                <th class="bg-secomp bg-opacity-25 border-b-2 border-r-2 border-secomp p-4 w-3/4">
                  Palestra
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2" class="p-4 border-b-2 border-r-2 border-secomp">
                  04/10<br></br>(Abertura)
                </td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">17:30</td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">
                  Como Funciona a Busca na OLX: Tecnologia e Ciência de Dados em
                  Larga-Escala - Leonardo Wajnsztok (Senior Software Engineer na
                  OLX)
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b-2 border-r-2 border-secomp">18:35</td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">
                  Os Desafios e Estratégias para uma Computação mais Diversa -
                  Beatriz Tavares (Gerente de Engenharia de Software na OLX);
                  Luana Pimentel (Software Engenieer na OLX); Taciana Melcop
                  (Gerente de Engenharia de Software na OLX)
                </td>
              </tr>
              <tr>
                <td
                  rowspan="2"
                  class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp"
                >
                  05/10<br></br>(IA)
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  17:30
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  Reconhecimento de Padrões: Relato Acadêmico e Profissional -
                  Arthur Rodrigues Batista (Eureka)
                </td>
              </tr>
              <tr>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  18:35
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  IA, Pesquisas Iniciais - Fernanda Ferreira (SIDI)
                </td>
              </tr>
              <tr>
                <td rowspan="2" class="p-4 border-b-2 border-r-2 border-secomp">
                  06/10<br></br>(Games)
                </td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">17:30</td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">
                  Desenvolvimento de Jogos no Mercado Brasileiro - Bannaker
                  Braulio (First Phoenix Studio)
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b-2 border-r-2 border-secomp">18:35</td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">
                  Da Ideia ao Jogo: Como Linhas de Código e Máquinas Tiram do
                  Papel uma Ideia Genial - Cristofer Alexandre Oswald (Fanatee)
                </td>
              </tr>
              <tr>
                <td
                  rowspan="2"
                  class=" bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp"
                >
                  07/10<br></br>(Segurança)
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  17:30
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  Pentest: O que é? Onde Vive? Por que toda Empresa quer um? -
                  Amanda Barbosa Sobrinho (Engenheira de Segurança no PagSeguro)
                </td>
              </tr>
              <tr>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  18:35
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  Como Conteúdos de Whatsapp e Redes Sociais podem ser Usados
                  como Prova na Justiça: a Tecnologia para Solucionar Problemas
                  no meio Jurídico - Regina Acutu (CEO & Co-Founder da Verifact)
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b-2 border-r-2 border-secomp">
                  08/10<br></br>(Mesa Redonda)
                </td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">17:30</td>
                <td class="p-4 border-b-2 border-r-2 border-secomp">
                  Akina Kurita, Alisson Renan Svaigen, Lailla Milainny Siqueira
                  Bine e Rafael Rodrigues dos Santos
                </td>
              </tr>
              <tr>
                <td
                  rowspan="2"
                  class=" bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp"
                >
                  09/10<br></br>(Data Science e Campeonatos)
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  10:00
                </td>
                <td class="bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  Python e Machine Learning - Uma Introdução - Eduardo Maçan
                  (Diretor de Engenharia da OLX)
                </td>
              </tr>
              <tr>
                <td class=" bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  14h às 19h
                </td>
                <td class=" bg-secomp bg-opacity-25 p-4 border-b-2 border-r-2 border-secomp">
                  Campeonatos de CS:GO, LOL e Valorant
                </td>
              </tr>
            </tbody>
          </table>
        </section>
    )
}