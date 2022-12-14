import { Card } from "flowbite-react"
import React from "react"
import { HireStepNextBackButton } from "../Hire/HireStep"

const EmployerCreateBox = () => {
    return (
        <div>
            <Card>
                <h2 className="text-3xl font-bold">
                    Create an employer account.
                </h2>
                <p className="text-xl">
                    You haven&apos;t posted a job before, so you&apos;ll need to
                    create an employer account
                </p>

                <HireStepNextBackButton />
            </Card>
        </div>
    )
}

export default EmployerCreateBox
