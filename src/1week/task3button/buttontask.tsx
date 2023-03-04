import React from "react";

function Buttontask() {
  /*const myFirstSubscriber = (
    event: "MouseEvent<HTMLButtonElement, MouseEvent>"
  ) => {
    console.log("Hello, I am Vasya!");
  };

  const mySecondSubscriber = (
    event: "MouseEvent<HTMLButtonElement, MouseEvent>"
  ) => {
    console.log("Hello, I am Ivan!");
  };*/
  const onClickHandler = (name: string) => {
    console.log(name);
  };

  /*/!* const foo1 = () => {
    console.log(100200);
  };

  const foo2 = (num: number) => {
    console.log(num);*!/
  };*/

  return (
    <>
      {/*<button
        onClick={(event) => {
          console.log("Hello");
        }}
      >
        MyYoutubeChanel-1
      </button>*/}
      <button onClick={(event) => onClickHandler("Vasya!")}>
        MyYoutubeChanel-1
      </button>
      <button onClick={() => onClickHandler("some info")}>
        MyYoutubeChanel-3
      </button>
      {/* <button onClick={foo1}> 1</button>
      <button onClick={() => foo2(100200)}> 2 </button>*/}
    </>
  );
}

export default Buttontask;
