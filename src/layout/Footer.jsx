import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between items-center">
      <p className="py-4 text-xl">
        Made With <span className="text-violet-500">💜</span>By{" "}
        <span className="text-violet-500">Mohammad Faramarzi</span>
      </p>
      <Link to="https://github.com/mohammadfaramarzi1/" className="text-3xl">
        <FaGithubSquare />
      </Link>
    </div>
  );
}

export default Footer;
