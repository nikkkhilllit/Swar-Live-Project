import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null
  }

  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLikedList: (state, action) => {
        state.user.likedList = action.payload
      },
     }
  })
    
  export const { setLikedList, } = userSlice.actions
  export default userSlice.reducer  