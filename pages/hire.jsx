import React from "react"
import { useSelector } from "react-redux"
import EmployerCreateBox from "../components/Employer/EmployerCreateBox"

import { HireStep1, HireStep2, HireStep3 } from "../components/Hire/HireStep"

const HirePage = () => {
    const hire = useSelector(({ hire }) => hire)
    return (
        <div className="flex flex-col gap-5">
            {hire.step == 0 ? (
                <EmployerCreateBox />
            ) : hire.step === 1 ? (
                <HireStep1 />
            ) : hire.step === 2 ? (
                <HireStep2 />
            ) : hire.step === 3 ? (
                <HireStep3 />
            ) : (
                ""
            )}
        </div>
    )
}

export default HirePage
