// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/ramprasaath-m/"
        target="_blank"
        title="Ramprasaath's Linkedin Profile"
      >
        Chetan Nada
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href=""
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
