const hire = {
    updateStep: (step) => {
        return (dispatch) =>
            dispatch({
                type: "UPDATE_HIRE_STEP",
                step,
            })
    },
    updateJobType: (jobType) => {
        return (dispatch) =>
            dispatch({
                type: "UPDATE_HIRE_JOB_TYPE",
                jobType,
            })
    },
    updateJobSchedule: (jobSchedule) => {
        return (dispatch) =>
            dispatch({
                type: "UPDATE_HIRE_JOB_SCHEDULE",
                jobSchedule,
            })
    },
}

export default hire
