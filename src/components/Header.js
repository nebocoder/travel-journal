import globeIcon from '../images/globe-icon.png';

export default function Header() {
  return (
    <header>
      <img className="header--logo" src={globeIcon} />
      <h3 className="header--text">my travel journal.</h3>
    </header>
  );
}
