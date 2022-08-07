import { Button, Card } from "flowbite-react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { hireActions } from "../../redux/actions"

const HireNextBackButton = () => {
    const hire = useSelector(({ hire }) => hire)

    const dispatch = useDispatch()
    const hAciton = bindActionCreators(hireActions, dispatch)

    const handleSaveAndContinue = () => {
        hAciton.updateStep(hire.step + 1)
    }
    const handleBack = () => {
        hAciton.updateStep(hire.step - 1)
    }

    return (
        <div>
            <Card>
                <div className="flex justify-between">
                    <div>
                        {hire.step !== 0 && (
                            <Button size="xl" onClick={handleBack}>
                                Back
                            </Button>
                        )}
                    </div>
                    <div>
                        <Button size="xl" onClick={handleSaveAndContinue}>
                            Save and continue
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HireNextBackButton
