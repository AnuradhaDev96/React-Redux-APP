import React from 'react';

//UI component | Stateless
const ToDos = (props) => {
    const { toDos, deleteToDo } = props;
    const toDoList = toDos.length > 0 
    ? (
        toDos.map(toDo => {
            return (
                <div className='collection-item' key={toDo.id}>
                    <span onClick={()=> { deleteToDo(toDo.id) }}>{toDo.content}</span>
                </div>
            )
        })
    )     
    : (
        <p className='center'>You have no todos left</p>
    );

    return (
        <div className='todos collection'>
            {toDoList}
        </div>
    );
}

export default ToDos;