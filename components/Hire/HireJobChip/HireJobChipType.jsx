import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaPlus, FaCheck } from "react-icons/fa"
import { bindActionCreators } from "redux"
import { hireActions } from "../../../redux/actions"

const HireJobChipType = ({ type }) => {
    const hire = useSelector(({ hire }) => hire)
    const dispatch = useDispatch()
    const hireAction = bindActionCreators(hireActions, dispatch)

    const handleSelected = () => {
        hireAction.updateJobType(type)
    }
    return (
        <div>
            {!hire.jobType.includes(type) ? (
                <div
                    onClick={handleSelected}
                    className="border-2 bg-transparent hover:bg-blue-50 border-gray-500 hover:border-blue-500 cursor-pointer rounded-lg py-1 px-4 text-sm flex gap-1 h-9 items-center"
                >
                    <div className="">
                        <FaPlus />
                    </div>
                    <div>{type.name}</div>
                </div>
            ) : (
                <div
                    onClick={handleSelected}
                    className="border-2 bg-stone-600 hover:bg-stone-700 border-gray-500 cursor-pointer rounded-lg py-1 px-4 text-sm flex gap-2 text-white font-bold h-9 items-center"
                >
                    <div className="">
                        <FaCheck color="white" />
                    </div>
                    <div>{type.name}</div>
                </div>
            )}
        </div>
    )
}

export default HireJobChipType
