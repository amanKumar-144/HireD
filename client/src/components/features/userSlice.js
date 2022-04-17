import {createSlice} from '@reduxjs/toolkit';

// const [userRole,setUserRole] = useState(null)
const initialState = {
    userRole: null,
    userName: null,
    userAge: null,
    userGender: null,
    userEmail: null,
    userNumber: null,
    userEducationalInformation: null,
    userSkills: null,
    userResumeLink: null,
    userRolesPreferred: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action) => {
            // setUserName(action.payload)
            state.userRole = action.payload.userRole;
            state.userName = action.payload.userName;
            state.userAge = action.payload.userAge;
            state.userGender = action.payload.userGender;
            state.userEmail = action.payload.userEmail;
            state.userNumber = action.payload.userNumber;
            state.userEducationalInformation = action.payload.userEducationalInformation;
            state.userSkills = action.payload.userSkills;
            state.userResumeLink = action.payload.userResumeLink;
            state.userRolesPreferred = action.payload.userRolesPreferred;
        },
        logout: (state) => {
            state.userRole = null;
            state.userName = null;
            state.userAge = null;
            state.userGender = null;
            state.userEmail = null;
            state.userNumber = null;
            state.userEducationalInformation = null;
            state.userSkills = null;
            state.userResumeLink = null;
            state.userRolesPreferred = null;
        }
    }
});


export const {login,logout} = userSlice.actions;

export const selectUserRole = (state) => state.user.userRole;
export const selectUserName = (state) => state.user.userName;
export const selectUserAge = (state) => state.user.userAge;
export const selectUserGender = (state) => state.user.userGender;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserNumber = (state) => state.user.userNumber;
export const selectUserEducationalInformation = (state) => state.user.userEducationalInformation;
export const selectUserSkills = (state) => state.user.userSkills;
export const selectUserResumeLink = (state) => state.user.userResumeLink;
export const selectUserRolesPreferred = (state) => state.user.userRolesPreferred;

export default userSlice.reducer;
