import React, { useState, useEffect } from "react";
import './absensi.css'
import Header from "../header/header";
// import Footer from "../footer/footer";
import '../../App.css'
import axios from "axios";


export default function Absensi() {
    const [nama, setName] = useState('');
    const [masuk, setMasuk] = useState('');
    const [keluar, setKeluar] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [absen, setAbsen] = useState([]);

    const postData = () => {
        axios.post(`https://247a-2001-448a-302c-326a-2877-5dd-a42e-aa1.ngrok.io/api/absen/`, {
            nama,
            masuk,
            keluar,
            tanggal
        }).then(response => { console.log(response) })
        // if (nama === "Rifky Muhammad P") {
        //     setRole("Fullstack Developer");
        // } else if (nama === "Ferdiansyah") {
        //     setRole("Frontend Developer");
        // } else {
        //     setRole("Backend Developer");
        // }
    }



    useEffect(() => {
        axios
            .get('https://247a-2001-448a-302c-326a-2877-5dd-a42e-aa1.ngrok.io/api/absen/')
            .then((response) => {
                setAbsen(response?.data.results);
            })
    }, []);

    return (

        <div className="App">
            <Header />
            <div className="absensi">
                <div className="list">
                    {absen?.map((absen, index) => {
                        var role;
                        if (absen.nama === "Rifky Muhammad Prayudhi") {
                            role = "Fullstack Developer";
                        } else if (absen.nama === "Ferdiansyah") {
                            role = "Frontend Developer";
                        } else {
                            role = "Backend Developer";
                        }

                        return (
                            <div className="list-item" key={index}>
                                <div className="about">
                                    <div className="name">
                                        {absen.nama}
                                    </div>
                                    <div className="job">
                                        {role}
                                    </div>
                                </div>
                                <div className="time">
                                    <div className="masuk">
                                        {absen.masuk}
                                    </div>
                                    <div className="keluar">
                                        {absen.keluar}
                                    </div>
                                </div>
                                <div className="tanggal">
                                    {absen.tanggal}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="input">

                    <label>Tanggal :</label>
                    <input type="date" onChange={(e) => setTanggal(e.target.value)} />

                    <label>Jam Masuk :</label>
                    <input type="time" onChange={(e) => setMasuk(e.target.value)} />

                    <label>Jam Keluar :</label>
                    <input type="time" onChange={(e) => setKeluar(e.target.value)} />

                    <div className="inputname">
                        <label htmlFor="rifky">
                            <input value={"Rifky Muhammad Prayudhi"} name="name" id="rifky" type="radio" onChange={(e) => setName(e.target.value)} />
                            Rifky
                        </label>
                        <label htmlFor="ferdi">
                            <input value={"Ferdiansyah"} name="name" id="ferdi" type="radio" onChange={(e) => setName(e.target.value)} />
                            Ferdi
                        </label>
                        <label htmlFor="ivan">
                            <input value={"Ivan Christian"} name="name" id="ivan" type="radio" onChange={(e) => setName(e.target.value)} />
                            Ivan
                        </label>
                        <label htmlFor="onya">
                            <input value={"Onya Levana"} name="name" id="onya" type="radio" onChange={(e) => setName(e.target.value)} />
                            Onya
                        </label>
                        <label htmlFor="isa">
                            <input value={"Isa Anite"} name="name" id="isa" type="radio" onChange={(e) => setName(e.target.value)} />
                            Isa
                        </label>

                        <br />

                        <button onClick={postData}>Kirim</button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>

    )
}
