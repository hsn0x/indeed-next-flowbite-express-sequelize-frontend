import React from "react"
import {
    HireStepTitle,
    HireNextBackButton,
    HireJobType,
    HireJobSchedule,
    HireJobHiringQuestins,
} from "./"

const HireStepTwo = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title="Include details" />
                <HireJobType />
                <HireJobSchedule />
                <HireJobHiringQuestins />
                <HireNextBackButton />
            </div>
        </div>
    )
}

export default HireStepTwo
