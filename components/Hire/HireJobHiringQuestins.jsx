import { Card, Select } from "flowbite-react"
import React from "react"
import { JOB_CONSTANTS } from "../../constants"

const HireJobHiringQuestins = () => {
    return (
        <div>
            <Card>
                <div>
                    <h2 className="text-xl font-bold">
                        How many people do you want to hire for this opening?*
                    </h2>
                    <h3 className="text-base mb-1">
                        The more openings you have, the more applications
                        you&apos;ll need.
                    </h3>
                    <Select>
                        {JOB_CONSTANTS.size.map((size) => (
                            <option key={size.id} value={size.id}>
                                {size.name}
                            </option>
                        ))}
                    </Select>
                </div>
                <div>
                    <h2 className="text-xl font-bold">
                        How quickly do you need to hire?*
                    </h2>
                    <h3 className="text-base mb-1">
                        If you need someone fast, you may need higher
                        visibility.
                    </h3>
                    <Select>
                        {JOB_CONSTANTS.delay.map((delay) => (
                            <option key={delay.id} value={delay.id}>
                                {delay.name}
                            </option>
                        ))}
                    </Select>
                </div>
            </Card>
        </div>
    )
}

export default HireJobHiringQuestins
