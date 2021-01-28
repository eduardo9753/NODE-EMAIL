const nodeMailer = require('nodemailer');
class Email{
    contentHTML;
    mailOptions;
    transporter;
    recipiente ;

    HTML = (Persona) => {
     console.log('HTML PERSONA TEXT: ' , Persona);
      this.contentHTML =  `
      <></>
      <div>
        <p>Name     : ${Persona.name}</p>
        <p>Email    : ${Persona.email}</p>
        <p>Numero Telefonico : ${Persona.phone}</p>
        <p>Mensaje  : ${Persona.message}</p>
      </div>
      `
      console.log('contenido Clase: ' , this.contentHTML);
      return this.contentHTML;
    }
   

    //A DONDE SE VA ENVIAR 
    Transporter = () => {
        this.transporter = nodeMailer.createTransport({
             host : 'smtp.mailtrap.io',
             port :  2525,
             secure : false, 
             auth : {
                  user : 'de2dbd2a2ee65f',
                  pass : '16f0ae8ce9a374'
             }
        });
        return this.transporter;
   }
   

   //LOS DATOS DE LA COMPAÑIA PARA EL USUARIO
   MailOptions = (Persona) => {
    this.mailOptions = { 
        from : "'Anthony Eduardo' <anthony.anec@gmail.com>", //compañia 
        to   : Persona.email,                                // a alguien que dio su correo
        subject : 'Companny Anthony SA',                     //some Description
        html : this.HTML(Persona)                      
    };
    console.log('EMAIL RECIPEST: ', Persona.email);
    console.log('mailOption: ' , this.mailOptions);
    return this.mailOptions;
   }
  

    getInfo = async () => {
    const info = await this.Transporter().sendMail(this.MailOptions());
    return info;
   }
}

module.exports = Email;
