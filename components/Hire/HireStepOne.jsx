import React from "react"
import {
    HireAboutJob,
    HireBasicInformation,
    HireCompany,
    HireNextBackButton,
    HireStepTitle,
} from "./"

const HireStepOne = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title="Provide basic information" />
                <HireAboutJob />
                <HireCompany />
                <HireBasicInformation />
                <HireNextBackButton />
            </div>
        </div>
    )
}

export default HireStepOne
