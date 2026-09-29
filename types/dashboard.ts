export interface Product {
  id: number;
  name: string;
  status: string;
  inStock: boolean;
}

export interface ContactInfo {
  name: string;
  role: string;
  initials: string;
  email: string;
  phone: string;
}

export interface LocationInfo {
  title: string;
  subtitle: string;
  address: string[];
  operatingHours: string;
  mapsUrl: string;
}
