function Square({
  background = 'black',
  size = 'sm',
  position = '',
  children,
}) {
  const className = `square bg-${background} size-${size} g-${position}`;
  return <div className={className}>{children}</div>;
}

export default Square;
