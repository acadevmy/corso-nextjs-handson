"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

function Search() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParms = useSearchParams();

  const handleChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const params = new URLSearchParams(searchParms);

      if (value) {
        params.set("query", value);
      } else {
        params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    500,
  );

  return (
    <div className="mb-10">
      <label htmlFor="search">Ricerca articoli</label>

      <input
        id="search"
        name="search"
        placeholder="Cerca un articolo"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
