import "./user.css"
let Alluser =(props)=>{
           
        return (
                props.allUser.map((user,i)=>{
                    return(
                    <div className="allUser" key={i} onClick={()=>{props.clickHandler(user.id)}}>
                        <div className="Title">{user.title}</div>
                    </div>
                    )
                })
        )
       
    }
export default Alluser