import './App.css'; // Global styles for your app
import CardContainer from './components/CardContainer'; // Component for displaying language cards
import Header from './components/Header'; // Header component with logo and title
import Search from './components/Search'; // Search component (functionality might need to be implemented)
import { Container } from 'react-bootstrap'; // Bootstrap container for layout
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap's global styles
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  return (
    <Container className='text-center mt-4'>
      <Header/>
      <Search search={search} setSearch={setSearch} />
      <h1 className='my-2 font-monospace display-7 fw-bold'><span style={{ color: '#E63946' }}>Languages</span>{' '}</h1>
      <CardContainer search={search} />
      
    </Container>
  );
}

export default App;
