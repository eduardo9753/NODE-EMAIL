const nodeMailer = require('nodemailer');
const Persona = require('../models/Persona');

const emailController = {};


emailController.email = (req, res) => {
    res.render('index.html');
}

emailController.emailAdd = async (req, res) => {
    console.log('DATA EMAIL ', req.body);

    const persona = new Persona();
    persona.SetName = req.body.name;
    persona.SetEmail = req.body.email;
    persona.SetPhone = req.body.phone;
    persona.SetMessage = req.body.message;

    const contentHTML = `
    <div class='card'>
      <div class="card-body">
        <div class="lead">
           <p>Name     : ${persona.GetName}</p>
           <p>Email    : ${persona.GetEmail}</p>
           <p>Numero Telefonico : ${persona.GetPhone}</p>
           <p>Mensaje  : ${persona.GetMessage}</p>
        </div>
      </div>
    </div>
   `
    console.log('contenido: ', contentHTML);

    //A DONDE SE VA ENVIAR 
    const transporter = nodeMailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        secure: false,
        auth: {
            user: 'de2dbd2a2ee65f',
            pass: '16f0ae8ce9a374'
        }
    });

    //LOS DATOS DE LA COMPAÑIA PARA EL USUARIO
    const mailOptions = {
        from: "'Anthony Eduardo' <anthony.anec@gmail.com>", //compañia 
        to: persona.GetEmail,                             // a alguien que dio su correo
        subject: 'Companny Anthony SA',                     //some Description
        html: contentHTML
    };

    const info = await transporter.sendMail(mailOptions);
    if (info.messageId) {
        console.log('ID INFO: ', info.messageId);
        res.redirect('/');
    } else {
        console.log('ERROR');
        res.redirect('/');
    }
}

module.exports = emailController;