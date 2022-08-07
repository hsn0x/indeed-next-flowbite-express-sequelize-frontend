import { Card } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../constants"
import { FaPlus } from "react-icons/fa"
import { HireJobChipSupplemental } from "./HireJobChip"

const HireSupplemental = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">
                Do you offer any of the following supplemental pay?
            </h2>

            <div className="flex gap-2 flex-wrap">
                {JOB_CONSTANTS.supplemental.map((supplemental) => (
                    <div key={supplemental.id}>
                        <HireJobChipSupplemental supplemental={supplemental} />
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default HireSupplemental
