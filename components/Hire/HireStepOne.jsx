import React from "react"
import {
    HireAboutJob,
    HireBasicInformation,
    HireCompany,
    HireNextBackButton,
    HirePageTitle,
} from "./"

const HireStepOne = () => {
    return (
        <div className="flex flex-col gap-5">
            <HirePageTitle />
            <HireAboutJob />
            <HireCompany />
            <HireBasicInformation />
            <HireNextBackButton />
        </div>
    )
}

export default HireStepOne
