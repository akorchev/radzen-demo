export interface Error {
  error: {
    code: string;
    message: string;
  };
}

export interface Product {
  Description: string;
  DiscontinuedDate: string;
  ID: number;
  Name: string;
  Price: string;
  Rating: number;
  ReleaseDate: string;
}
