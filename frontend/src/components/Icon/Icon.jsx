export const Icon = ({ id, className, size, height }) => {
  return (
    <svg className={className} height={height} width={size}>
      <use href={`/svg/sprite.svg#${id}`}></use>
    </svg>
  );
};
