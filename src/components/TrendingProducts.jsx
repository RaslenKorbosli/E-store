import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
const productData = [
  {
    productId: '1',
    productImg: 'img/products/1.jpg',
    productName: 'Little Armchair Sheepskin',
    productPrice: '958$',
  },

  {
    productId: '2',
    productImg: 'img/products/2.jpg',
    productName: 'Lamp Light Blue',
    productPrice: '25$',
  },
  {
    productId: '3',
    productImg: 'img/products/3.png',
    productName: 'Little Armchair Sheepskin',
    productPrice: '958$',
  },
  {
    productId: '4',
    productImg: 'img/products/4.jpg',
    productName: 'Pulp Unit - 5 Compartments',
    productPrice: '209$',
  },
  {
    productId: '5',
    productImg: 'img/products/5.jpg',
    productName: 'Golden Modern Light',
    productPrice: '175$',
  },
  {
    productId: '6',
    productImg: 'img/products/6.jpg',
    productName: 'Body Oil 200ml',
    productPrice: '32$',
  },
  {
    productId: '7',
    productImg: 'img/products/7.jpg',
    productName: 'Black and White Lamp',
    productPrice: '200$',
  },
  {
    productId: '8',
    productImg: 'img/products/8.jpg',
    productName: 'Gejst Shelf A Black Ash/Black',
    productPrice: '149$',
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function TrendingProducts() {
  return (
    <div className="py-40 px-16 lg:px-48   ">
      <h1 className="text-2xl pb-8 font-semibold">Trending Now</h1>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        swipeable={false}
        autoPlay={true}
        infinite={true}
      >
        {productData.map((product) => (
          <div
            key={product.productId}
            className="flex flex-col h-full justify-center border-2 mx-1  gap-2 shadow-sm"
          >
            <img src={product.productImg} alt="" />
            <div className="p-4 ">
              <p className="text-lg">{product.productName}</p>
              <span className="font-semibold text-xl">
                {product.productPrice}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingProducts;
