import "../styles/header.scss";
const Title = (props) => {
  return (
    <a href="#">
      <h3 className="headline-title"> {props.title}</h3>
    </a>
  );
};

export default Title;
