
import big from  '../assets/big.jpg';
import small from  '../assets/small.jpg';
import '../styles/image-viewer.css';


const image = document.createElement('img');
image.src = "https://picsum.photos/200/300/?random";
document.body.appendChild(image);

const smallImage = document.createElement('img');
smallImage.src =small;
document.body.appendChild(smallImage);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);