import {
    navbarNavigationsAuthSlug,
    navbarNavigationsGuestSlug,
} from "../constants/navbar"

export const handelNavbarNavigations = (navss, auth) =>
    navss.map((nav) => {
        console.log(
            navss.map((nav) => ({
                show: nav.show,
                label: nav.label,
                slug: nav.slug,
            }))
        )
        if (nav.children.length > 0) {
            return {
                ...nav,
                children: [...handelNavbarNavigations(nav.children)],
            }
        } else {
            if (auth.user && navbarNavigationsGuestSlug.includes(nav.slug)) {
                return {
                    ...nav,
                    show: false,
                }
            } else if (
                !auth.user &&
                navbarNavigationsAuthSlug.includes(nav.slug)
            ) {
                return {
                    ...nav,
                    show: false,
                }
            } else {
                return {
                    ...nav,
                }
            }
        }
    })
