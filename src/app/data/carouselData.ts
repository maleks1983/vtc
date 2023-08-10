import {ISlide} from "../models/slide";

export const slide: ISlide[] = [
  {
    id: 0,
    src: "./assets/img/slider/avto.jpg",
    alt: "slider 1",
    description: "slider 0",
    active: true
  },
  {
    id: 1,
    src: "./assets/img/slider/avto.jpg",
    alt: "slider 2",
    description: "slider 1",
    active: false
  },
  {
    id: 2,
    src: "./assets/img/slider/avto.jpg",
    alt: "slider 3",
    description: "slider 2",
    active: false
  }
]

export const contactData = {
  address: {
    name: 'м.Вінниця, вул. Енергетична, 3',
    href:'https://goo.gl/maps/vjyVTNyufHLjTx6h6'
  },
  telephone: {
    name: '+38(097)97-97-554',
    href: 'tel:+380979797554'
  },
  email:{
    name:'VTC@gmail.com',
    href:'mailto:VTC@gmail.com'
  }
}
