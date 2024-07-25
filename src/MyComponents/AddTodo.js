import React , {useState} from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=> {
            e.preventDefault();
            if(!title || !desc){
                alert("Title or description cannot be blank")
            }
            else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
            }
    }
  return (
    <div className='container my-3'>
        <h3>Add a task</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Task name</label>
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" aria-describedby="emailHelp"/>
               <div id="emailHelp" className="form-text">We'll never share your todo-list with anyone else.</div>
            </div>
            <div className="mb-1">
                <label htmlFor="exampleInputPassword1" className="Form-label">Task description</label>
                <input value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control"/>
            </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
        </form>
    </div>
  )
}
