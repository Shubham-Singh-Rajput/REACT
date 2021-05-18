import { useDispatch, useSelector } from "react-redux"
import inputChange from "../../redux/action/addInput"
import showTodo from "../../redux/action/showtodo"
import clearInput from "../../redux/action/clearInput"
import {useState} from "react"



const WriteTodo=()=>{
    const [err,setError]=useState('')
    const inputValue=useSelector(({inputTODO})=>(inputTODO))
    const dispatch=useDispatch()



    const FillInput=(e)=>{
            dispatch(inputChange(e.target.value))
            setError((s)=>"")
    }


    const submit=(e)=>{
        if(inputValue.trim().length>0){
        dispatch(showTodo(inputValue))
        dispatch(clearInput)
        setError((s)=>"Todo Is added")
        
        }else{
            setError((s)=>{
                return "enter the data"
            })
        }
        e.preventDefault()
    }
    return (
        <>
            <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Enter The Data</label>
                    <input type="text" onChange={FillInput} className="form-control" id="todo" value={inputValue} />
                </div>
                <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                </form>
                <div style={{color:"red",textAlign:"center"}}>{err}</div>
            </div>
        </>
    )
}
export default WriteTodo
