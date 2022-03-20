const Image = (props) => {
  return (
    <figure className="news-image">
      <img src={props.photo} alt="" />
    </figure>
  );
};

export default Image;
