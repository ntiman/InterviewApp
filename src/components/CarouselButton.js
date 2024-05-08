import PropTypes from 'prop-types';
import {cn} from '../lib/utils';

export default function CarouselButton({ onClick, className, children, type, isEnabled }) {

  return (
    <button className={cn("py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-kuvaGray borde hover:bg-zinc-900 hover:text-accent focus:z-10 transition", className)} disabled={!isEnabled} onClick={() => onClick(type)}>
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


