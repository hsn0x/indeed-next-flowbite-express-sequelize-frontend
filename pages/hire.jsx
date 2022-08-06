import React from "react"
import {
    HireAboutJob,
    HireBasicInformation,
    HireCompany,
    HireNextBackButton,
    HirePageTitle,
} from "../components/Hire"
import HireStepOne from "../components/Hire/HireStepOne"
import HireStepTwo from "../components/Hire/HireStepTwo"

const hire = () => {
    return (
        <div className="flex flex-col gap-5">
            <HireStepOne />
            <HireStepTwo />
        </div>
    )
}

export default hire
