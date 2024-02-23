import { useState } from "react";

function FlashCard({ question, answer }) {


  const [currentState, setCurrent] = useState(1);

  function handleChange(state)
  {
    const newState = state * -1;
    setCurrent(newState);
  }
  return (
    <section className="flex flex-col px-20 pt-12 pb-5 bg-neutral-400 w-[300px] mt-10 ml-10">
      <p>{currentState == 1 ? question : answer}</p>
      <div className="justify-center self-center px-12 py-4 mt-20 bg-white rounded-[50px]">
        <button onClick={() => handleChange(currentState)}>Flip</button>
      </div>
    </section>
  );
}
export default FlashCard;
