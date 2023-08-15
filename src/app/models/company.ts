export interface ISocial {
  facebook:
    {
      image: string;
      src: string;
    },
  instagram:
    {
      image: string;
      src: string;
    },
  telegram:
    {
      image: string;
      src: string;
    },
  viber:
    {
      image: string;
      src: string;
    },
  whatsapp:
    {
      image: string;
      src: string;
    },
}

export interface ICompany {
  address: {
    name: string,
    href: string
  },
  telephone: {
    name: string
    href: string
  },
  email: {
    name: string
    href: string
  },
  positionGoogle: string
  social: ISocial
}
