"use client"

import { brands, Colors, Rams, Storages } from "@/constants/options";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { filter_type } from "@/types/filter.type";


export default function Sidebar({ filter, setFilter }: { filter: filter_type, setFilter: Dispatch<SetStateAction<filter_type>> }) {

    const handleCheckbox = (category: keyof filter_type, value: string) => {
        setFilter((prevFilter) => {
            const updatedCategory = (prevFilter[category] as string[]).includes(value)
                ? (prevFilter[category] as string[]).filter((item) => item !== item)
                : [...prevFilter[category] as string[], value];
            return { ...prevFilter, [category]: updatedCategory }
        })
    }

    const handlePriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }))
    }

    const clearAll = () => {
        setFilter({
            minPrice: 0,
            maxPrice: 0,
            Brands: [],
            rams: [],
            colors: [],
            Storages: []
        })
    }

    const clearCategory = (category: keyof filter_type) => {
        setFilter((prevFilter) => ({ ...prevFilter, [category]: [] }))
    }


    return (
        <aside className="w-full max-sm:absolute z-50 bg-white">
            <section className="flex items-center justify-between p-4">
                <h2 className="text-2xl font-semibold">Filter</h2>
                <button type="reset" className="text-blue-600 text-sm" onClick={clearAll}>Clear All</button>
            </section>

            <section className="flex justify-between items-center gap-4 p-4">

                <select
                    name="minPrice"
                    value={filter.minPrice}
                    onChange={handlePriceChange}
                    className="p-2 bg-[#EEE] outline-none rounded-md"
                >
                    <option hidden>Min price</option>
                    <option value="10000">10000</option>
                    <option value="15000">15000</option>
                    <option value="20000">20000</option>
                    <option value="25000">25000</option>
                    <option value="30000">30000</option>
                </select>

                <select
                    name="maxPrice"
                    value={filter.maxPrice}
                    onChange={handlePriceChange}
                    className="p-2 bg-[#EEE] outline-none rounded-md"
                >
                    <option hidden>Max price</option>
                    <option value="10000">10000</option>
                    <option value="15000">15000</option>
                    <option value="20000">20000</option>
                    <option value="25000">25000</option>
                    <option value="30000">30000</option>
                </select>

            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">Brand</h2>
                    <button className="text-blue-600 text-sm" onClick={() => clearCategory("Brands")}>Clear All</button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        brands.map((brand, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name={brand.name}
                                    id={brand.id}
                                    className="w-4 h-4"
                                    value={brand.name}
                                    checked={filter.Brands.includes(brand.name)}
                                    onChange={() => handleCheckbox("Brands", brand.name)}
                                />
                                <label
                                    htmlFor={brand.id}
                                >
                                    {brand.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">RAM</h2>
                    <button className="text-blue-600 text-sm" onClick={() => clearCategory("rams")}>Clear All</button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        Rams.map((ram, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name={ram.name}
                                    id={ram.id}
                                    className="w-4 h-4"
                                    checked={filter.rams.includes(ram.name)}
                                    value={ram.name}
                                    onChange={() => handleCheckbox("rams", ram.name)}
                                />
                                <label
                                    htmlFor={ram.id}
                                >
                                    {ram.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">Internal storage</h2>
                    <button className="text-blue-600 text-sm" onClick={() => clearCategory("Storages")}>Clear All</button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        Storages.map((storage, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name={storage.name}
                                    id={storage.id}
                                    className="w-4 h-4"
                                    checked={filter.Storages.includes(storage.name)}
                                    value={storage.name}
                                    onChange={() => handleCheckbox("Storages", storage.name)}
                                />
                                <label
                                    htmlFor={storage.id}
                                >
                                    {storage.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-2 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase font-semibold text-base">colors</h2>
                    <button className="text-blue-600 text-sm" onClick={() => clearCategory("colors")}>Clear All</button>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        Colors.map((color, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name={color.name}
                                    id={color.id}
                                    className="w-4 h-4"
                                    checked={filter.colors.includes(color.name)}
                                    value={color.name}
                                    onChange={() => handleCheckbox("colors", color.name)}
                                />
                                <label
                                    htmlFor={color.id}
                                >
                                    {color.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </section>
        </aside>
    )
}