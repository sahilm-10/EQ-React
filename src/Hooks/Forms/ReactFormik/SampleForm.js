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
        onSubmit : values =>{
            console.log("Form Data:",formik.values);
        }
    });

    // console.log('Values:',formik.values);
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h1>Form</h1>
                <label>Username</label>
                <input type='text' id="uname" name="uname" onChange={formik.handleChange} value={formik.values.uname}/>
                <br></br>
                <label>Email</label>
                <input type='email' id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                <br></br>
                <label>Password</label>
                <input type='text' id="pass" name="pass" onChange={formik.handleChange} value={formik.values.pass}/>
                <button type="text">Submit</button>
                </form>
        </div>
    )
}
export default SampleForm;