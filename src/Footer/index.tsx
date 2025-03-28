import email from "../Image/email.png";
import insta from "../Image/insta.png";
import face from "../Image/face.png";
import twitter from "../Image/twitter.png";
import tel from "../Image/tel.png";

function Footer() {
  return (
    <div className="w-full bg-[#0c0c44] pt-[30px] pb-[30px]">
      <div className="footer12 flex items-center">
        <h1 className="copiryght text-white text-center pl-[10px] italic text-[1rem]">
          Copyright 2025 - Todos os direitos reservados a Multiware Tecnologia
        </h1>
        <div className="divdiv w-[35%]  justify-end flex">
          <div className="flex pt-[10px] gap-[8px] pr-[60px]">
            <a href="https://www.instagram.com/topsapp/" target="_blank">
              <img className="img3" src={insta}></img>
            </a>
            <a href="https://twitter.com/topsapp" target="_blank">
              <img className="img3" src={twitter}></img>
            </a>
            <a href="https://www.facebook.com/topsapp10" target="_blank">
              <img className="img3" src={face}></img>
            </a>
          </div>
          <div className="flex pt-[10px] ">
            <a href="tel:6632110010" target="_blank">
              <img className=" pr-[8px] " src={tel}></img>
            </a>
            <h1 className=" text-white italic text-[1rem]">(66) 3211-0010</h1>
          </div>
        </div>
        <div className="email1 flex pt-[10px]">
          <a href="mailto:COMERCIAL@TOPSAPP.COM.BR" target="_blank">
            <img className="pl-[40px] pr-[8px]" src={email}></img>
          </a>
          <h1 className="text-white italic pr-[20px] text-[1rem]">
            comercial@topsapp.com.br
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
