import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar.js"
import TopContent from './components/TopContent.js';
import Card from './components/Card.js'
import testData from './testData.js'

function App() {
  const testCards = testData.map(data => {
    return <Card 
      state={data.id} 
      img={data.coverImg} 
      price={data.price} 
      rating={data.stats.rating.toFixed(1)} 
      reviewCount={data.stats.reviewCount} 
      country={data.location}
      title={data.title}
      />
  })
  return (
    <div className="App">
      <NavBar />
      <TopContent />
      <section className='cards-list'>
        {testCards}
      </section>
    </div>
  );
}

export default App;
