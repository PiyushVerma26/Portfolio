import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="mt-5 flex flex-row gap-3 mb-10">
      <Link to="https://chat.openai.com/c/aa80adf2-42dd-43bf-b5dc-a28e72b61bc8">
        <BiLogoLinkedinSquare className="text-3xl text-white" />
      </Link>
      <Link to="https://www.facebook.com/profile.php?id=100009243661985">
        <FaFacebookSquare className="text-3xl text-white" />
      </Link>
      <Link to="https://www.instagram.com/theonlypiyushverma/">
        <FaInstagramSquare className="text-3xl text-white" />
      </Link>
      <Link to="https://twitter.com/Piyush_verma_">
        <FaTwitterSquare className="text-3xl text-white" />
      </Link>
      <Link to="https://github.com/PiyushVerma26">
        <FaGithubSquare className="text-3xl text-white" />
      </Link>
      <Link to="https://www.youtube.com/channel/UCltIdZ2mxVouCYgmvL5tNrg">
        <FaYoutubeSquare className="text-3xl text-white" />
      </Link>
      <Link to="https://wa.me/918405060938">
        <FaWhatsappSquare className="text-3xl text-white" />
      </Link>
    </div>
  );
}

export default Social;
