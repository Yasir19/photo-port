import React from "react";
function ContactForm() {
    <section>
        <h1>
            Contact Me
        </h1>
        <from id='contact-form'>
            <div>
                <lable htmlFor="name">Name:</lable>
                <input type ="text" name='name'/>
            </div>
            <div>
                <lable htmlFor="email">Email address:</lable>
                <input type="email" name="email"/>
            </div>
            <div>
            <lable htmlFor="message">Message</lable>
            <textarea name='message' rows='5' />
            </div>
            <button type ='submit'>Submit</button>
        </from>
    </section>


}
export default ContactForm