import React from 'react';
import Slider from 'react-slick';
import './HomeSlider.scss';
export default function HomeSlider({
  settings = {},
  items,
  img,
  className = '',
  onClick = () => {},
}) {
  const Arrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };
  const configSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
    ...settings,
  };
  return (
    <Slider {...configSettings} className={className + ' _home-slider'}>
      {items.length &&
        items.map((item, idx) => (
          <div key={idx} className='item' onClick={() => onClick(item)}>
            {item.img || img}
            <div className='item-child1'>{item.name}</div>
            {item.specialist && (
              <div className='item-child2'>{item.specialist}</div>
            )}
          </div>
        ))}
    </Slider>
  );
}
