import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import "../styles/style.scss";
const NewsWithImage = (props) => {
  return (
    <section className="news-with-image-container">
      <div className="news-content-with-image">
        <Title title={props.newData.title} />
        <Description description={props.newData.description} />
        <span className="time">৪৫ মিনিট আগে</span>
        <Image photo={props.newData.photo} />
      </div>
      <div className="news-content">
        <Title title={props.newData.title} />
        <Description description={props.newData.description} />
        <span className="time">৪৫ মিনিট আগে</span>
      </div>
    </section>
  );
};

export default NewsWithImage;
