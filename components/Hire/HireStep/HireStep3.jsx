import React from "react"
import { HireJobRangeSalary, HireJobSupplemental, HireJobBenefit } from "../"
import { HireStepTitle, HireStepNextBackButton } from "./"

const HireStep3 = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title={"Add compensation"} />
                <HireJobRangeSalary />
                <HireJobSupplemental />
                <HireJobBenefit />
                <HireStepNextBackButton />
            </div>
        </div>
    )
}

export default HireStep3
