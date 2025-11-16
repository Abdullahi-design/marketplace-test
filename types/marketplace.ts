export interface MarketplaceOverview {
  totalCreated: number;
  totalActive: number;
  totalSoldWithPaymentProtection: number;
  totalSoldWithoutPaymentProtection: number;
}

export interface MarketplaceListing {
  id: number;
  sellerName: string;
  askingPrice: number;
  itemLocation: string;
  sellingMode: string;
  adTitle: string;
  creationDate: string;
  status: string;
}

export interface MarketplaceData {
  overview: MarketplaceOverview;
  listings: MarketplaceListing[];
}


