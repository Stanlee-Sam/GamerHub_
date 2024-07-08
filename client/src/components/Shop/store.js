import ps5Image1 from "/src/assets/ps 5 feat.jpeg";
import ps4Image1 from "/src/assets/blue_ps4.jpeg";
import xboxXImage1 from "/src/assets/xbox_x.jpeg";
import xboxSImage1 from "/src/assets/Xbox Series S.jpeg";
import switchImage1 from "/src/assets/Switch.jpeg";
import gamingPcImage1 from "/src/assets/Gaming pc.jpeg";
import gamingPcImage2 from "/src/assets/pc.jpeg";
import gamingPcImage3 from "/src/assets/pc2.jpeg";
import headsetImage1 from "/src/assets/headsetwhite.jpeg";
import headsetImage2 from "/src/assets/Headset.jpeg";

const products = [
  {
    id: "1",
    name: "PlayStation 5",
    description: "The latest console from Sony.",
    price: 50000,
    images: [ps5Image1, ps4Image1, "https://ibb.co/qJrb3BT"],
    category: "Gaming Consoles",
    rating: 4.8,
  },
  {
    id: "2",
    name: "PlayStation 4",
    description: "Popular console from Sony.",
    price: 30000,
    images: [ps4Image1, ps4Image1, "https://ibb.co/qJrb3BT"],
    category: "Gaming Consoles",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Xbox Series X",
    description: "The latest console from Microsoft.",
    price: 55000,
    images: [xboxXImage1, "https://ibb.co/PzGrTL8", "https://ibb.co/qJrb3BT"],
    category: "Gaming Consoles",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Xbox Series S",
    description: "The latest console from Microsoft.",
    price: 55000,
    images: [xboxSImage1, "https://ibb.co/PzGrTL8", "https://ibb.co/qJrb3BT"],
    category: "Gaming Consoles",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Nintendo Switch",
    description: "Portable and home gaming console.",
    price: 30000,
    images: [switchImage1, "https://ibb.co/PzGrTL8", "https://ibb.co/qJrb3BT"],
    category: "Gaming Consoles",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Gaming PC",
    description: "High-end gaming PC with the latest hardware.",
    price: 100000,
    images: [
      gamingPcImage1,
      "https://ibb.co/PzGrTL8",
      "https://ibb.co/qJrb3BT",
    ],
    category: "PCs",
    rating: 4.9,
  },
  {
    id: "7",
    name: "Gaming PC",
    description: "High-end gaming PC with the latest hardware.",
    price: 100000,
    images: [
      gamingPcImage2,
      "https://ibb.co/PzGrTL8",
      "https://ibb.co/qJrb3BT",
    ],
    category: "PCs",
    rating: 4.9,
  },
  {
    id: "8",
    name: "Gaming PC",
    description: "High-end gaming PC with the latest hardware.",
    price: 100000,
    images: [
      gamingPcImage3,
      "https://ibb.co/PzGrTL8",
      "https://ibb.co/qJrb3BT",
    ],
    category: "PCs",
    rating: 4.9,
  },
  {
    id: "9",
    name: "Wireless Headset",
    description: "Precision wireless mouse for gaming.",
    price: 5000,
    images: [headsetImage1, "https://ibb.co/PzGrTL8", "https://ibb.co/qJrb3BT"],
    category: "Accessories",
    rating: 4.5,
  },
  {
    id: "10",
    name: "Wireless  Headset",
    description: "Precision wireless mouse for gaming.",
    price: 5000,
    images: [headsetImage2, "https://ibb.co/PzGrTL8", "https://ibb.co/qJrb3BT"],
    category: "Accessories",
    rating: 4.2,
  },
];

export default products;
