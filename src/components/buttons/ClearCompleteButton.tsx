import { useAppDispatch } from "../../hooks/hooks"
import { clearCompleteTasks } from "../../reducers/reducer"

export const ClearCompleteButton =()=>{
    const dispatch = useAppDispatch()
    const clearComplete =()=>[
        dispatch(clearCompleteTasks(null))
    ]
    return(
        <button onClick={clearComplete}>Clear complete</button>
    )
}