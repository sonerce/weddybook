// Common types for the wedding application

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  plusOne?: boolean;
  dietaryRestrictions?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RSVP {
  id: string;
  guestId: string;
  attending: boolean;
  plusOneAttending?: boolean;
  message?: string;
  submittedAt: Date;
  updatedAt: Date;
}

export interface WeddingEvent {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location: string;
  address: string;
  dresscode?: string;
  isMainEvent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GiftRegistryItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  retailer: string;
  url: string;
  isPurchased: boolean;
  purchasedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Photo {
  id: string;
  url: string;
  thumbnailUrl?: string;
  caption?: string;
  uploadedBy: string;
  uploadedByName: string;
  createdAt: Date;
  tags?: string[];
}

export interface Message {
  id: string;
  guestName: string;
  guestEmail: string;
  message: string;
  isApproved: boolean;
  createdAt: Date;
}

export interface WeddingSettings {
  id: string;
  coupleNames: string;
  weddingDate: Date;
  venue: string;
  venueAddress: string;
  rsvpDeadline: Date;
  isRsvpOpen: boolean;
  isRegistryVisible: boolean;
  isPhotoSharingEnabled: boolean;
  welcomeMessage?: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

// Form Types
export interface RSVPFormData {
  attending: boolean;
  plusOneAttending?: boolean;
  message?: string;
}

export interface GuestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dietaryRestrictions?: string;
}

export interface MessageFormData {
  guestName: string;
  guestEmail: string;
  message: string;
}

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
  icon?: string;
  public: boolean;
  children?: NavLink[];
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    accent: Record<string, string>;
  };
  fonts: {
    sans: string[];
    serif: string[];
    script: string[];
    display: string[];
  };
}
