import React from 'react'
import Navbar from './Navbar'

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <p></p>
                       

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-8">
                                    <div class="row g-12">
                                        <div class="col-md-7">
                                            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/workplace_1-sixteen_nine.jpg?size=948:533" class="img-fluid rounded-start" alt="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/workplace_1-sixteen_nine.jpg?size=948:533" />
                                        </div>
                                        <div class="col-md-4">
                                            <label htmlFor="" className="form-label"><b>Username</b></label>
                                            <input type="text" className="form-control" />
                                            <label htmlFor="" className="form-label"><b>Password</b></label>
                                            <input type="password" className="form-control" />
                                            <label htmlFor="" className="form-label"><b>Employee Name</b></label>
                                            <input type="text" className="form-control" />
                                            <label htmlFor="" className="form-label"><b>ID</b></label>
                                            <input type="number" className="form-control" />
                                            <div class="row g-3">
                                                <div class="col-md-12">
                                                    <p></p>
                                                    <center><button className="btn btn-primary">Log In</button></center>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login