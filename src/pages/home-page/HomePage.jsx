import "./HomePage.css";
import CardsList from "../../components/cards-list/CardsList";
import InfoSection from "../../components/info-section/InfoSection";
import ThisOrThat from "../../components/this-or-that/ThisOrThat";
import { thisOrThatQuestions } from "../../data/thisOrThatQuestions.js";
import { BasicButtonLightGreen } from "../../components-styled/button/Button.styles.js";
import Logos from "../../components/logos/Logos.jsx";

function HomePage() {
  const generateQuestions = () => {
    return thisOrThatQuestions.map((obj) => <ThisOrThat obj={obj} key={obj.that} />);
  };

  return (
    <section className="page flex flex__column home-page">
      <section className="flex home-page__info-sections">
        <InfoSection isTopSection={true} title="Fem snabba">
          {generateQuestions()}
        </InfoSection>
        <InfoSection isTopSection={false} title={"Tekniker & skills"}>
          <div className="grid home-page__cv-text">
            <p className="body font-color-dark-green">
              Vad är väl en portfolio utan techloggor? Spana gärna in mitt CV om du veta mer om vad jag gör.
            </p>
            <BasicButtonLightGreen className="home-page__btn">Gå till CV</BasicButtonLightGreen>
            <Logos />
          </div>
        </InfoSection>
      </section>
      <CardsList title={"Case & work in progress"} />
    </section>
  );
}

export default HomePage;
