import { useState } from "react";

const RestrurantSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [restrurant, setRestrurant] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contactno, setContactno] = useState("");

    const handleSignup = async () => {
        console.log(email, password, cpassword, restrurant, city, address, contactno);

        let result = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({ email, password, cpassword, restrurant, city, address, contactno })
        })
        result = await result.json();
        console.log(result);

        if(result.success) {
            alert("Restaurant Register Successfully!");
        }
    }
    
    return (
        <>
            <h1>Restrurant Signup Page</h1>
            <div className="container">
                <div className="row">
                    <div className="col-25">
                        <label className="label" >Email Id</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input-wappers" id="email" name="emailid"
                            onChange={(event) => { setEmail(event.target.value) }} placeholder="Enter Email Id Here.."
                            value={email}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="label" >Password</label>
                    </div>
                    <div className="col-75">
                        <input type="password" className="input-wappers"
                            onChange={(event) => { setPassword(event.target.value) }} value={password} id="lname"
                            name="password" placeholder="Enter Password Here" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="label" >Confirm Password</label>
                    </div>
                    <div className="col-75">
                        <input type="password" className="input-wappers"
                            onChange={(event) => { setCpassword(event.target.value) }} value={cpassword}
                            id="lname" name="password" placeholder="Enter Confirm Password Here" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="label" >Restrurant Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input-wappers"
                            onChange={(event) => { setRestrurant(event.target.value) }} value={restrurant}
                            id="lname" name="password" placeholder="Enter Restrurant Name Here" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="label" >City</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input-wappers"
                            onChange={(event) => { setCity(event.target.value) }} value={city}
                            id="lname" name="password" placeholder="Enter City Here" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="label" >Address</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input-wappers"
                            onChange={(event) => { setAddress(event.target.value) }} value={address}
                            id="lname" name="password" placeholder="Enter Full Address Here" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label className="label" >Contact No</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input-wappers"
                            onChange={(event) => { setContactno(event.target.value) }} value={contactno}
                            id="lname" name="password" placeholder="Enter Contact Number Here" />
                    </div>
                </div>

                <br />
                <div className="row">
                    <button className="inputbutton" type="submit" onClick={handleSignup}>Sign Up</button>
                    {/* <input className="inputbutton" type="submit" value="Sign Up" /> */}
                </div>

            </div>
        </>
    )
}

export default RestrurantSignup;