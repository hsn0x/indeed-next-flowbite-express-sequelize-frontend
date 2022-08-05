import React from "react"
import {
    HireAboutJob,
    HireBasicInformation,
    HireCompany,
    HireNextBackButton,
    HirePageTitle,
} from "../components/Hire"

const hire = () => {
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

export default hire
