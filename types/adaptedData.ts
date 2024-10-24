export type Device = {
  id: string;
  line: Line;
  icon: Icon;
  product: Product;
  shortNames: string[];
  images: Images;
}

export type Icon = {
  id: string;
  resolutions: [number, number][];
}

export type Line = {
  id: string;
  name: string;
}

export type Product = {
  abbrev: string;
  name: string;
}

export type Images = {
  default: string;
}