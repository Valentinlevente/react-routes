import React from 'react'

const Form = () => {

    const send = () =>{
        const email = document.getElementById("email").value;
        const text = document.getElementById("text").innerHTML;
        if(email.length !== 0 && text.length !== 0){
            alert("Köszönjük")
        }
    }

  return (
    <div className="formContainer">
        <form>
            <p>
                <label>
                    Email:<br />
                    <input name="email" type="text" id="email" required/>
                </label>
            </p>
            <p>
                <textarea rows={6} id="text" required>

                </textarea>
            </p>
            <p>
                <input type="submit" value="OK" id="submit" onClick={()=> send()}/>
            </p> 
        </form>
    </div>
  )
}

export default Form