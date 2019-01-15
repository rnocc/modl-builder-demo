export interface Product {
  qsBaseID: string;
  BaseLabel: string;
  BaseDesc: string;
  Series: string;
  Manufacturer: string;
  ReadyToUse: string;
  UseInQS: string;
  BOMReadyToUse: string;
  Featured: boolean;
  ItemType: string;
  ForSale: string;
  SalesType?: any;
  ItemSubType1: string;
  ItemSubType2?: string;
  QtyPerBox: string;
  StockCheckUser?: any;
  Image: string;
  recentConfigs?: string[];
  levels: Level[];
  UserNotes?: any;
  Popular?: boolean;
}

export interface Level {
  LevelGroup?: any;
  Tag: string;
  Description: string;
  LevelDefault: string;
  notes?: string;
  options: Option[];
  ShowIfExpr?: string;
}

export interface Option {
  OptionCode: string;
  Description: string;
  ValidIfExpr?: string;
  notes?: string;
}

export interface PropertyFilters {
  ItemType: string;
  [key: string]: any;
}

export interface CommonValue {
  key: string;
  display: string;
  values: string[];
}
