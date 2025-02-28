import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/lerry_augusto/">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/lerry-augusto/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/LerryGO">
        <GithubIcon />
      </a>
      
    </div>
  )
}
