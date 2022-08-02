import Axios from "axios"
import { axiosConfig } from "../config/"

const axios = {
    axiosClient: Axios.create(axiosConfig.axiosClientConfig),
    axiosServer: Axios.create(axiosConfig.axiosServerConfig),
}

export default axios
