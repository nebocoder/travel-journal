import locationIcon from '../images/location-icon.png';

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card--image" />
      <div className="card--info">
        <img src={locationIcon} className="card--icon" />
        <span className="card--location">{props.location}</span>
        <span>
          <a
            href={`${props.googleMapsUrl}`}
            target="_blank"
            className="card--link"
          >
            View on Google Maps
          </a>
        </span>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
