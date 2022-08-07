import React from "react"
import { useSelector } from "react-redux"
import EmployerCreateBox from "../components/Employer/EmployerCreateBox"

import HireStepOne from "../components/Hire/HireStepOne"
import HireStepTwo from "../components/Hire/HireStepTwo"

const HirePage = () => {
    const hire = useSelector(({ hire }) => hire)
    return (
        <div className="flex flex-col gap-5">
            {hire.step == 0 ? (
                <EmployerCreateBox />
            ) : hire.step === 1 ? (
                <HireStepOne />
            ) : hire.step === 2 ? (
                <HireStepTwo />
            ) : (
                ""
            )}
        </div>
    )
}

export default HirePage
