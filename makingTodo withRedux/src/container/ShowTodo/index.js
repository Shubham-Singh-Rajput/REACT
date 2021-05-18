import { useSelector } from "react-redux"


const ShowTodo=()=>{
    const allItems=useSelector(({showTodo})=>showTodo)
    return(
    <>
      {
          allItems.map((todo,i)=>{
              return (
              <div style={{margin:"15px"}} key={i}>
                         <div className="card text-center">
                        <div className="card-header">
                            TODO NO {i+1}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{todo}</h5>
                        </div>
                        </div>
              </div>
              )
          })
      }
 
    </>
    )
}
export default ShowTodo