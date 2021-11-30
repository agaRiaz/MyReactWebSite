import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        name:"",
        phone:"",
        email:"",
        msg:""
    });

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preval) => {
            return {
                ...preval,
                [name]:value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`thank you ${data.name}`);

    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="Text" class="form-control" id="exampleInputEmail1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter Your Name" />

                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                                <input type="phone" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email"name="email" value={data.email} onChange={InputEvent} class="form-control" id="exampleFormControlInput1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="form-floating mb-2">
                                <textarea class="form-control" name="msg" value={data.msg} onChange={InputEvent} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input"name="check"  id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact;