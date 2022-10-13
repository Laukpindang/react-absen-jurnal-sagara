import React from "react";
import './button.css'
// import { Link } from "react-router-dom";

export default function Button(props) {

    if (props.type === "navAbsen") {
        return (
            <button>Absensi</button>
        )
    } else if (props.type === "navJurnal") {
        return (
            <button>Jurnal</button>
        )
    } else {
        return (
            console.log("ada button tidak terdeteksi, cek kembali penulisan type button")
        )
    }
}