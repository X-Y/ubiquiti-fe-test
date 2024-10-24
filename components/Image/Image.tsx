export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  iconId: string;
  sizeX: string;
  sizeY: string;
};
const Image = ({ iconId, sizeX, sizeY, ...otherProps }: ImageProps) => {
  const src = `https://static.ui.com/fingerprint/ui/icons/${iconId}_${sizeX}x${sizeY}.png`;
  return <img src={src} {...otherProps} />;
};

export default Image;
