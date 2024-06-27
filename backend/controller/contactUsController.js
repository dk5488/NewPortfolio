const transporter=require('../nodeMailerconfig');

const sendEmail=async (req,res)=>{
    const{name,email,query}=req.body;

    try {
        let emailOptions={
            from:process.env.EMAIL_USER,
            to:process.env.EMAIL_USER,
            subject:"New Contact Us form submitted",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${query}`,
        }

        await transporter.sendMail(emailOptions);
        res.status(200).send("Message mailed successfully")
    } catch (error) {
        console.log("Message was not sent--backend error",error);
        res.status(500).send("Error in sending message");
    }
}

module.exports =sendEmail;