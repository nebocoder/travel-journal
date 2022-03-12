import locationIcon from '../images/location-icon.png';

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card--image" />
      <div className="card--info">
        <img src={locationIcon} className="card--icon" />
        <span className="card--location">{props.item.location}</span>
        <span>
          <a
            href={`${props.item.googleMapsUrl}`}
            target="_blank"
            className="card--link"
          >
            View on Google Maps
          </a>
        </span>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}
