import React from 'react';
const Lists =(props)=>{
    
    return (
    <>
    <div className="todo_style">

    <li>{props.text}</li>
    <i className='fa fa-times' aria-hidden='true' onClick={()=>{
        props.onselect(props.id)
        }}/>
    </div>

    </>);
          


};
export default Lists;