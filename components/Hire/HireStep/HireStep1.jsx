import React from "react"
import { HireJobAbout, HireJobCompany, HireJobBasicInformation } from "../"
import { HireStepTitle, HireStepNextBackButton } from "./"

const HireStep1 = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title="Provide basic information" />
                <HireJobAbout />
                <HireJobCompany />
                <HireJobBasicInformation />
                <HireStepNextBackButton />
            </div>
        </div>
    )
}

export default HireStep1
