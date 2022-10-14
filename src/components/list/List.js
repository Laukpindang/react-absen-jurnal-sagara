import React from "react";

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group">
      {
        data.map((jurnal) => {
          return (
            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Tanggal : {jurnal.tanggal}</h5>
                <div className="btn-group">
                  <button onClick={() => handleEdit(jurnal.id)} className="btn btn-sm btn-warning">Edit</button>
                  <button onClick={() => handleDelete(jurnal.id)} className="btn btn-sm btn-danger">Del</button>
                </div>
              </div>
              <p className="mb-1">{jurnal.kegiatan}</p>
            </div>
          )
        })
      }
    </div>
  );
}