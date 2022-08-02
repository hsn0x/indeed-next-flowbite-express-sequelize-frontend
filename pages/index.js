import { Card } from "flowbite-react"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { axiosDB } from "../db"
import { jobsActions } from "../redux/actions"
import { errorUtils } from "../utils"

const HomePage = () => {
    const dispatch = useDispatch()

    const jobs = useSelector(({ jobs }) => jobs)

    const jobsAction = bindActionCreators(jobsActions, dispatch)

    useEffect(() => {
        const fetchData = async () => {
            jobsAction.fetchRequest()
            try {
                const jobsResponse = await axiosDB.axiosServer.get("/jobs")
                jobsAction.fetchSuccess(jobsResponse.data)
            } catch (error) {
                console.error(error)
                jobsAction.fetchFail(errorUtils.getError(error))
            }
        }
        fetchData()
    }, [])
    return (
        <div className="grid grid-cols-2">
            <div>
                {jobs.rows.map((job) => (
                    <div key={job.id}>
                        <Card>
                            <h2 className="font-bold text-2xl">{job.title}</h2>
                            <h3 className="text-xl">{job.description}</h3>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage
