import { Card, Label, TextInput } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../constants"
import { FaPlus } from "react-icons/fa"
import { HireJobChipSchedule } from "./HireJobChip"

const HireJobSchedule = () => {
    return (
        <Card>
            <h2 className="text-xl font-bold">
                What is the schedule for this job?*
            </h2>

            <div className="flex gap-2 flex-wrap">
                {JOB_CONSTANTS.schedule.map((schedule) => (
                    <div key={schedule.id}>
                        <HireJobChipSchedule schedule={schedule} />
                    </div>
                ))}
            </div>

            <div>
                <div>
                    <fieldset className="flex flex-col gap-2" id="radio">
                        <legend className="text-base font-bold">
                            Is there a planned start date for this job?
                        </legend>
                        <div
                            className="flex items-center gap-2 border-2 p-4 rounded-lg"
                            htmlFor="planned-start-date-yes"
                        >
                            <TextInput
                                type="radio"
                                Display
                                Name
                                id="planned-start-date-yes"
                                name="planned-start-date"
                                value={true}
                                defaultChecked={true}
                            />
                            <Label htmlFor="planned-start-date-yes">Yes</Label>
                        </div>
                        <div
                            className="flex items-center gap-2 border-2 p-4 rounded-lg"
                            htmlFor="planned-start-date-no"
                        >
                            <TextInput
                                type="radio"
                                Display
                                Name
                                id="planned-start-date-no"
                                name="planned-start-date"
                                value={false}
                                defaultChecked={true}
                            />
                            <Label htmlFor="planned-start-date-no">No</Label>
                        </div>
                    </fieldset>
                </div>
            </div>
        </Card>
    )
}

export default HireJobSchedule
