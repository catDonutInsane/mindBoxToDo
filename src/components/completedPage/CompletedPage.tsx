import { useAppSelector } from "../../hooks/hooks"
import { Task } from "../task/Task"

export const CompletedPage = () =>{
    
    const {completedTasks} = useAppSelector(state=>state.reducer)
    return(
        <div className="wrapper">
            {completedTasks.length==0
                ?"There are no tasks"
                :<div className="list">
                    {completedTasks.map(i=><Task data={i} key={i.id}/>)}
                </div>}
        </div>
       

    )
}