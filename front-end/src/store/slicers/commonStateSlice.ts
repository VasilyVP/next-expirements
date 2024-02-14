import { createSlice } from "@reduxjs/toolkit";


type CommonState = {
    showBackdrop: boolean;
    authenticated: boolean;
}

const initialState: CommonState = {
    showBackdrop: false,
    authenticated: false,
}

const commonStateSlice = createSlice({
    name: "commonState",
    initialState,
    reducers: {
        showBackdrop(state: CommonState) {
            state.showBackdrop = true;
        },
        hideBackdrop(state: CommonState) {
            state.showBackdrop = false;
        },
        setAuthenticated(state: CommonState, action: { type: string; payload: boolean; }) {
            state.authenticated = action.payload
        }
    },
});

export const { showBackdrop, hideBackdrop, setAuthenticated } = commonStateSlice.actions;
export default commonStateSlice.reducer;
