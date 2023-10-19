import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContactPerson from "./ContactPerson"
import b1 from "../Images/people/1.png"
import b2 from "../Images/people/2.png"
import b3 from "../Images/people/3.png"

function ContactUs() {
    return (
        <div className="mt-16 mx-5">
            <div className="container border border-2 grid py-10 grid-cols-1 lg:grid-cols-3 gap-10 ">
            <div className="lg:col-span-2">
                    <p className="my-3">LEAVE A MESSAGE</p>
                    <p className="text-2xl font-bold tracking-widest">We love to hear from you</p>
                  <div className="flex flex-col gap-5 my-5">
                    <TextField id="demo-helper-text-misaligned-no-helper" label="Your Name" />
                        <TextField id="demo-helper-text-misaligned-no-helper" label="E-mail" />
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Subjuct" />
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Your Message"
                            variant="filled"
                        />
                     <Button variant="contained" size="medium">Submit</Button>
                  </div>
                </div>
                <div className="py-8 pl-8">
                <ContactPerson img={b1} title="John Doe" dis="Senior Marketing Manager" phone="Phone: + 000 123 000 77 88" email="Email: contact@example.com"/>
                <ContactPerson img={b2} title="William Smith" dis="Senior Marketing Manager" phone="Phone: + 000 123 000 77 88" email="Email: contact@example.com"/>
                <ContactPerson img={b3} title="Emma Stone" dis="Senior Marketing Manager" phone="Phone: + 000 123 000 77 88" email="Email: contact@example.com"/>
                </div>
           </div>
        </div>

    )
}

export default ContactUs
