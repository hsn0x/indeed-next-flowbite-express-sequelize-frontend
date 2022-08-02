const JOBS_FETCH_REQUEST = "JOBS_FETCH_REQUEST"
const JOBS_FETCH_SUCCESS = "JOBS_FETCH_SUCCESS"
const JOBS_FETCH_FAIL = "JOBS_FETCH_FAIL"

const JOBS_CREATE_REQUEST = "JOBS_CREATE_REQUEST"
const JOBS_CREATE_SUCCESS = "JOBS_CREATE_SUCCESS"
const JOBS_CREATE_FAIL = "JOBS_CREATE_FAIL"

const JOBS_DELETE_REQUEST = "JOBS_DELETE_REQUEST"
const JOBS_DELETE_SUCCESS = "JOBS_DELETE_SUCCESS"
const JOBS_DELETE_FAIL = "JOBS_DELETE_FAIL"
const JOBS_DELETE_RESET = "JOBS_DELETE_RESET"

const initialState = {
    loading: false,
    error: "",

    rows: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    count: null,
}

const jobs = {
    reducer: (state = initialState, action) => {
        switch (action.type) {
            // FETCH
            case JOBS_FETCH_REQUEST:
                return { ...state, loading: true, error: "" }
            case JOBS_FETCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    ...action.payload,
                    error: "",
                }
            case JOBS_FETCH_FAIL:
                return { ...state, loading: false, error: action.payload }

            // CREATE
            case JOBS_CREATE_REQUEST:
                return { ...state, loadingCreate: true }
            case JOBS_CREATE_SUCCESS:
                return { ...state, loadingCreate: false }
            case JOBS_CREATE_FAIL:
                return { ...state, loadingCreate: false, error: action.payload }

            // DELETE
            case JOBS_DELETE_REQUEST:
                return { ...state, loadingDelete: true }
            case JOBS_DELETE_SUCCESS:
                return { ...state, loadingDelete: false, successDelete: true }
            case JOBS_DELETE_FAIL:
                return { ...state, loadingDelete: false }
            case JOBS_DELETE_RESET:
                return { ...state, loadingDelete: false, successDelete: false }

            default:
                return state
        }
    },
}

export default jobs
