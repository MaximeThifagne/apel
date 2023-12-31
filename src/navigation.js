import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink(),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Tous les articles',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Documentation',
        //   href: getPermalink('documentation', 'category'),
        // },
        {
          text: 'Evènements',
          href: getPermalink('evenement', 'category'),
        },
        {
          text: 'Coup de pouce',
          href: getPermalink('coup-de-pouce', 'category'),
        },
      ],
    },
  ],
};

export const footerData = {};
