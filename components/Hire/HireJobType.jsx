import { Card } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../constants"
import { FaPlus } from "react-icons/fa"
import { HireJobTypeChip } from "./"

const HireJobType = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">What is the job type?*</h2>

            <div className="flex gap-2 flex-wrap">
                {JOB_CONSTANTS.type.map((type) => (
                    <div key={type.id}>
                        <HireJobTypeChip type={type} />
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default HireJobType
