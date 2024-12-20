"use client"

import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { FilterType } from "@/types/filter.type";
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

  const [filter, setFilter] = useState<FilterType>({
    price: [0, 0],
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
    <main>
      <nav className="fixed top-0 z-50 w-full p-2 border bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">E-commerce</h1>
          <input
            type="search"
            name="search"
            className="flex w-[20rem] text-sm p-1.5 text-neutral-800 bg-[#F5F5F5] rounded-lg border border-neutral-200 hover:border-neutral-500 placeholder:text-neutral-800 focus:border-neutral-800 outline-none disabled:cursor-not-allowed disabled:opacity-80"
          />
        </div>
      </nav>

      <section className="grid grid-cols-[18rem,_1fr] mt-[50px]">
        <Sidebar filter={filter} setFilter={setFilter} />

        <section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {
              products?.map((product, i) => (
                <Card key={i} {...product} />
              ))
            }
          </div>
        </section>
      </section>
    </main>
  );
}