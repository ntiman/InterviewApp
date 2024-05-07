import PropTypes from 'prop-types';

export default function CarouselButton({ onClick, className, children, type, isEnabled }) {

  return (
    <button className={className} disabled={!isEnabled} onClick={() => onClick(type)}>
      {children}
  </button>
  )
}

CarouselButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['next', 'previous']).isRequired,
  isEnabled: PropTypes.bool,
};


