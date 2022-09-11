type Customer = {
  email: string;
  name: string;
}
type CustomerList = {
  id: ID;
  value: Customer;
}

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
}

type TrackingItem = {
  customer_id: ID;
  items: Item[];
  customer: Customer;
}

type OrderResponse = {
  value: Order;
}

type CustomerResponse = {
  name: ID;
  value: Customer;
}

type Order = {
  Lat: number;
  Lng: number;
  shippingCost: number;
  createdAt: string;
  Address: string;
  City: string;
  carrier: string;
  trackingId: string;
  trackingItems: TrackingItem;
}

