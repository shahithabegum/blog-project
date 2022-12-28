import {createContext,useReducer,useEffect} from 'react'
import { Reducer } from './Reducer'
const initial_state={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    erorr:false
}

export const Context=createContext(initial_state)


export const ContextProvider=({children})=>{
  const[state,dispatch]= useReducer(Reducer,initial_state);
  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(state.user));
  }, [state.user])

   return(<Context.Provider value={{
    user:state.user,
    isFetching:state.isFetching,
    erorr:state.erorr,
    dispatch
   }}>
         {children}
   </Context.Provider>)
}