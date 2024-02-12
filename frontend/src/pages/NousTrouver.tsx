import './NousTrouver.css';
import { Navigation, NavbarProps } from '../components/Navbar';
import LogoContainer from '../components/Logos';
import '../components/MentionsLegales';
import FooterContainer from '../components/MentionsLegales';

const NousTrouver: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="NousTrouver.css" />
        <title>Nous Trouver</title>
      </head>
      <body>
        <Container activeTab={activeTab} onTabChange={onTabChange}/>
        <MapSection />
        <ContactSection />
        <LogoContainer />
        <FooterContainer />
      </body>
    </html>
  );
};


const Container: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
	return (
	  <div className="container">
		  <Navigation activeTab={activeTab} onTabChange={onTabChange}/>
	  </div>
	);
  };

const MapSection: React.FC = () => {
  return (
    <section className="map-section">
      <TextSection />
      <ImageSection />
    </section>
  );
};

const TextSection: React.FC = () => {
  return (
    <div className="text-section">
      <h2>Accès</h2>
      <p>13 rue Jean Mermoz</p>
      <p>74940 Annecy-le-Vieux, FRANCE</p>
    </div>
  );
};

const ImageSection: React.FC = () => {
  return (
    <div className="image-section"></div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="form-section">
      {/* <ContactForm /> */}
      <ServicesSection />
    </section>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div className="contact-section">
      <h2>NOUS CONTACTER</h2>
      <p>Tél: +33 (0)4 50 23 07 90</p>
      <h3>SERVICES</h3>
      <p>Mardi      soir</p>
      <p>Mercredi   midi & soir</p>
      <p>Jeudi      midi & soir</p>
      <p>Vendredi   midi & soir</p>
      <p>Samedi     midi & soir</p>
      <p>Dimanche   midi</p>
    </div>
  );
};

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData: any) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log(formData);
//     try {
//       await axios.post('http://localhost:3002/envoyer-email', formData);
//       alert('E-mail envoyé avec succès.');
//     } catch (error) {
//       alert('Erreur lors de l\'envoi de l\'e-mail.');
//     }
//   };

//   return (
//     <div className="form-text-section">
//       <p>Les champs obligatoires sont marqués d'un astérique</p>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', marginTop: '20px'  }}>
//         <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
//           <div style={{ marginRight: '10px' }}>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Nom *"
//               required
//             />
//           </div>
//           <div style={{ marginRight: '10px' }}>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Prénom *"
//               required
//             />
//           </div>
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
//         <div style={{ marginRight: '10px' }}>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Téléphone *"
//               required
//             />
//           </div>
//           <div style={{ marginRight: '10px' }}>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="E-mail *"
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Votre message *"
//             required
//             style={{ width: '100%', minHeight: '150px' }}
//           />
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           <button type="submit">Nous Contacter</button>
//         </div>
//       </form>
//     </div>
//   );
// };

export default NousTrouver;
