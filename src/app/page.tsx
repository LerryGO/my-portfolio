import { Header } from "./components/header/header";
import "./components/styles/home.scss";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <div className="social"></div>
        <SocialBtns />
        <a className="btn-primary" href="mailto:lerry.pirani@gmail.com">
          contact me!
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
