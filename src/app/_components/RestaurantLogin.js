const RestrurantLogin = () => {
    return (

        <>
            Restrurant Login Page
            <div className="container">
                
                    <div className="row">
                        <div className="col-25">
                            <label className="label" >Email Id</label>
                        </div>
                        <div className="col-75">
                            <input type="text" className="input-wappers" id="email" name="emailid" placeholder="Enter Email Id Here.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label" >Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" className="input-wappers" id="lname" name="password" placeholder="Enter Password Here" />
                        </div>
                    </div>
                 
                    <br />
                    <div className="row">
                        <input className="inputbutton" type="submit" value="Submit" />
                    </div>
               
            </div>
        </>
    )
}

export default RestrurantLogin;