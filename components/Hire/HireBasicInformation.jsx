import { Card, Select, TextInput } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../constants/"

const HireBasicInformation = () => {
    return (
        <div className="flex flex-col gap-5">
            <Card>
                <h2 className="text-2xl font-bold">Job title *</h2>
                <TextInput></TextInput>
            </Card>

            <Card>
                <h2 className="text-2xl font-bold">
                    Which option best describes this job&apos;s location? *
                </h2>
                <Select>
                    {JOB_CONSTANTS.location.map((location, index) => (
                        <option key={index} value={location.name}>
                            {location.name}
                        </option>
                    ))}
                </Select>
            </Card>
        </div>
    )
}

export default HireBasicInformation
