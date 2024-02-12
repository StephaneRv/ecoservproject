const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/envoyer-email', (req, res) => {
  const { firstName, lastName, phone,  email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ellie.bins23@ethereal.email',
      pass: 'Hf4MHMWqqDVGX3Ce9h',
    },
  });

  const mailOptions = {
    from: 'no-replyEcoConcept@gmail.com',
    to: email,
    subject: 'Confirmation de votre message',
    text: `Merci ${firstName} ${lastName} pour votre message. Nous avons bien reçu votre demande : "${message}"`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.status(200).send('E-mail de confirmation envoyé avec succès.');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
