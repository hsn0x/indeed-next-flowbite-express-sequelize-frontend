import React from "react"
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { loginActions, registerActions } from "../../redux/actions"
import {
    registerReducers,
    loginReducers,
    authReducers,
} from "../../redux/reducers"

const RegisterScreen = () => {
    const router = useRouter()
    const auth = useSelector(({ auth }) => auth)
    const register = useSelector(({ register }) => register)

    const dispatch = useDispatch()

    const loginAction = bindActionCreators(loginActions, dispatch)

    const registerAction = bindActionCreators(registerActions, dispatch)

    const handleSignUp = async (event) => {
        event.preventDefault()
        await dispatch(registerReducers.signUp())
        loginAction.updateEmail(register.email)
        loginAction.updatePassword(register.password)
        handleSignIn(event)
    }

    const handleSignIn = async (event) => {
        event.preventDefault()
        const signInResponse = await dispatch(loginReducers.signIn())
        if (signInResponse.data && signInResponse.data.isAuthenticated) {
            await dispatch(authReducers.fetchProfile())

            router.push("/")
        }
    }
    return (
        <Card>
            <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Register Screen
                </h5>
                <div>
                    <form
                        onSubmit={(event) => handleSignUp(event)}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex justify-between">
                            <div className="w-full mr-2">
                                <div className="mb-2">
                                    <Label
                                        htmlFor="firstName"
                                        value="First name"
                                    />
                                </div>
                                <TextInput
                                    onChange={(event) =>
                                        registerAction.updateFirstName(
                                            event.target.value
                                        )
                                    }
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    required={true}
                                    className="w-full"
                                />
                            </div>
                            <div className="w-full">
                                <div className="mb-2">
                                    <Label
                                        htmlFor="lastName"
                                        value="Last name"
                                    />
                                </div>
                                <TextInput
                                    onChange={(event) =>
                                        registerAction.updateLastName(
                                            event.target.value
                                        )
                                    }
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    required={true}
                                    className="block"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Username" />
                            </div>
                            <TextInput
                                onChange={(event) =>
                                    registerAction.updateUsername(
                                        event.target.value
                                    )
                                }
                                id="username"
                                type="text"
                                placeholder="Username"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                onChange={(event) =>
                                    registerAction.updateEmail(
                                        event.target.value
                                    )
                                }
                                id="email"
                                type="email"
                                placeholder="Email"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput
                                onChange={(event) =>
                                    registerAction.updatePassword(
                                        event.target.value
                                    )
                                }
                                id="password"
                                type="password"
                                placeholder="Password"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="confirmPassword"
                                    value="Confirm password"
                                />
                            </div>
                            <TextInput
                                onChange={(event) =>
                                    registerAction.updatePasswordConfirmed(
                                        event.target.value
                                    )
                                }
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                required={true}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button gradientMonochrome="info" type="submit">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default RegisterScreen
