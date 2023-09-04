import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function ProjectOutro({ quote }: { quote: string }) {
  // const location = useLocation();

  return (
    <section
      className="container-slide"
      id="outro"
    >
      <div className="container-full-height">
        <h2>{quote}</h2>

        <div className="boutons-multiples">
          <button type="button">
            <Link to="/">Retour à l'accueil</Link>
          </button>
          <button type="button">
            <Link to={`#intro`}>Haut de page</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
