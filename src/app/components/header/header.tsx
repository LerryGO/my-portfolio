import Image from "next/image";
import "./header.scss"

export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Hi, i´m Lerry Augusto! 👋</h1>
          <h2>Software Engineer</h2>
        </div>
        <Image
          aria-hidden
          src="/me.jpeg"
          alt="Lerry Photo"
          width={325}
          height={325}
          priority
        />
      </div>
    )
}