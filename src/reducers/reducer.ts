import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { InitialStateType ,TaskType} from "../types/types";


const initialState:InitialStateType= {
  allTasks:[],
  completedTasks:[],
  activeTasks:[],
  activeTaskCounter:0
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
        addTask(state, action:PayloadAction<TaskType>){
          state.allTasks = [...state.allTasks, action.payload]
        },
        addCompletedTask(state, action:PayloadAction<TaskType>){
          state.completedTasks = [...state.completedTasks, action.payload]
        },
        addActiveTask(state, action){
          state.activeTasks = [...state.allTasks.filter(i=>i.checked===false)]
        },
        setChecked(state, action:PayloadAction<number>){
          let element = state.allTasks.find(i=>i.id===action.payload)
          if(element){
            let res = state.allTasks.indexOf(element)
            state.allTasks[res].checked=true
            state.allTasks[res].disable=true
          }
        },
        setCounter(state, action:PayloadAction<number>){
          state.activeTaskCounter += action.payload
        },
        clearCompleteTasks(state, action){
          state.allTasks = [...state.allTasks.filter(i=>i.checked===false)]
          state.completedTasks = []
        },
    
  },
});
export const {
  addTask,
  addCompletedTask,
  setChecked,
  addActiveTask,
  setCounter,
  clearCompleteTasks
} = reducer.actions;
export default reducer.reducer;