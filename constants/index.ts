import { NavbarLink, slidesLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  
];

export const navbarLinks: NavbarLink[] = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/products",
      label: "Products",
    },
    {
      route: "/blog",
      label: "Blog",
    },
    {
      route: "/contact",
      label: "Contact",
    },
  ];
export const slides: slidesLink[] = [
    {
      imgUrl:"https://i.ibb.co/KLfVdFJ/christopher-gower-m-HRf-Lhg-ABo-unsplash.jpg",
      title: " The Ultimate Tech Gadget for Your Needs",
      subtitle:"Elevate your tech experience with our latest gadget! Whether you're working, gaming, or staying connected, this cutting-edge device offers unmatched performance and versatility. Order now and experience innovation like never before.",
    },
    {
      imgUrl:"https://i.ibb.co/k6ZVM5w/fabian-heimann-4-R-WEmhx8og-unsplash.jpg",
      title: "The Best Tech Gadgets for Your Lifestyle",
      subtitle:"Discover the latest tech gadgets that will enhance your daily life. From smart home devices to wearable tech, we have everything you need to stay connected and entertained. Shop now and experience the future of technology!",
    },
    {
      imgUrl:"https://i.ibb.co/DRhLPg9/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg",
      title: "Stay Connected with Our Top Tech Gadgets",
      subtitle:"Stay connected with the latest tech gadgets from our store. Whether you're looking for a new smartphone, tablet, or smartwatch, we have everything you need to stay connected and entertained. Shop now and experience the future of technology!",
    },
    {
      imgUrl:"https://i.ibb.co/THpx8gj/amy-hirschi-szr-J3wjz-OMg-unsplash.jpg",
      title: "Upgrade Your Tech Game with Our Gadgets",
      subtitle:"Upgrade your tech game with the latest gadgets from our store. From smartphones to smart home devices, we have everything you need to stay connected and entertained. Shop now and experience the future of technology!",
    },
    {
      imgUrl:"https://i.ibb.co/pfHQSgX/jens-kreuter-ng-Mts-E5r9e-I-unsplash.jpg",
      title: "Discover the Best Tech Gadgets for Your Needs",
      subtitle:"Discover the best tech gadgets for your needs at our store. Whether you're looking for a new smartphone, tablet, or smartwatch, we have everything you need to stay connected and entertained. Shop now and experience the future of technology!",
    }

   
  ];