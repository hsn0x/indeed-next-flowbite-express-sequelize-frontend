import { Card, Textarea } from "flowbite-react"
import React from "react"

const HireJobDescription = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">Job description*</h2>
            <h3>
                Describe the responsibilities of this job, required work
                experience, skills or education.
            </h3>
            <Textarea></Textarea>
        </Card>
    )
}

export default HireJobDescription
