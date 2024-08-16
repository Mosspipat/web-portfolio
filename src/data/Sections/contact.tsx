import { FaFacebookSquare } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneFlip,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type ContactInfo = {
  title: string;
  label?: string;
  value: string;
  icon: React.ReactElement;
  onClick?: () => void;
};

export const contactInfoList: ContactInfo[] = [
  {
    title: "Email",
    value: "pt_moss17782@hotmail.com",
    label: "pt_moss17782@hotmail.com",
    icon: <MdEmail size={40} color="#1b6ccf" />,
    onClick: () => {
      window.location.href =
        "mailto:pt_moss17782@hotmail.com?subject=Hello&body=I%20want%20to%20contact%20you.";
    },
  },
  {
    title: "Phone",
    label: "064-637-9555",
    value: "064-637-9555",
    icon: <FaPhoneFlip size={30} color="#1b6ccf" />,
    onClick: () => {
      window.location.href = "tel:064-637-9555";
    },
  },
  {
    title: "Instagram",
    label: "mosspipat",
    value: "https://www.instagram.com/mosspipat/",
    icon: <FaSquareInstagram size={30} color="#1b6ccf" />,
    onClick: () => {
      window.open("https://www.instagram.com/mosspipat/", "_blank");
    },
  },
  {
    title: "Facebook",
    label: "pipat.horakungthong",
    value: "https://www.facebook.com/pipat.horakungthong",
    icon: <FaFacebookSquare size={40} color="#1b6ccf" />,
    onClick: () => {
      window.open("https://www.facebook.com/pipat.horakungthong", "_blank");
    },
  },
  {
    title: "Github",
    label: "Mosspipat",
    value: "https://github.com/Mosspipat",
    icon: <FaGithub size={40} color="#1b6ccf" />,
    onClick: () => {
      window.open("https://github.com/Mosspipat", "_blank");
    },
  },
  {
    title: "Linkedin",
    label: "พิพัฒน์ หอระฆังทอง",
    value:
      "https://www.linkedin.com/in/%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C-%E0%B8%AB%E0%B8%AD%E0%B8%A3%E0%B8%B0%E0%B8%86%E0%B8%B1%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87-66786a25b/",
    icon: <FaLinkedin size={40} color="#1b6ccf" />,
    onClick: () => {
      window.open(
        "https://www.linkedin.com/in/%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C-%E0%B8%AB%E0%B8%AD%E0%B8%A3%E0%B8%B0%E0%B8%86%E0%B8%B1%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87-66786a25b/",
        "_blank"
      );
    },
  },
];
