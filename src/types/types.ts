export type InitialStateType ={
    allTasks:TaskType[],
    completedTasks:TaskType[],
    activeTasks:TaskType[],
    activeTaskCounter:number
}

export type TaskType={
    id:number,
    text:string,
    checked:boolean,
    disable:boolean
}