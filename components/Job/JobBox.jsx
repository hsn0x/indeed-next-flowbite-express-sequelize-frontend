import { Card } from "flowbite-react"
import React from "react"

const JobBox = ({ job }) => {
    return (
        <>
            {job && (
                <Card>
                    <h2 className="font-bold text-2xl">{job.title}</h2>
                    <h3 className="text-xl">{job.description}</h3>
                </Card>
            )}
        </>
    )
}

export default JobBox
