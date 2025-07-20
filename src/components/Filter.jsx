"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Filter({ categories, children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e) =>
    router.push(
      pathname + "?" + createQueryString("category", `${e.target.value}`)
    );

  return (
    <div>
      <form className="flex flex-row space-x-1.5 py-4">
        <label htmlFor="filter">Filter by:</label>
        <select onChange={handleChange} className="border">
          <option value={""} className="bg-black/40">
            All
          </option>
          {categories.map((category) => (
            <option
              className="bg-black/40"
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
