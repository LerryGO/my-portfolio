import { BrazilIcon } from "../icons/bra-icon";
import { UsaIcon } from "../icons/usa-icon";
import { SectionTitle } from "../section-title/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>
          <UsaIcon /> EN - Intermediate
        </span>
        <span>
          <BrazilIcon /> PT-BR - Native Speaker
        </span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>
          Technologist in Analysis and development of systems - Faculdade de
          Tecnologia de Franca
        </span>
      </div>
    </div>
  )
}
