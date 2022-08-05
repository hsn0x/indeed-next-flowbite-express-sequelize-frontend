import { Button, Card, Tabs } from "flowbite-react"
import Link from "next/link"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import JobsBox from "../components/jobs/JobsBox"
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
        <div>
            <div className="flex justify-center">
                <h3 className="text-3xl flex gap-2">
                    <div>Employers:</div>
                    <Button href="/hire">Post a job</Button>
                </h3>
            </div>
            <Tabs.Group aria-label="Tabs with icons" style="underline">
                <Tabs.Item title="Job feed">
                    <div className="grid grid-cols-2">
                        <div>
                            <JobsBox jobs={jobs} />
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item active={true} title="Recent searches">
                    Dashboard content
                </Tabs.Item>
            </Tabs.Group>
        </div>
    )
}

export default HomePage
