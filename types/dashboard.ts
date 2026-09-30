export interface Product {
  id: number;
  name: string;
  status: string;
  inStock: boolean;
  category?: string;
  stockCount?: number;
}

export interface ContactInfo {
  name: string;
  role: string;
  initials: string;
  email: string;
  phone: string;
  responseTime?: string;
  statusBadge?: string;
}

export interface LocationInfo {
  title: string;
  subtitle: string;
  address: string[];
  operatingHours: string;
  mapsUrl: string;
  timezone?: string;
  status?: string;
}
