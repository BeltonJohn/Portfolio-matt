import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/about',
    icon: <SiIcons.SiAboutdotme />,
    cName: 'nav-text',
  },

  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text',
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <GiIcons.GiSkills />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <MdIcons.MdOutlineContactMail />,
    cName: 'nav-text',
  },
];
