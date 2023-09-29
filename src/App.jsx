import data from "./data";
import Person from "./Person";
import Buttons from "./Buttons";
import { useState } from "react";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  // const handlePrevious = (idx) => {
  //   const newIndex = idx - 1;
  //   if (newIndex < 0) {
  //     return setIndex(reviews.length - 1);
  //   }
  //   return setIndex(newIndex);
  // };
  const handlePrevious = (idx) => {
    const newIndex = (idx - 1 + reviews.length) % reviews.length;

    return setIndex(newIndex);
  };
  // const handleNext = (idx) => {
  //   const newIndex = idx + 1;
  //   if (newIndex > reviews.length - 1) {
  //     return setIndex(0);
  //   }
  //   return setIndex(newIndex);
  // };
  const handleNext = (idx) => {
    const newIndex = (idx + 1) % reviews.length;

    return setIndex(newIndex);
  };
  // const handleRandomPerson = (idx) => {
  //   let randomNumber = Math.floor(Math.random() * reviews.length);
  //   if (randomNumber === idx) {
  //     return handleNext(randomNumber);
  //   }

  //   return setIndex(randomNumber);
  // };
  const handleRandomPerson = (idx) => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === idx) {
      return handleNext(randomNumber);
    }
    const newidx = randomNumber % reviews.length;
    return setIndex(newidx);
  };
  return (
    <main>
      <article className="review">
        <Person reviews={reviews} index={index} />
        <Buttons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleRandomPerson={handleRandomPerson}
          index={index}
        />
      </article>
    </main>
  );
};
export default App;
