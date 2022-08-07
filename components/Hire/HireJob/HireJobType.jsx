import { Card } from "flowbite-react"
import React from "react"
import { FaPlus } from "react-icons/fa"
import { JOB_CONSTANTS } from "../../../constants"
import { HireJobChipType } from "../HireJobChip"

const HireJobType = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">What is the job type?*</h2>

            <div className="flex gap-2 flex-wrap">
                {JOB_CONSTANTS.type.map((type) => (
                    <div key={type.id}>
                        <HireJobChipType type={type} />
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default HireJobType
