
export enum Category {
  ANALGESICS = 'Analgesics',
  ANTIBIOTICS = 'Antibiotics',
  CARDIOVASCULAR = 'Cardiovascular',
  VITAMINS = 'Vitamins & Supplements',
  FIRST_AID = 'First Aid',
  ANTIHISTAMINES = 'Antihistamines',
  DIGESTIVE = 'Digestive Health',
  DERMATOLOGY = 'Dermatology',
  DIABETES = 'Diabetes Care',
  RESPIRATORY = 'Respiratory',
  PAIN_RELIEF = 'Pain Relief',
  EYE_EAR = 'Eye & Ear Care'
}

export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  category: Category;
  price: number; // Distributor Price (Selling Price)
  mrp: number;   // Maximum Retail Price
  costPrice: number; // For profit calc
  stock: number;
  description: string;
  dosage: string;
  distributor: string;
  hasOffer: boolean;
  offerDescription?: string;
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'staff';
  licenseNumber?: string;
  mobileNumber?: string;
  email?: string;
  pharmacyName?: string;
  address?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: Category | 'All';
}

export interface CartItem extends Medicine {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  totalProfit: number;
  status: 'completed';
}

export type ProfileTab = 'profile' | 'distributors' | 'faq' | 'contact';

export interface InventoryContextType extends FilterState {
  medicines: Medicine[];
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: Category | 'All') => void;
  resetFilters: () => void;
  updateStock: (medicineId: string, quantityToDeduct: number) => void;
  getMedicine: (id: string) => Medicine | undefined;
}
