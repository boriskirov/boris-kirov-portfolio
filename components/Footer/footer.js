import data from "./footer-data";

const Footer = () => (
  <footer>
    <div>
      <ul className="footerList">
        <li className="footerLi">
          {" "}
          <a href="../BorisKirov_Resume.pdf" rel="noopener noreferrer">
            <small>Resume 2021 © </small>
          </a>
        </li>
        <li className="footerLi">
          {" "}
          <a href="../boris.json" rel="noopener noreferrer">
            <small>JSON me</small>
          </a>
        </li>
      </ul>
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
