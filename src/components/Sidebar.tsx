"use client"

import { brands, Colors, Rams, Storages } from "@/constants/options";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FilterType } from "@/types/filter.type";
import { Checkbox } from "./Checkbox";
import { Range } from "./Range";
import { formateCurrency } from "./Formate";


export default function Sidebar({ filter, setFilter }: { filter: FilterType, setFilter: Dispatch<SetStateAction<FilterType>> }) {

    const handleCheckbox = (category: keyof FilterType, value: string) => {
        setFilter((prevFilter) => {
            const updatedCategory = (prevFilter[category] as string[]).includes(value)
                ? (prevFilter[category] as string[]).filter((item) => item !== item)
                : [...prevFilter[category] as string[], value];
            return { ...prevFilter, [category]: updatedCategory }
        })
    }

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as unknown as number[];
        setFilter((prevFilter) => ({
            ...prevFilter,
            price: [value[0], value[1]],
        }));
    }

    const clearAll = () => {
        setFilter({
            price: [0, 0],
            Brands: [],
            rams: [],
            colors: [],
            Storages: []
        })
    }

    const clearCategory = (category: keyof FilterType) => {
        setFilter((prevFilter) => ({ ...prevFilter, [category]: [] }))
    }


    return (
        <aside className="border-r border-neutral-200">
            <section className="flex items-center justify-between p-4">
                <h2 className="text-2xl font-semibold">Filter</h2>
                <button type="reset" className="bg-zinc-100 text-zinc-600 px-2 py-[2px] rounded-md text-sm" onClick={clearAll}>Reset All</button>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">Price</h2>
                    <button className="bg-zinc-100 text-zinc-600 px-2 py-[2px] rounded-md text-sm" onClick={() => clearCategory("price")}>
                        Reset
                    </button>
                </div>

                <Range
                    min={5000}
                    max={30000}
                    step={1000}
                    onChange={handlePriceChange}
                />

                <div className="text-center">{formateCurrency(filter.price[0])} - {formateCurrency(filter.price[1])}</div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">Brand</h2>
                    <button className="bg-zinc-100 text-zinc-600 px-2 py-[2px] rounded-md text-sm" onClick={() => clearCategory("Brands")}>
                        Reset
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        brands.map((brand, index) => (
                            <Checkbox
                                name={brand.name}
                                value={brand.name}
                                brand={brand}
                                key={index}
                                checked={filter.Brands.includes(brand.name)}
                                onChange={() => handleCheckbox("Brands", brand.name)}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">RAM</h2>
                    <button className="bg-zinc-100 text-zinc-600 px-2 py-[2px] rounded-md text-sm" onClick={() => clearCategory("rams")}>
                        Reset
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        Rams.map((ram, index) => (
                            <Checkbox
                                name={ram.name}
                                value={ram.name}
                                brand={ram}
                                key={index}
                                checked={filter.rams.includes(ram.name)}
                                onChange={() => handleCheckbox("rams", ram.name)}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">Internal storage</h2>
                    <button className="bg-zinc-100 text-zinc-600 px-2 py-[2px] rounded-md text-sm" onClick={() => clearCategory("Storages")}>
                        Reset
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        Storages.map((storage, index) => (
                            <Checkbox
                                name={storage.name}
                                value={storage.name}
                                brand={storage}
                                key={index}
                                checked={filter.Storages.includes(storage.name)}
                                onChange={() => handleCheckbox("Storages", storage.name)}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">colors</h2>
                    <button className="bg-zinc-100 text-zinc-600 px-2 py-[2px] rounded-md text-sm" onClick={() => clearCategory("colors")}>
                        Reset
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        Colors.map((color, index) => (
                            <Checkbox
                                name={color.name}
                                value={color.name}
                                brand={color}
                                key={index}
                                checked={filter.colors.includes(color.name)}
                                onChange={() => handleCheckbox("colors", color.name)}
                            />
                        ))
                    }
                </div>
            </section>
        </aside>
    )
}