import React from "react";
import './button-nav.css'
import Button from "./button/button";
import { Link } from "react-router-dom";

export default function ButtonNav() {
    var type;
    return (
        <div className="button-nav">

            <Link to={`/absen`}>
                <Button type={type = "navAbsen"}></Button>
            </Link>
            <Link to={`/jurnal`}>
                <Button type={type = "navJurnal"}></Button>
            </Link>

        </div>
    )
}