import { Card } from "flowbite-react"
import React from "react"
import JobBox from "../Job/JobBox"

const JobsBox = ({ jobs }) => {
    return (
        <div className="flex flex-col gap-1">
            {jobs &&
                jobs.rows.map((job) => (
                    <div key={job.id}>
                        <JobBox job={job} />
                    </div>
                ))}
        </div>
    )
}

export default JobsBox
