import { Avatar, Button, Dropdown, Navbar } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { navbarNavigations } from "../constants/navbar"
import { handelNavbarNavigations } from "../lib/handelNavbarNavigations"
import { authReducers } from "../redux/reducers"

const NavbarScreen = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const auth = useSelector(({ auth }) => auth)

    const isHandelNavbarNavigations = handelNavbarNavigations(
        navbarNavigations,
        auth
    )

    const handelSignout = async (e) => {
        e.preventDefault()
        await dispatch(authReducers.signOut())
        router.push("/auth/login")
    }
    const handelProfile = async (e) => {
        e.preventDefault()
        router.push(`/resume`)
    }
    useEffect(() => {
        dispatch(authReducers.fetchProfile())
    }, [])
    return (
        <Navbar fluid={true} rounded={true}>
            <div>
                <Navbar.Brand href="#">
                    <div className="flex gap-1">
                        <div className="text-4xl font-bold text-blue-700 mr-2">
                            indeed
                        </div>
                        <div>
                            <Image
                                src="/logo.png"
                                objectFit="cover"
                                alt="Marketplace Logo"
                                height={"50"}
                                width={"50"}
                            />
                        </div>
                    </div>
                </Navbar.Brand>
            </div>
            <div className="flex md:order-2 z-10">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                        <Avatar
                            alt="User settings"
                            img={auth.profile?.avatars[0]?.url}
                            rounded={true}
                            size="md"
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {auth.profile?.firstName} {auth.profile?.lastName}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {auth.profile?.email}
                        </span>
                    </Dropdown.Header>
                    {}

                    {isHandelNavbarNavigations.map(
                        (nav, index) =>
                            nav.place == "right" &&
                            nav.show && (
                                <div key={nav.id}>
                                    {nav.slug == "auth-logout" && (
                                        <Dropdown.Divider />
                                    )}
                                    <Link href={nav.href} passHref>
                                        <span>
                                            <Dropdown.Item
                                                icon={nav.icon}
                                                active={nav.active}
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={(e) => [
                                                    nav.slug == "auth-logout" &&
                                                        handelSignout(e),
                                                    nav.slug == "profile" &&
                                                        handelProfile(e),
                                                ]}
                                            >
                                                {nav.label}
                                            </Dropdown.Item>
                                        </span>
                                    </Link>
                                </div>
                            )
                    )}
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <div className="flex gap-1">
                    <div className="flex gap-1">
                        {isHandelNavbarNavigations.map(
                            ({ label, href, place, id, show }) =>
                                place == "top" &&
                                show && (
                                    <div key={id}>
                                        <Button color={"gray"}>
                                            <Link key={id} href={href}>
                                                {label}
                                            </Link>
                                        </Button>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarScreen
