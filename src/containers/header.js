import React from "react"
import { Header, Navbar } from "../components"
import * as ROUTES from "../constants/Routes"

export function HeaderContainer({ children }) {
    return (
        <Header>

            <Header.Frame>
                <Header.Frame>


                </Header.Frame>
            </Header.Frame>
            { children}
        </Header>

    )
}