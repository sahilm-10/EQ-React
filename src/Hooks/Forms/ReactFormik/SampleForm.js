import React from "react";
import {useFormik} from 'formik'


function SampleForm(){
// useFormik returns object which contains usefull properties and methods which we can use in our form
    const formik = useFormik({
        initialValues:{
            uname:'',
            email:'',
            pass:''
        },
        // auto receives values as its args
        onSubmit : values =>{
            console.log("Form Data:",formik.values);
        },
        // 3 step for validation is validate fn
        validate : values =>{
            // 1. always should return an obj
            //  2. errors.values = values.values
            // 3. should specify a string indicating what should be returned incase of error!
            let errors = {}

            if(!values.uname){
                errors.uname = 'Required Username'
            }
            if(!values.email){
                errors.email = 'Required Email'
            }
            if(!values.pass){
                errors.pass = 'Required Password'
            }
            return errors;
        }
        
    });

    console.log('Values:',formik.errors);
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h1>Form</h1>
                <div className="form-control" style={{marginBottom:"20px"}}>
                <label>Username</label>
                <input type='text' id="uname" name="uname" onChange={formik.handleChange} value={formik.values.uname}/>
                {formik.errors.uname ? (<div className="form-error" style={{color:"red"}}>{formik.errors.uname}</div>):null}
                <br></br>
                
                <label>Email</label>
                <input type='email' id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? (<div className="form-error" style={{color:"red"}}>{formik.errors.email}</div>):(null)}
                <br></br>
                
                <label>Password</label>
                <input type='text' id="pass" name="pass" onChange={formik.handleChange} value={formik.values.pass}/>
                {formik.errors.pass ? (<div className="form-error" style={{color:"red"}}>{formik.errors.pass}</div>):(null)}
                <button type="text">Submit</button>
                </div>
                </form>

        </div>
    )
}
export default SampleForm;