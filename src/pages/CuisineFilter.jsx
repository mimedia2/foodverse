import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_path_url } from "../secret";
import handleApiRequest from "../helpers/handleApiRequest";
import MenuCard from "../components/MenuCard";

function CuisineFilter() {
  const { cuisine } = useParams();
  const [filterItem, setFilterItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await handleApiRequest(
        `/menu/filter-cuisine?cuisine=${cuisine.toLowerCase()}`,
        { method: "GET" }
      );

      setFilterItem(apiData);
    };

    fetchData();
  }, [cuisine]);

  useEffect(() => {
    console.log(filterItem);
  }, [filterItem]);

  return (
    <div className="pt-24 ">
      <h1 className="text-3xl text-center font-bold">{cuisine}</h1>
      {filterItem?.menus?.length === 0 ? (
        <h1 className="text-center text-lg mt-24">no item found </h1>
      ) : (
        <div className="grid grid-cols-1 px-12 gap-8">
          {filterItem?.menus.map((item) => {
            return <MenuCard detail={item} key={item?._id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default CuisineFilter;
