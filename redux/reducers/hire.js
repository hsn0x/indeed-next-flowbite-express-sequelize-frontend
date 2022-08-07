const UPDATE_HIRE_STEP = "UPDATE_HIRE_STEP"
const UPDATE_HIRE_JOB_TYPE = "UPDATE_HIRE_JOB_TYPE"
const UPDATE_HIRE_JOB_SCHEDULE = "UPDATE_HIRE_JOB_SCHEDULE"

const initialState = {
    step: 0,
    jobType: [],
    jobSchedule: [],
}

const hire = {
    reducer: (state = initialState, action) => {
        switch (action.type) {
            case UPDATE_HIRE_STEP:
                return { ...state, step: action.step }
            case UPDATE_HIRE_JOB_TYPE:
                const jobType = state.jobType.includes(action.jobType)
                    ? state.jobType.filter((type) => type !== action.jobType)
                    : [...state.jobType, action.jobType]
                return { ...state, jobType: jobType }
            case UPDATE_HIRE_JOB_SCHEDULE:
                const jobSchedule = state.jobSchedule.includes(
                    action.jobSchedule
                )
                    ? state.jobSchedule.filter(
                          (schedule) => schedule !== action.jobSchedule
                      )
                    : [...state.jobSchedule, action.jobSchedule]
                return { ...state, jobSchedule: jobSchedule }

            default:
                return state
        }
    },
}

export default hire
