import React from "react"
import {
    HireStepTitle,
    HireRangeSalary,
    HireSupplemental,
    HireBenefit,
    HireNextBackButton,
} from "./"

const HireStepThree = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title={"Add compensation"} />
                <HireRangeSalary />
                <HireSupplemental />
                <HireBenefit />
                <HireNextBackButton />
            </div>
        </div>
    )
}

export default HireStepThree
