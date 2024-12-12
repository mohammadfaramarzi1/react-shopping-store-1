import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between items-center px-12 border-t pt-2 mt-12">
      <p className="py-4 text-xl">
        Made With <span className="text-violet-500">💜</span>By{" "}
        <span className="text-violet-500">Mohammad Faramarzi</span>
      </p>
      <Link to="https://github.com/mohammadfaramarzi1/" className="text-4xl">
        <FaGithubSquare />
      </Link>
    </div>
  );
}

export default Footer;
