import React from "react";
import { Button } from "./Button";

function UniversalButton() {
  const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  };

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  };

  const Button3Foo = () => {
    console.log("MyChanel - 3");
  };
  return (
    <div>
      {/*<button>MyChanel-1</button>
      <button>MyChanel-2</button>*/}
      <Button
        name={"MyChanel - 1"}
        callback={() => Button1Foo("I am Vasya", 21)}
      />
      <Button name={"MyChanel - 2"} callback={() => Button2Foo("I am Ivan")} />
      <Button name={"MyChanel - 3"} callback={Button3Foo} />
    </div>
  );
}

export default UniversalButton;
