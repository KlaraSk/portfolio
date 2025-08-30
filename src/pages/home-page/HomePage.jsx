import "./HomePage.css";
import CardsList from "../../components/cards-list/CardsList";

function HomePage() {
  return (
    <section className="page flex flex__column home-page">
      <section className="flex home-page__test-section">
        <div className="home-page__test-left body font-color__black">Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</div>
        <div className="home-page__test-right body font-color__black">Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</div>
      </section>

      <CardsList title={"Case & work in progress"} />
    </section>
  );
}

export default HomePage;
