import { GoDeviceDesktop } from 'react-icons/go';
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
} from 'react-icons/md';
import { SiAdobeindesign } from 'react-icons/si';

export const ABOUT = {
  title: 'About Me',
  name: 'Rashadul Islam',
  description:
    'This is Rashadul Islam, ready to work as trainee or junior frontend developer. I have strong knowledge of web architecture and frontend latest technology as react with good skill of HTML,CSS, and Javascript or some basic styling framework such as bootstrap, Semantic UI etc.I am a coding passionate person and fast learner.I am able to handle multiple tasks on a daily basis and I use a creative approach to solve problem .I am a dependable person who is great at time management with always energetic and eager to learn new skills.',
  exports: ['JavaScript', 'React', 'UI/UX'],
  image: '/Asset/me.jpg',
  services: [
    {
      title: 'Frontend Development',
      text: 'Built websites using React JS with redux and Tailwind CSS.',
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: 'Web Development',
      text: 'Built the company website with custom WordPress themes from scratch.',
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: 'UI/UX Design',
      text: 'Designed the User Interface and the User Experience with figma.',
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: 'Web Design',
      text: 'Design from figma, psd, xd to HTML Web site Design.',
      icon: <SiAdobeindesign size={33} />,
    },
  ],
};
