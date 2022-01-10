import React, {useState } from 'react'
import './form.css';

const Form = () => {

    const [content, setContent] = useState(true);
    const [state, setstate] = useState(
        {
          name : "",
          department : "",
          rating : ""
        }
    )

    const [myState, setmyState] = useState([]);

    const handleChange = (event) => {
      setstate({...state, [event.target.name] : event.target.value})
    }

    const dataSubmitted = (e) => {
      e.preventDefault();
      setmyState([...myState, {...state}]);
      setContent(false)
    }
    
    return(
      <div className='my-parent'>
        {
          content ?
        <>
    
        <h1 className='my-tag'>Employee Feedback Form</h1>
            <form onSubmit={dataSubmitted}>
                
                <label name="name" className='my-de'>Name : </label>
                <input required="Please Enter your name" className="button" type="text" name="name" value={state.name} onChange={handleChange} placeholder='Enter your Name'/><br/><br/>
                
                
                <label name="department" className='my-de'>Department : </label>
                <input required="Please Enter your department"className="button" type="text" name="department" value={state.department} onChange={handleChange} placeholder='Enter Your Department'/><br/><br/>
            
   
                <label name="rating" className='my-de'>Rating : </label>
                <input required="Please Enter your rating"className="button" type="number" name="rating" value={state.rating} onChange={handleChange} placeholder='Enter Your Rating'/><br/><br/>
                
           
                <input className="sub" type="submit"/>               

            </form>
            
            </> :

            <> 
            <h1 className="my-tag">Employee Feedback Form</h1>
            <div className='my-details'>{        
                    myState.map((value)=>{
                        return(
                            <div className="fullDetails">Name : {value.name} || Department : {value.department} || Rating : {value.rating}</div>
                        )                 
                    })
                }   
            </div>
            <button className='last' onClick={ ()=> setContent(true) }>GO BACK</button>
            </>
        }
        </div>
      )
    
} 

export default Form

