import data from "./footer-data";

const Footer = () => (
  <footer>
    <div>
      <a href="../BorisKirov_Resume.pdf" rel="noopener noreferrer">
        <small>Get Resume 2021 © </small>
      </a>
      <a href="../boris.json" rel="noopener noreferrer">
        <small>JSON card</small>
      </a>
    </div>
    <div>
      <ul className="footerList">
        {data.map((footer) => (
          <li className="footerLi" key={footer.name}>
            <a rel="noopener noreferrer" href={footer.url} target="_blank">
              <small>{footer.name}</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
