import locationIcon from '../images/location-icon.png';

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://source.unsplash.com/WLxQvbMyfas"
        className="card--image"
      />
      <div className="card--info">
        <img src={locationIcon} className="card--icon" />
        <span className="card--country">Japan</span>
        <span>
          <a href="#" className="card--link">
            View on Google Maps
          </a>
        </span>
        <h1 className="card--title">Mount Fuji</h1>
        <p className="card--dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="card--text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
