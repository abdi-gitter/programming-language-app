import { Container, Image } from 'react-bootstrap';
import lanLogo from '../assets/lan-logo.png'; // Make sure the path is correct

const Header = () => {
  return (
    <Container className="text-center">
      {/* Image component from React Bootstrap for displaying the logo */}
      <Image src={lanLogo} width="400px" roundedCircle fluid />
      {/* Heading with Bootstrap classes for styling */}
      <h1 className='my-2 font-monospace display-7 fw-bold'>
        <span style={{ color: '#E63946' }}>Computer</span>{' '}
        <span style={{ color: '#F1FA' }}>Programming</span>{' '}
        <span style={{ color: '#dd1' }}>Languages</span>
      </h1>
    </Container>
  );
};

export default Header;
