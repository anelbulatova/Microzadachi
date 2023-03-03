import React from "react";

type PropsType = {
  topCars: Array<topCarsType>;
};

type topCarsType = {
  manufacturer: string;
  model: string;
};

export const NewCars = (props: PropsType) => {
  return (
    <table>
      <tbody>
        {props.topCars.map((el, index) => {
          return (
            <tr key={index}>
              <th>{el.manufacturer}</th>
              <th>{el.model}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
