import { SectionTitle } from "../section-title/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages" />
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediate</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education" />
        <div className="educational-info"></div>
        <span>🎓</span>
        <span>Technologist in Analysis and development of systems - Faculdade de Tecnologia de Franca</span>
      </div>
    )
}