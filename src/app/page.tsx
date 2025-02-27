import { Header } from "./components/header/header";
import "./../styles/home.scss"
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>
      <div className="buttons">
        <div className="social"></div>
        <button>contac me!</button>
      </div>

    </main>
  );
}
