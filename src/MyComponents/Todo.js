import React from 'react'

export const Todo = ({todoa, onDelete}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
        <div className="card border-success mb-3">
          <div className="card-header">
            {todoa.sno}
          </div>
          <div className="card-body">
            <h5 className="card-title">{todoa.title}</h5>
            <p className="card-text">{todoa.desc}</p>
            <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Completed the task" onClick={()=>{onDelete(todoa)}}>Done</button>
          </div>
        </div>
    </div>  
    </div>
  )
}
