import "./HomePage.css";
import CardsList from "../../components/cards-list/CardsList";
import InfoSection from "../../components/info-section/InfoSection";
import ThisOrThat from "../../components/this-or-that/ThisOrThat";
import { thisOrThatQuestions } from "../../data/thisOrThatQuestions.js";
import { BasicButtonLightGreen } from "../../components-styled/button/Button.styles.js";
import Logos from "../../components/logos/Logos.jsx";
import InfoSectionsSet from "../../components/info-sections-set/InfoSectionsSet.jsx";

function HomePage() {
  const generateQuestions = () => {
    return thisOrThatQuestions.map((obj) => <ThisOrThat obj={obj} key={obj.that} />);
  };

  return (
    <section className="page flex flex__column home-page">
      <InfoSectionsSet>
        <InfoSection isDarkGreen={true} title="Fem snabba">
          {generateQuestions()}
        </InfoSection>
        <InfoSection isLightPink={true} title={"Tekniker & skills"}>
          <div className="grid home-page__cv-text">
            <p className="body">Vad är väl en portfolio utan techloggor? Spana gärna in mitt CV om du veta mer om vad jag gör.</p>
            <BasicButtonLightGreen className="home-page__btn">Gå till CV</BasicButtonLightGreen>
            <Logos />
          </div>
        </InfoSection>
      </InfoSectionsSet>

      <CardsList title={"Case & work in progress"} />
    </section>
  );
}

export default HomePage;
