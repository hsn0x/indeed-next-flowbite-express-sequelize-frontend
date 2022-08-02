import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth"
import users from "./users"

import login from "./login"
import register from "./register"

import jobs from "./jobs.js"

export { default as authReducers } from "./auth"
export { default as usersReducers } from "./users"

export { default as loginReducers } from "./login"
export { default as registerReducers } from "./register"

export { default as jobsReducers } from "./jobs"

const reducers = combineReducers({
    users: users.reducer,
    auth: auth.reducer,

    login: login.reducer,
    register: register.reducer,

    jobs: jobs.reducer,
})

export default reducers
