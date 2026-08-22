import React from 'react';
import PropTypes from 'prop-types';

const PlaceholderImage = ({
  width = 200,
  height = 150,
  text = 'Imagem',
  className = '',
  style = {},
}) => (
  <div
    className={`d-flex align-items-center justify-content-center bg-light border text-muted ${className}`}
    style={{
      width,
      height,
      minWidth: width,
      minHeight: height,
      ...style,
    }}
    aria-label={text}
  >
    <span className="small text-center px-2">{text}</span>
  </div>
);

PlaceholderImage.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const HolderTextProvider = ({ width, height, children, className, ...props }) => (
  <PlaceholderImage
    width={width}
    height={height}
    text={typeof children === 'string' ? children : 'Imagem'}
    className={className}
    {...props}
  />
);

HolderTextProvider.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const HolderIconProvider = ({ icon, width, height, className, ...props }) => (
  <PlaceholderImage
    width={width}
    height={height}
    text={icon ? String(icon) : 'Icon'}
    className={className}
    {...props}
  />
);

HolderIconProvider.propTypes = {
  icon: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export { PlaceholderImage, HolderTextProvider, HolderIconProvider };
