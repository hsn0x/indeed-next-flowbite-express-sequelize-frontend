const UPDATE_HIRE_STEP = "UPDATE_HIRE_STEP"
const UPDATE_HIRE_JOB_TYPE = "UPDATE_HIRE_JOB_TYPE"
const UPDATE_HIRE_JOB_SCHEDULE = "UPDATE_HIRE_JOB_SCHEDULE"
const UPDATE_HIRE_JOB_SUPPLEMENTAL_PAY = "UPDATE_HIRE_JOB_SUPPLEMENTAL_PAY"
const UPDATE_HIRE_JOB_BENEFITS = "UPDATE_HIRE_JOB_BENEFITS"

const initialState = {
    step: 0,
    jobType: [],
    jobSchedule: [],
    jobSupplemental: [],
    jobBenefit: [],
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
            case UPDATE_HIRE_JOB_SUPPLEMENTAL_PAY:
                const jobSupplemental = state.jobSupplemental.includes(
                    action.jobSupplemental
                )
                    ? state.jobSupplemental.filter(
                          (pay) => pay !== action.jobSupplemental
                      )
                    : [...state.jobSupplemental, action.jobSupplemental]
                return { ...state, jobSupplemental: jobSupplemental }
            case UPDATE_HIRE_JOB_BENEFITS:
                const jobBenefit = state.jobBenefit.includes(action.jobBenefit)
                    ? state.jobBenefit.filter(
                          (benefit) => benefit !== action.jobBenefit
                      )
                    : [...state.jobBenefit, action.jobBenefit]
                return { ...state, jobBenefit: jobBenefit }
            default:
                return state
        }
    },
}

export default hire
