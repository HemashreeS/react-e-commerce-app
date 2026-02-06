import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading products</h2>;

  return (
    <div className="products">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
