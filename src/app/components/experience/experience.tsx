import { SectionTitle } from "../section-title/section-title";
import "./experience.scss";
import Image from "next/image";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        I´m a software engineer with 3 years of experience, working with
        frontend and backend technologies.
      </p>
      <div className="experience-time">
        <div className="experience-language">
          <Image
            aria-hidden
            src="/dart.png"
            alt="Dart Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            aria-hidden
            src="/flutter.png"
            alt="Flutter Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
            <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            aria-hidden
            src="/java.png"
            alt="Java Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
            <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            aria-hidden
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
            <span>3 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            aria-hidden
            src="/ts.png"
            alt="Typescript Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
            <span>3 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
