import React from "react"
import {
    HireJobCOVID19Precautions,
    HireJobDescription,
    HireJobRefernceID,
} from "../HireJob"
import { HireStepNextBackButton, HireStepTitle } from "./"

const HireStep4 = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col gap-5">
                <HireStepTitle title={"Describe the job"} />
                <HireJobDescription />
                <HireJobCOVID19Precautions />
                <HireJobRefernceID />

                <HireStepNextBackButton />
            </div>
        </div>
    )
}

export default HireStep4
