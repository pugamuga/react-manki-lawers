// import all photos and images

import ProfilePhoto1 from "../src/assets/img/profile1.png";
import ProfilePhoto2 from "../src/assets/img/profile2.png";
import ProfilePhoto3 from "../src/assets/img/profile3.png";

import Skill1 from "../src/assets/img/skills/skill1.png";
import Skill2 from "../src/assets/img/skills/skill2.png";
import Skill3 from "../src/assets/img/skills/skill3.png";
import Skill4 from "../src/assets/img/skills/skill4.png";
import Skill5 from "../src/assets/img/skills/skill5.png";
import Skill6 from "../src/assets/img/skills/skill6.png";

import TeamMember1 from "../src/assets/img/lawyer1.png";
import TeamMember2 from "../src/assets/img/lawyer2.png";
import TeamMember3 from "../src/assets/img/lawyer3.png";

import FacebookIcon from "../src/assets/img/social/facebook.png";
import TwitterIcon from "../src/assets/img/social/twitter.png";
import InstagramIcon from "../src/assets/img/social/instagram.png";
import YoutubeIcon from "../src/assets/img/social/youtube.png";
import PinterestIcon from "../src/assets/img/social/pinterest.png";

// create navigation data array of objects
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "What we do",
    href: "skills",
  },
  {
    name: "Our team",
    href: "team",
  },
  {
    name: "Contact us",
    href: "contact",
  },
];

//create testimotionals data array of objects
export const testimotionals = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis quas voluptatum iusto in amet aut eaque modi fuga atque!",
    name: "Jane Cooper",
    image: ProfilePhoto1,
    position: "Web Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis quas voluptatum iusto in amet aut eaque modi fuga atque!",
    name: "Theresa Webb",
    image: ProfilePhoto2,
    position: "Web Designer",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis quas voluptatum iusto in amet aut eaque modi fuga atque!",
    name: "Kathrin Murthy",
    image: ProfilePhoto3,
    position: "UI/UX Designer",
  },
];

//create skills data array of objects
export const skills = [
  {
    icon: Skill1,
    title: "Corruption",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    icon: Skill2,
    title: "Empoyment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    icon: Skill3,
    title: "Real Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    icon: Skill4,
    title: "Taxes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    icon: Skill5,
    title: "Corporate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    icon: Skill6,
    title: "Banking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
];

//create team data array of objects
export const team = [
  {
    image: TeamMember1,
    name: "Jane William",
    position: "Band and Financial Lawyer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    image: TeamMember2,
    name: "Andrea Collins",
    position: "Family Lawyer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
  {
    image: TeamMember3,
    name: "John Smith",
    position: "Business lawyer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
  },
];

//create socials data array of objects
export const socials = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: PinterestIcon,
  },
];
