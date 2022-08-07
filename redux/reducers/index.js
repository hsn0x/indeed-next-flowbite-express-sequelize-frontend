import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth"
import users from "./users"

import login from "./login"
import register from "./register"

import jobs from "./jobs.js"
import hire from "./hire"

export { default as authReducers } from "./auth"
export { default as usersReducers } from "./users"

export { default as loginReducers } from "./login"
export { default as registerReducers } from "./register"

export { default as jobsReducers } from "./jobs"
export { default as hireReducers } from "./hire"

const reducers = combineReducers({
    users: users.reducer,
    auth: auth.reducer,

    login: login.reducer,
    register: register.reducer,

    jobs: jobs.reducer,

    hire: hire.reducer,
})

export default reducers
