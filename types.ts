
export interface OfficeType {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

export interface Amenity {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  area: string;
  description: string;
  image: string;
  mrt: string;
  distance: string;
}
