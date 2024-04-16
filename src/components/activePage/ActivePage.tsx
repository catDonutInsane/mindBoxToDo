import { useAppSelector } from "../../hooks/hooks"
import { Task } from "../task/Task"



export const ActivePage = () =>{

    const {activeTasks} = useAppSelector(state=>state.reducer)
    return(
        <div className="wrapper">
            {activeTasks.length==0
                ?"There are no tasks"
                :<div className="list">
                    {activeTasks.map(i=><Task data={i} key={i.id}/>)}
                </div>}
        </div>
      

       

    )
}