import React, { useState} from 'react'
import ChildComponent from './ChildComponent'

export default function Component1() {
    let initailState = "Welcome user, generate and enter your onetime password to access the page"
    const [message, setMessage] = useState(initailState)
    let X = 0
    let generateOTP = () => {
        var OTP = Math.round(Math.random() * 899999) + 100000
        alert(`Your OPT is ${OTP}`)
        document.getElementById("myInput").focus()
        document.getElementById("myInput").innerHTML=""
        return X = OTP
    }
    let VerifyFunc = () => {
        let val = document.getElementById("myInput").value
        let Y = X.toString()
        if (val === Y) {
            document.getElementById("container").hidden = false
            document.getElementById("box").hidden=true
            setMessage("Access granted")
        } else {
            document.getElementById("box").hidden= true
            setMessage(`It seems like you entered a wrong OTP,wait for a short interval and try again `)
            setTimeout(()=>{
            document.getElementById("box").hidden=false
            X=" "
            document.getElementById("myInput").innerHTML=""
            setMessage(initailState)
          },10000)
        }
    }
    return (
        <div>
            <h4>{message}</h4><div id="box">
                <input type="text" id="myInput" />
                <br /><br /><button className="btn-primary my-3 mx-3" id="gen-btn" onClick={generateOTP}>Generate OTP</button>
                <button className="btn-success my-3 mx-3" id="verify-btn" onClick={VerifyFunc}>Verify OTP</button>
            </div>
            <div id="container" hidden >
                <ChildComponent />
            </div>
        </div>
    )
}
