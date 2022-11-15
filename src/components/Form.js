import { useEffect, useState } from "react"

const Form = () => {

    const [text, setText] = useState(null)
    const [description, setDescription] = useState(null)
    const [print,setPrint] = useState(false)

    const handelOnchange = (event) =>{
            let text = event.target.value
            setText(text)
            setPrint(false)
    }

    const handelDesChange = (event) => {
        let description = event.target.value
        setDescription(description)
        setPrint(false)
    }
    return(
        <>
        <div>
            {    
            print?
            <h4>{text} 
                <br/>
            {description}</h4> 
            :null        
            }
        </div>

        <form type='submit'>
            <p>First Name</p>
                <input onChange={handelOnchange} type="text" className="showcaseName"/>
            <p>Description</p>
                <input onChange={handelDesChange} className="secondInput"/>
                <button 
                onClick={(e) =>{
                e.preventDefault()
                setPrint(true)
                }
                } type='submit'>
                Submit</button>
            </form>
            <div>
           </div>
        </>
    )

}

export default Form