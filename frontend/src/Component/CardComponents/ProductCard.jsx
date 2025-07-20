import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Rating } from "../../Function/Rating.js";
import { useNavigate } from "react-router-dom";

const ProductCard = React.memo((props) => {
  const navigate = useNavigate();
  const { element, WishList_value, data, CartAddValue } = props;
  const tabIndex = element.id;

  const [WishList, setWishList] = useState(WishList_value);
  const [countNo, setcountNo] = useState(0);

  // Memoize cart button to prevent unnecessary re-renders
  const CartButton = useMemo(() => (
    <button className="CartBtn rounded" onClick={(e) => AddToCart(e, element)}>
      <span className="IconContainer">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      </span>
      <p className="text mb-0">Add to Cart</p>
    </button>
  ), [element]);

  const [AddToCardIcon, setAddToCardIcon] = useState({
    divElement: CartButton,
    click: CartAddValue,
    Count: 0,
  });

  // Memoize wishlist buttons
  const WishListButton = useMemo(() => (
    <button className="CartBtn rounded text-bg-light" onClick={Add_WishList}>
      <span className="IconContainer">
        <i className="bi bi-heart-fill"></i>
      </span>
      <p className="text mb-0">Wishlist</p>
    </button>
  ), []);

  const RemoveWishListButton = useMemo(() => (
    <button className="CartBtn rounded text-bg-danger" onClick={() => RemoveToWishList(element)}>
      <span className="IconContainer">
        <i className="bi bi-trash-fill"></i>
      </span>
      <p className="text text-white mb-0">Remove</p>
    </button>
  ), [element]);

  // Optimize cart count calculation
  const getCountData = useCallback(() => {
    const cartItem = data.AddToCart.find(item => 
      item.Cart.state.element.id === element.id
    );
    if (cartItem) {
      setcountNo(cartItem.Cart.state.count || 0);
    }
  }, [data.AddToCart, element.id]);

  useEffect(() => {
    getCountData();
  }, [getCountData]);

  // Optimize cart addition logic
  const AddToCart = useCallback((e, element) => {
    e.preventDefault();
    e.stopPropagation();
    
    let count = 1;
    const existingItem = data.AddToCart.find(item => 
      item.Cart.state.element.id === element.id
    );
    
    if (existingItem) {
      count = (existingItem.Cart.state.count || 0) + 1;
    }

    props.AddToCart({
      Cart: {
        state: { element, count }
      }
    });
  }, [data.AddToCart, element, props]);

  // Optimize wishlist functions
  const Add_WishList = useCallback(() => {
    props.WishListToCart({ WishList: { state: { element } } });
    setWishList(true);
  }, [element, props]);

  const RemoveToWishList = useCallback((element) => {
    props.RemoveWishList({ WishList: { state: { element } } });
    setWishList(false);
  }, [props]);

  const handleCardClick = useCallback(() => {
    navigate(`/preview/${element.id}`, { 
      state: { element },
      replace: false 
    });
  }, [navigate, element]);

  // Memoize rating component
  const ProductRating = useMemo(() => (
    <Rating Rating={element.rating} />
  ), [element.rating]);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div 
        className="card product-card h-100" 
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={tabIndex}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      >
        <div className="card-img-container position-relative">
          <img
            src={element.image}
            className="card-img-top product-image"
            alt={element.title}
            loading="lazy"
            style={{ 
              height: '200px', 
              objectFit: 'contain',
              transition: 'transform 0.3s ease'
            }}
            onError={(e) => {
              e.target.src = '/placeholder-image.svg';
            }}
          />
          <div className="position-absolute top-0 end-0 p-2">
            {WishList ? RemoveWishListButton : WishListButton}
          </div>
        </div>
        
        <div className="card-body d-flex flex-column">
          <h6 className="card-title text-truncate" title={element.title}>
            {element.title}
          </h6>
          
          <div className="mb-2">
            {ProductRating}
          </div>
          
          <div className="price-section mb-3">
            <span className="h5 text-primary fw-bold">
              ${element.price}
            </span>
            {element.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                ${element.originalPrice}
              </span>
            )}
          </div>
          
          <div className="mt-auto">
            {AddToCardIcon.divElement}
            {countNo > 0 && (
              <div className="text-center mt-2">
                <small className="text-success">
                  Added to cart ({countNo})
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
