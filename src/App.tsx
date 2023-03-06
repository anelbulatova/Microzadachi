import React, { useState } from "react";
import { NewComponent } from "./1week/task1/NewComponent";
import Maptask from "./1week/task2tablemap/maptask";
import Buttontask from "./1week/task3button/buttontask";
import UniversalButton from "./1week/task3button/3universalbutton /universalbutton";
import {Task4} from "./1week/task4usestate/task4";
import {Task5} from "./1week/task5filter/task5filter";
function App() {
 /* const [students, setStudents] = useState([
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
  ]);*/
  // @ts-ignore
  // @ts-ignore
  return (
    <div>
      {/*<NewComponent students={students} />*/}
      {/*<Maptask/>*/}
      {/*<Buttontask />*/}
      {/*<UniversalButton />*/}
      {/*<Task4/>*/}
        <Task5/>
    </div>
  );
}

export default App;
