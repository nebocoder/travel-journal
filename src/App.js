import Header from './components/Header';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="container">
      <Header />
      <div className="cards">{cards}</div>
    </div>
  );
}
