import "./CvPage.css";
import List from "../../components/list/List";
import { workExperience } from "../../data/workExperience";
import { education, courses } from "../../data/studies";

List;

function CvPage() {
  return (
    <section className="page flex flex__column page__wrapper cv-page">
      <List title={"Arbetslivserfarenhet"} listItems={workExperience} />
      <List title={"Längre utbildningar"} listItems={education} />
      <List title={"Kurser"} listItems={courses} />
    </section>
  );
}

export default CvPage;
