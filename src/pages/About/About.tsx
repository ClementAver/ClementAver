import Icon from "../../assets/vectors";

export default function About() {
  const IconBox = new Icon();

  return (
    <main
      className="about"
      tabIndex={-1}
    >
      <section className="container-slide-intro">
        <img
          className="portrait"
          src="./assets/images/20210913-Clement-Aver-web-square-blue.png"
          alt="portrait de Clément Aver"
        />

        <article className="container-flex-intro">
          <h1>À propos</h1>

          <p>
            &laquo;&#8239;Après avoir travaillé six ans en tant que designer
            graphique spécialisé dans le numérique, j'ai transitionné vers le
            développement front-end en suivant une formation longue achevée en
            décembre 2023. Avec ce bachelor en poche, je suis impatient de
            rejoindre une équipe de développement web qui partage ma passion
            pour les défis techniques, l'efficience et la maîtrise
            visuelle.&#8239;&raquo;
          </p>
          <br />

          <p className="scale">↓</p>
        </article>
      </section>

      <section className="container-slide-CV">
        <div className="container-CV">
          <article className="item-CV">
            <h2>Formation</h2>

            <h3>oct. 2022 — déc. 2023</h3>

            <p>
              <span className="bold">
                Développeur d'application - JavaScript&nbsp;React (RNCP 6)
              </span>
              <br />
              Openclassrooms (à distance)
            </p>

            <h3>2015 — 2017</h3>

            <p>
              <span className="bold">
                BTS design graphique, communication &&nbsp;médias numériques
              </span>
              <br />
              au Campus Fonderie de l’Image (Bagnolet, 93)
            </p>

            <h3>2014 — 2015</h3>

            <p>
              <span className="bold">Mise à niveau en arts appliqués</span>
              <br />à L’ESAAB (Nevers, 58)
            </p>

            <h3>2011— 2014</h3>

            <p>
              <span className="bold">
                Baccalauréat Professionnel en photographie
              </span>
              <br />
              au lycée professionnel Molière (Orthez, 64)
            </p>
          </article>

          <article className="item-CV">
            <h2>Expériences</h2>

            <h3>2017 — 2022</h3>

            <p>
              <span className="bold">
                Graphiste auto-entrepreneur (Paris, 75)
              </span>
              <br />
              Maquettage web/print, iconographie, photographie, motion design,
              habillage vidéo
            </p>

            <h3>2015 — 2017</h3>

            <p>
              <span className="bold">
                Apprentissage à l’Agence Fargo (Paris 2e)
              </span>
              <br />
              Travaux graphiques divers pratiqués en agence&#8239;: identités,
              maquettage print&#8239;/&#8239;web, cartes et rapports d’activité,
              bannières pub et réseaux sociaux. Packshots, retouches et
              portraits d’équipes.
            </p>

            <h3>2011— 2014</h3>

            <p>
              <span className="bold">Stage – La Dépêche du midi</span>
              <br />
              Reportage de rédaction
            </p>

            <p>
              <span className="bold">Stage – Studio Au Fil des saisons</span>
              <br />
              Reportage, portrait studio, packshot
            </p>

            <p>
              <span className="bold">Stage – Studio Photo Créateur</span>
              <br />
              Reportage, packshot
            </p>

            <p>
              <span className="bold">Stage – Studio VER</span>
              <br />
              Couverture mariage, tirage multi-supports, développement
            </p>
          </article>

          <article className="item-CV">
            <h2>Compétences</h2>

            <h3>Logiciels</h3>

            <p>
              <span className="bold">Suite Adobe</span>
              <br />
              Maîtrise de Indesign, Illustrator, Photoshop, Lightroom ; niveau
              intermédiaire sur les logiciels After Effects et Première Pro.
            </p>

            <p>
              <span className="bold">
                Photographie et traitement de l’image
              </span>
              <br />
              Prise de vue studio & reportage, retouche, photomontage
            </p>

            <h3>Technologies</h3>

            <p className="bold">Quotidiennes</p>
            <ul className="tech">
              <li>{IconBox.next()}</li>
              <li>{IconBox.typescript()}</li>
              <li>{IconBox.sass()}</li>
            </ul>

            <p className="bold">Occasionnelles</p>
            <ul className="tech">
              <li>{IconBox.php()}</li>
              <li>{IconBox.mysql()}</li>
            </ul>

            <h3>Mobilité</h3>

            <p>Permis A, permis B</p>

            <h3>Langue</h3>

            <p>Très bon niveau d'anglais</p>
          </article>
        </div>
        {/* <svg
          id="logo-stamp"
          viewBox="0 0 30.96 30.96"
        >
          <g>
            <path d="M8.43,24v1l-1-1V23h1Zm12,0h-3l-1,1h-2l-1-1h-3V23l1-1V21l1,1,1,1,1,1,1-1-1-1V21h2v1l-1,1,1,1,1-1,1-1,1-1v1l1,1Zm-7-6V17l1,1-1,1h-2l-1-1,1-1h1v1Zm6,1h-2l-1-1,1-1h1v1h1V17l1,1Zm4,5-1,1V23h1Zm1-1V22l-1-1-1-1V9l-1,1v1l-1,1v2l1,1h-1l-1-1V13l1-1V11l1-1V9l1-1V7l-1,1-1,1-1,1-1,1-1,1-1,1h-2l-1-1-1-1-1-1-1-1-1-1-1-1V8l1,1v1l1,1v1l1,1v1l-1,1h-1l1-1V12l-1-1V10l-1-1V20l-1,1-1,1v1l-1-1,1-1,1-1V16l1-1-1-1V7l1-1,1,1,1,1,1,1,1,1,1,1,1,1h2l1-1,1-1,1-1,1-1,1-1,1-1,1,1v7l-1,1,1,1v4l1,1,1,1Z" />
            <path d="M15.43,31a15.49,15.49,0,1,1,.08,0Zm0-30A14.53,14.53,0,1,0,30,15.49v-.06A14.54,14.54,0,0,0,15.43,1Z" />
          </g>
        </svg> */}
      </section>
    </main>
  );
}
