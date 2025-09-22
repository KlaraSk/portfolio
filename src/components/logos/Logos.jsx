import "./Logos.css";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LuFigma } from "react-icons/lu";
import { TbBrandAdobeIndesign } from "react-icons/tb";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

import { GrCss3 } from "react-icons/gr";
function Logos() {
  return (
    <div className="font-color-light-green logos">
      <TbBrandReactNative className="logos__logo" />
      <TbBrandMongodb className="logos__logo" />
      <AiOutlineHtml5 className="logos__logo" />
      <GrCss3 className="logos__logo" />
      <LuFigma className="logos__logo" />
      <TbBrandAdobeIndesign className="logos__logo" />
      <TbBrandAdobePhotoshop className="logos__logo" />
      <TbBrandAdobeIllustrator className="logos__logo" />
    </div>
  );
}

export default Logos;
