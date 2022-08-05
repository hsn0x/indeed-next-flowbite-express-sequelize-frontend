import { Button, Card } from "flowbite-react"
import React from "react"

const HireNextBackButton = () => {
    return (
        <div>
            <Card>
                <div className="flex justify-between">
                    <div>
                        <Button size="xl">Back</Button>
                    </div>
                    <div>
                        <Button size="xl">Save and continue</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HireNextBackButton
