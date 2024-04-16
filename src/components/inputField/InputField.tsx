import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { addTask,setCounter,addActiveTask } from '../../reducers/reducer';
import TextField from '@mui/material/TextField';
import { TaskType } from '../../types/types';

export const InputField = () =>{
    const [text, setText] = useState<TaskType>({id:0,text:"",checked:false,disable:false})
    const [input, setInput] = useState<string>("")
    const dispatch = useAppDispatch()
    let id = Math.random()*100 - Math.random() +1
    let addtask = () =>{
        dispatch(addTask(text))
        dispatch(addActiveTask(null))
        dispatch(setCounter(1))
        setInput("")
    }
    return(
        <TextField
        value={input}
        sx={{width:"100%"}}
            onKeyDown={(e)=>{
                if(e.key==='Enter'){
                  addtask()
                  
                
                }}}
                onChange={(e)=>{
                    setInput(e.currentTarget.value)
                    setText({id,text:e.currentTarget.value,checked:false,disable:false})}}
            id="outlined-textarea"
            label="task"
            placeholder="type your task"
      />
    ) 
}