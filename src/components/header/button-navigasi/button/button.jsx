import React from "react";
import './button.css';

export default function Button(props) {

    if (props.type === "navAbsen") {
        return (
            <button className="btn btn-outline-dark">Absensi</button>
        )
    } else if (props.type === "navJurnal") {
        return (
            <button className="btn btn-outline-dark">Jurnal</button>
        )
    } else {
        return (
            console.log("ada button tidak terdeteksi, cek kembali penulisan type button")
        )
    }
}