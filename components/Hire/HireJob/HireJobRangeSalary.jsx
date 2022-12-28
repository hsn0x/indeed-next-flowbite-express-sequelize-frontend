import { Card, Label, Select, TextInput } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../../constants"

const HireJobRangeSalary = () => {
    return (
        <Card>
            <h2 className="font-bold">What is the pay rate or range?</h2>
            <h3>
                Review the pay we estimated for your job and make adjustments if
                needed.
            </h3>
            <div>
                <Label>Show pay by</Label>
            </div>
            <div>
                <Select>
                    {JOB_CONSTANTS.payRate.map((payRate) => (
                        <option key={payRate.id} value={payRate}>
                            {payRate.name}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="minimum-range" value="Minimum" />
                        </div>
                        <div>
                            <TextInput
                                id="minimum-range"
                                type="text"
                                value="39,644.77"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mt-10">To</div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="maximum-range" value="Maximum" />
                        </div>
                        <div>
                            <TextInput
                                id="maximum-range"
                                type="text"
                                value="89,918.23"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label>Rate</Label>
                        </div>
                        <div className="w-40">
                            <Select>
                                {JOB_CONSTANTS.rate.map((rate) => (
                                    <option key={rate.id} value={rate}>
                                        {rate.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="starting-amount" value="Amount" />
                        </div>
                        <div>
                            <TextInput
                                id="starting-amount"
                                type="text"
                                value="39,644.77"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label>Rate</Label>
                        </div>
                        <div className="w-40">
                            <Select>
                                {JOB_CONSTANTS.rate.map((rate) => (
                                    <option key={rate.id} value={rate}>
                                        {rate.name}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default HireJobRangeSalary
