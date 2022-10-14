import React, { useState, useEffect } from 'react';
import List from "../list/List";
import { uid } from "uid";
import axios from "axios";
import ButtonNav from '../header/button-navigasi/button-nav';
import './Jurnal.css'

const Jurnal = () => {

    const [jurnal, setJurnal] = useState([]);

    const [isUpdate, setIsUpdate] = useState({
        id: null,
        status: false
    })

    const [formData, setFormData] = useState({
        tanggal: '',
        isi: '',
    })

    useEffect(() => {
        axios.get('http://localhost:3000/jurnal').then((res) => {
            setJurnal(res?.data ?? [])
        })
    }, [])

    function handleChange(e) {
        let data = { ...formData };
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    function handleSubmit(e) {
        e.preventDefault()
        let data = [...jurnal]
        if (formData.tanggal === "") {
            alert('mohon isi tanggalnya')
            return false
        }
        if (formData.isi === "") {
            alert('mohon isi jurnalnya')
            return false
        }

        if (isUpdate.status) {
            data.forEach((jurnal) => {
                if (jurnal.id === isUpdate.id) {
                    jurnal.tanggal = formData.tanggal;
                    jurnal.isi = formData.isi;
                }
            });

            axios.put(`http://localhost:3000/jurnal/${isUpdate.id}`, {
                tanggal: formData.tanggal, isi: formData.isi
            }).then(res => {
                alert('berhasil mengedit data')
            })
        } else {
            let newData = { id: uid(), tanggal: formData.tanggal, isi: formData.isi }
            data.push(newData)
            axios.post('http://localhost:3000/jurnal/', newData).then(res => {
                alert('berhasil menyimpan data')
            })
        }

        setJurnal(data);
        setIsUpdate({ id: null, status: false })
        setFormData({ tanggal: '', isi: '' })
    }

    function handleEdit(id) {
        let data = [...jurnal]
        let foundData = data.find((jurnal) => jurnal.id === id)
        setFormData({ tanggal: foundData.tanggal, isi: foundData.isi })
        setIsUpdate({ id: id, status: true })
    }

    function handleDelete(id) {
        console.log(id);
        let data = [...jurnal]
        let filteredData = data.filter(jurnal => jurnal.id !== id)
        axios.delete(`http://localhost:3000/jurnal/${id}`).then(res => {
            alert('berhasil menghapus data')
        })
        setJurnal(filteredData)
    }

    return (
        <div className="Jurnal">
            <nav className='navbar sticky-top navbar-light bg-light'>
                <h3>AbsenJurnalSagara</h3>
                <ButtonNav />
            </nav>
            <h1 className="px-3 py-3"><center>Journal List</center></h1>
            <form onSubmit={handleSubmit} className="px-3 py-4">
                <div className="form-group">
                    <label htmlFor="">Tanggal</label>
                    <input
                        type="date"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.tanggal}
                        name="tanggal"
                        rows="1"
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Isi Jurnal</label>
                    <textarea
                        className="form-control"
                        onChange={handleChange}
                        value={formData.isi}
                        name="isi"
                        rows="3"
                    />
                </div>
                <div className='sub-btn'>
                    <button type="submit" className="btn btn-outline-dark w-100 mt-3">
                        Save
                    </button>
                </div>
            </form>

            <List handleDelete={handleDelete} handleEdit={handleEdit} data={jurnal} />
        </div>
    );
}

export default Jurnal;