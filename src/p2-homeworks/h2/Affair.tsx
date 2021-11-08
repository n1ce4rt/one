import React from 'react'
import { AffairPriorityType } from './HW2'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairPriorityType
    deleteAffairCallback: Function
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
       props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            some text

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
