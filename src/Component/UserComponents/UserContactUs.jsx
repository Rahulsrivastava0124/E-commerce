import React from "react";
import ContactUsImg from "../../Svg/images/ContactUs.jpg";
const ContactUs = () => {
  return (
    <>
 
      <h1 className="text-center">Contact Us</h1>
      <div className="ContactUs container">
        <div className="d-flex flax-wrap align-items-center justify-contect-center mx-5 border rounded-5">
          <img
            src={ContactUsImg}
            alt="Contact us Image"
            className="rounded-5"
            style={{ width: "450px" }}
          />
          <div
            className=" px-5 m-0 bg-body-secondary container rounded-end-5"
            style={{
              Width: "700px",
              paddingTop: "110px",
              paddingBottom: "110px",
            }}
          >
            <form className="row">
              <div className="mb-3 col-md-6">
                <label for="UserFirstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="UserFirstName"
                  placeholder="Rahul "
                />
              </div>
              <div class=" mb-3 col-md-6">
                <label for="UserLastName">Last Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="UserLastName"
                  placeholder="Srivastva"
                />
              </div>
              <div class=" mb-3">
                <label for="floatingInput">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class=" mb-3">
                <label for="floatingPhone">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="floatingPhone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="">
                <label for="floatingTextarea2">Comments</label>
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px}" }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3 col-3 m-auto">Submit</button>
            </form>
          </div>
        </div>
 
      </div>
    </>
  );
};

export default ContactUs;
