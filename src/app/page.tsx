import { Header } from "./components/header/header";
import "./../styles/home.scss"
import { Experience } from "./components/experience/experience";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediate</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info"></div>
        <span>🎓</span>
        <span>Technologist in Analysis and development of systems - Faculdade de Tecnologia de Franca</span>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>contac me!</button>
      </div>

    </main>
  );
}
