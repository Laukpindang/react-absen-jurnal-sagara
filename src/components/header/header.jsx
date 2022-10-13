import React from "react";
import './header.css'
import ApkName from "../apk-name/apk.";
import ButtonNav from "./button-navigasi/button-nav";

export default function Header() {
    return (
        <header>
            <ApkName />
            <ButtonNav />
        </header>
    )
}