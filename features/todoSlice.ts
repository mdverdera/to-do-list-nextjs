import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToDoState {
    value: string[]
}

const initialState: ToDoState = {
    value: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addToDoItem: (state, action:PayloadAction<string>) => {
        state.value.push(action.payload)
      },
      deleteToDoItem: (state, action: PayloadAction<number>) => {
       state.value.splice(action.payload,1)
      },
    },
  })

  export const {addToDoItem, deleteToDoItem} = todosSlice.actions

  export default todosSlice.reducer