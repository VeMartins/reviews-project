import { FaQuoteRight } from "react-icons/fa";

const Person = ({ reviews, index }) => {
  const { id, name, job, text, image } = reviews[index];

  return (
    <>
      <div className="img-container">
        <img src={image} alt={name} className="img person-img" />
        <span className="quote-icon">
          {" "}
          <FaQuoteRight />{" "}
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </>
  );
};
export default Person;
