import { Card } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../../constants"
import { FaPlus } from "react-icons/fa"
import { HireJobChipBenefit } from "../HireJobChip"

const HireJobBenefit = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">
                Are any of the following benefits offered?
            </h2>

            <div className="flex gap-2 flex-wrap">
                {JOB_CONSTANTS.benefits.map((benefit) => (
                    <div key={benefit.id}>
                        <HireJobChipBenefit benefit={benefit} />
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default HireJobBenefit
