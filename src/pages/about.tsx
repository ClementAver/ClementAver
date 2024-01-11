import Head from "next/head";
import Icon from "@/utils/Icon";

export default function About() {
  const icon = new Icon();

  const handleDownloadCV = async () => {
    const response = await fetch("/api/cv");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Clément_Aver_CV.pdf";
    link.click();
  };

  return (
    <>
      <Head>
        <title>Clément Aver – à propos</title>
        <meta
          name="description"
          content="Page de présentation"
        />
      </Head>
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
              graphique spécialisé dans le numérique, je me suis reconverti dans
              le développement front-end en suivant une formation longue,
              achevée en décembre 2023. Avec ce bachelor en poche, je suis
              impatient de rejoindre une équipe de développement web qui partage
              mon engouement pour les défis techniques, l’efficience et la
              maîtrise visuelle.&#8239;&raquo;
            </p>
            <br />

            <button
              type="button"
              className="button-dl-cv"
              onClick={handleDownloadCV}
            >
              Télécharger mon CV
            </button>

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
                  Développeur d’application - JavaScript&nbsp;React (RNCP 6)
                </span>
                <br />
                Openclassrooms (à distance)
              </p>

              <h3>2015 — 2017</h3>

              <p>
                <span className="bold">
                  BTS Design Graphique, communication &&nbsp;médias numériques
                </span>
                <br />
                au Campus Fonderie de l’Image (Bagnolet, 93)
              </p>

              <h3>2014 — 2015</h3>

              <p>
                <span className="bold">Mise à niveau en arts appliqués</span>
                <br />à L’ESAAB (Nevers, 58)
              </p>

              <h3>2011 — 2014</h3>

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
                  Graphiste auto-entrepreneur (Paris 13e)
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
                maquettage print&#8239;/&#8239;web, cartes et rapports
                d’activité, bannières pub et réseaux sociaux. Packshots,
                retouches et portraits d’équipes.
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

              <h3>Technologies</h3>

              <p>
                Ma formation portait sur React. Je l’ai enrichie avec
                TypeScript, Next et Vitest, entre autres.
              </p>
              <p>
                À titre personnel, je me suis également penché sur PHP et MySQL
                à l’aide de MAMP et suis ouvert à ces outils.
              </p>

              <h3>Logiciels</h3>

              <p>
                <span className="bold">Suite Adobe</span>
                <br />
                Maîtrise de Indesign, Illustrator, Photoshop, Lightroom ; niveau
                intermédiaire sur les logiciels After Effects et Première Pro
              </p>

              <p>
                <span className="bold">
                  Photographie et traitement de l’image
                </span>
                <br />
                Prise de vue studio & reportage, retouche, photomontage
              </p>

              {/* <p className="bold">Quotidiennes</p>
              <ul className="tech">
                <li>{icon.next("tech__picto")}</li>
                <li>{icon.typescript("tech__picto")}</li>
                <li>{icon.sass("tech__picto--sass")}</li>
              </ul>

              <p className="bold">Occasionnelles</p>
              <ul className="tech">
                <li>{icon.php("tech__picto--php")}</li>
                <li>{icon.mysql("tech__picto--mysql")}</li>
              </ul> */}

              <h3>Mobilité</h3>

              <p>Permis A, permis B</p>

              <h3>Langue</h3>

              <p>Très bon niveau d’anglais</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
