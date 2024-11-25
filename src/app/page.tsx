"use client"

import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { filter_type } from "@/types/filter.type";
import { Product } from "@/types/product.type";
import axios from "axios";
import { useEffect, useState } from "react";

interface props {
  name: string;
  price: number;
  brand: string;
  image: {
    imageUrl: string
  }
}

export default function Home() {

  const [filter, setFilter] = useState<filter_type>({
    minPrice: 0,
    maxPrice: 0,
    Brands: [],
    rams: [],
    colors: [],
    Storages: []
  });

  const [products, setProducts] = useState<props[]>()


  useEffect(() => {
    const productData = async () => {
      try {
        const { data } = await axios.post("/api/product/getAllProduct", { filter });
        setProducts(data.products!);

      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    productData();
  }, [filter]);

  return (
    <main className="relative grid gap-4 p-2 grid-cols-[18rem,_1fr]">
      <Sidebar filter={filter} setFilter={setFilter} />

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))", gap: "1rem", padding: "1rem" }}>
        {
          products?.map((product, i) => (
            <Card key={i} {...product} />
          ))
        }
      </section>
    </main>
  );
}