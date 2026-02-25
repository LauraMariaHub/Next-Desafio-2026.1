export type Product = {
  id: number;          
  text: string;         
  description: string;  
  price: number;        
  imageUrl: string | null; 
  isBestSeller: boolean;
  createdAt: Date;
}

export type ProductIndividualPost = Product | null;