import "./CvPage.css";
import List from "../../components/list/List";
import { topFiveWork, workExperience } from "../../data/workExperience";
import { education, courses } from "../../data/studies";
import InfoSection from "../../components/info-section/InfoSection.jsx";
import InfoSectionsSet from "../../components/info-sections-set/InfoSectionsSet.jsx";
import { hobbies } from "../../data/hobbies.js";
import { generateListItems } from "../../utils/generateListItems.jsx";
import { NavLink } from "react-router-dom";

function CvPage() {
  return (
    <section className="flex page flex__column cv-page">
      <h1 className="heading-xl cv-page__heading font-color-light-green">Studier och yrkesliv</h1>
      {/* ===== Målsättning =====  */}
      <InfoSectionsSet>
        <InfoSection isDarkGreen={true}>
          <h2 className="heading-xl test">Jag vill...</h2>
        </InfoSection>
        <InfoSection isLightGreen={true}>
          <p className="cv-page__quote">"</p>
          <h2 className="heading-4">
            ... bidra till techbranschen med mina erfarenheter från kultursektorn och kundservice, samtidigt som jag lär mig mer om
            webbutveckling, UX och tillgänglighetsfrågor.
          </h2>
        </InfoSection>
      </InfoSectionsSet>
      <section className="page__wrapper flex flex__column cv-page__educations-section">
        <List title={"Längre utbildningar"} listItems={education} />
        <List title={"Kurser"} listItems={courses} />
      </section>
      {/*  ===== Fem snabba om yrkeslivet =====  */}
      <InfoSectionsSet>
        <InfoSection isDarkPink={true}>
          <h2 className="test heading-xl">5 snabba</h2>
          <h3 className="test heading-1">från mitt yrkesliv</h3>
        </InfoSection>
        <InfoSection isLightPink={true}>
          <ol className="heading-4 font-color-black cv-page__top5List">{generateListItems(topFiveWork, "cv-page__top5List-item")}</ol>
        </InfoSection>
      </InfoSectionsSet>
      <section className="page__wrapper">
        <List title={"Arbetslivserfarenhet"} listItems={workExperience} />
      </section>
      {/*  ===== Fritid & övrigt =====  */}
      <InfoSectionsSet>
        <InfoSection isDarkGreen={true} title={"På fritiden"}>
          {<ul className="cv-page__hobbies-list">{generateListItems(hobbies, "body cv-page__hobby")}</ul>}
        </InfoSection>
        <InfoSection isLightGreen={true} title={"Övrigt"}>
          {
            <ul>
              <li className="body cv-page__list-item-bullet">B-körkort</li>
              <li className="body cv-page__list-item-bullet">
                <NavLink to={"/kontakt"} className={"font-color-beige"}>
                  Kontakta mig för referenser
                </NavLink>
              </li>
            </ul>
          }
        </InfoSection>
      </InfoSectionsSet>
    </section>
  );
}

export default CvPage;
