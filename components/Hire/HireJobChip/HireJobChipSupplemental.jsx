import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaPlus, FaCheck } from "react-icons/fa"
import { bindActionCreators } from "redux"
import { hireActions } from "../../../redux/actions"

const HireJobChipSupplemental = ({ supplemental }) => {
    const hire = useSelector(({ hire }) => hire)
    const dispatch = useDispatch()
    const hireAction = bindActionCreators(hireActions, dispatch)

    const handleSelected = () => {
        hireAction.updateJobSupplemental(supplemental)
    }
    return (
        <div>
            {!hire.jobSupplemental.includes(supplemental) ? (
                <div
                    onClick={handleSelected}
                    className="border-2 bg-transparent hover:bg-blue-50 border-gray-500 hover:border-blue-500 cursor-pointer rounded-lg py-1 px-4 text-sm flex gap-1 h-9 items-center"
                >
                    <div className="">
                        <FaPlus />
                    </div>
                    <div>{supplemental.name}</div>
                </div>
            ) : (
                <div
                    onClick={handleSelected}
                    className="border-2 bg-stone-600 hover:bg-stone-700 border-gray-500 cursor-pointer rounded-lg py-1 px-4 text-sm flex gap-2 text-white font-bold h-9 items-center"
                >
                    <div className="">
                        <FaCheck color="white" />
                    </div>
                    <div>{supplemental.name}</div>
                </div>
            )}
        </div>
    )
}

export default HireJobChipSupplemental
