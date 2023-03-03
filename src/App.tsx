import React, { useState } from "react";
import { NewComponent } from "./task1/NewComponent";
import Maptask from "./task2tablemap/maptask";
import Buttontask from "./task3button/buttontask";
import UniversalButton from "./task3button/3universalbutton /universalbutton";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ]);
  // @ts-ignore
  // @ts-ignore
  return (
    <div>
      {/*<NewComponent students={students} />
      <Maptask />*/}
      {/*<Buttontask />*/}
      <UniversalButton />
    </div>
  );
}

export default App;
