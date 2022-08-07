import React from "react"
import { HireAboutJob, HireCompany, HireBasicInformation } from "../"
import { HireStepTitle, HireStepNextBackButton } from "./"

const HireStep1 = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title="Provide basic information" />
                <HireAboutJob />
                <HireCompany />
                <HireBasicInformation />
                <HireStepNextBackButton />
            </div>
        </div>
    )
}

export default HireStep1
