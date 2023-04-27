import { Layout } from "@/components";
import React from "react";

const Contact = () => {
  const inputStyle = ` w-full pl-2 col-span-1 py-1 scroll-pb-0.5 mb-3 bg-gray-500 rounded-md`
  return <Layout>
    <>
    <section className="Map ">
      <iframe src="" frameborder="0"></iframe>
    </section>

      <section className="wrap flex justify-center items-center">
        <div className="w-1/2 pt-4 pl-16 ml-10 ">
          <h2 className="font-bold">Address</h2>
          <p>
            Government College Of Engineering
            And Research
            <br />
            <p>Avasari Khurd Pune</p> 
            <p>412405</p>
            <p>Maharashtra India</p>
             
          </p>
          <h3 className="text-bold mt-5 ">Contact Us</h3>
          <p>Email :  <a href="mailto: sahyadriformularacers@gmail.com"> sahyadriformularacers@gmail.com</a> </p>
          <p>Phone No :  <a href="#"> +91 8329332765</a> </p>
         
        </div>
        <div  className=" mr-9 w-2/3 ">
            <form className=" ml-4 mt-5  " action="">
                   <label htmlFor="name">Name</label><input className={inputStyle} type="text " id="name" placeholder="Enter Your name" /><br />
                  <label htmlFor="subject">Subject</label>  <input className={inputStyle} type="text " id="subject" placeholder="Subject" /><br />
                    <label htmlFor="email">Email</label><input className={inputStyle} id="emial" type="text " placeholder="ak@gmail.com" /><br />
                    <label htmlFor="message">Your Message</label><textarea className={inputStyle} id="message" name="message" placeholder="Enter your message"/>
                    <button className="py-2 px-3 rounded bg-gray-500 text-gray-50" type="submit" >Submit</button>
            </form>
        </div>
      </section>
    
    </>
  </Layout>;
};

export default Contact;
