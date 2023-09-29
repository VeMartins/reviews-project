import { PiArrowSquareLeftFill, PiArrowSquareRightFill } from "react-icons/pi";

const Buttons = ({ handlePrevious, handleNext, handleRandomPerson, index }) => {
  return (
    <>
      <div className="btn-container">
        <button
          className="prev-btn"
          type="button"
          onClick={() => handlePrevious(index)}
        >
          <PiArrowSquareLeftFill />
        </button>
        <button
          className="next-btn"
          type="button"
          onClick={() => handleNext(index)}
        >
          {" "}
          <PiArrowSquareRightFill />{" "}
        </button>
      </div>
      <button
        className="btn btn-hipster"
        onClick={() => handleRandomPerson(index)}
      >
        {" "}
        Surprise Me
      </button>
    </>
  );
};
export default Buttons;
