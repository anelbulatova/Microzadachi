import React from "react";


type NewComponentType = {
    students: Array<StudentType>
}


type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((el, index) => {
                debugger
                return (
                    <li key={el.id}>
                       <span>{el.age}</span>
                        <span>{el.name}</span>
                    </li>

                )

            })}
        </ul>
    )
        ;
}