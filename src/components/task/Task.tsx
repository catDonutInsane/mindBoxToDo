import type { TaskType } from '../../types/types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect,  useState } from "react";
import { FC } from "react";
import { useAppDispatch } from '../../hooks/hooks';
import { addCompletedTask, setChecked, addActiveTask,setCounter } from '../../reducers/reducer';
type Text ={
    data:TaskType,
}
export const Task:FC<Text> = ({data}) =>{

    const {id,text,checked,disable} = data
    const dispatch = useAppDispatch()
    const [check , setCheck] = useState(false)

    let chekTask = () =>{
        dispatch(setChecked(id))
        dispatch(addCompletedTask({id,text,checked:true,disable:true}))
        dispatch(addActiveTask(null))
        dispatch(setCounter(-1))
        setCheck(true)
    }
    useEffect(()=>{

    },[check])
    return (
       
           <FormControlLabel 
            checked={checked}
                     onChange={chekTask}
                     disabled={check || disable}
                     value="end"
                     control={<Checkbox />}
                     label={text}
                     labelPlacement="end"
            />
            )
        }
        
    