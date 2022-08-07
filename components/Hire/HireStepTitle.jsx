import { Card } from "flowbite-react"
import React from "react"

const HireStepTitle = ({ title }) => {
    return (
        <Card>
            <h2 className="text-4xl font-bold">{title}</h2>
        </Card>
    )
}

export default HireStepTitle
