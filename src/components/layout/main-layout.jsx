import React from "react";
import Navbar from "../header/navbar";

export default function MainLayout({children}) {
    return (
        <>
        <Navbar/>
        <main>{children}</main>
        </>
    )
}