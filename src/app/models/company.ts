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
    img_src: string,
    name: string,
    href: string
  },
  telephone: {
    img_src: string,
    name: string
    href: string
  },
  email: {
    img_src: string,
    name: string
    href: string
  },
  schedule: {
    img_src: string,
    name: string
    list: string
  },
  positionGoogle: string
  social: ISocial
}
