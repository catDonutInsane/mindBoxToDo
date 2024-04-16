import { useAppSelector } from "../../hooks/hooks"
import { Task } from "../task/Task"
export const Allpage = () =>{

    const {allTasks} = useAppSelector(state=> state.reducer)
   
  
    return (
        <div className="wrapper">
            {allTasks.length==0
                ?"There are no tasks"
                :<div className="list">
                    {allTasks.map(i=><Task data ={i} key={i.id}/>)}
                </div>}
        </div>
       
    )
}