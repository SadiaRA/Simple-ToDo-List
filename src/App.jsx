import React, { useState } from 'react';
import Lists from './lists';
const App=()=>{
    const [inputList,setInputList]=useState('');
    const[items,setItems]=useState([]);
    const itemList=(event)=>{
        setInputList(event.target.value)

    }
    const addList=()=>{
        setItems((previtem)=>{
            return [...previtem,inputList]
        })
        setInputList('');

    }
    const Delete=(id)=>{
        setItems((previtem)=>{
            return previtem.filter((item,index)=>{
                return id!==index;
            })
        })

    }
    return(
        <>
          <div className='main_div'>
              <div className="center_div">
                  <br/>
                  <h1>TODO List</h1>
                  <br/>
                  <input type='text' placeholder='Add an item'  value= {inputList} onChange={itemList}/>
                  <button onClick={addList}><i class="fa fa-plus-circle"></i></button>
                  <br/>
                  <ol>
                            {items.map((item,index)=>< Lists text = {item} key={index}  id={index} onselect={Delete}/>)}
                      
                      
                  </ol>
                  
              </div>
          </div> 
        </>
    )
}
export default App;