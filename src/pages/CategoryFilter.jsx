import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import handleApiRequest from "../helpers/handleApiRequest";

export default function CategoryFilter() {
  const { category } = useParams();
  const [items, setItems] = useState(null);

  console.log(category);

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await handleApiRequest(
        `/menu/filter-category?category=${category}`,
        {}
      );

      if (apiResponse?.success) {
        setItems(apiResponse.menus);
      }
    }

    fetchData();
  }, [category]);

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div>
      <div className="pt-24"></div>
    </div>
  );
}
