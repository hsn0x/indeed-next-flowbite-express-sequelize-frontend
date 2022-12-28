import { Card, Textarea } from "flowbite-react"
import React from "react"

const HireJobCOVID19Precautions = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">
                Are you taking any additional COVID-19 precautions?*
            </h2>
            <h3>Let people know how your company is responding to COVID-19.</h3>
            <Textarea
                placeholder="All customers are required to wear a face mask, click and collect available, common surfaces are sanitised regularly, vaccination requirements, etc."
                maxLength={256}
            ></Textarea>
        </Card>
    )
}

export default HireJobCOVID19Precautions
