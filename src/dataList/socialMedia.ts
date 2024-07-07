import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

type SRoute = {
  name: string;
  path: string;
  icon: IconType;
};

const socialMedia = [
  {
    name: 'linkedIn',
    path: 'https://www.linkedin.com/in/darshan-lakade/',
    icon: FaLinkedin,
  },
  {
    name: 'github',
    path: 'https://github.com/darshancsl',
    icon: FaGithub,
  },
] as SRoute[];

export default socialMedia;
