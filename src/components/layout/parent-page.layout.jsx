import React from "react";
import ParentNav from "../header/parent-nav";

export default function ParentPage({children}) {
    return (
        <>
        <ParentNav/>
        <main>{children}</main>
        </>
    )
}