import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export const socialIcons: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  envelope: FaEnvelope,
  whatsapp: FaWhatsapp,
};

export { FaBars, FaXmark };
