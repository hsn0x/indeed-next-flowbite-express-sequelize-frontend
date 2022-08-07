import React from "react"
import { HireJobHiringQuestins, HireJobSchedule, HireJobType } from "../HireJob"
import { HireStepTitle, HireStepNextBackButton } from "./"

const HireStep2 = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title="Include details" />
                <HireJobType />
                <HireJobSchedule />
                <HireJobHiringQuestins />
                <HireStepNextBackButton />
            </div>
        </div>
    )
}

export default HireStep2
