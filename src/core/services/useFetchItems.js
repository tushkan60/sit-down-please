import { useEffect, useState } from "react";

export const useFetchItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        "https://react-api-4721a-default-rtdb.firebaseio.com/items.json"
      );
      if (!response.ok) {
        throw new Error(
          "Ошибка при загрузке товаров, поробуйте перезагрузить страницу"
        );
      }
      const responseData = await response.json();

      const loadedItems = [];
      for (const item in responseData) {
        loadedItems.push({
          id: responseData[item].id,
          title: responseData[item].titleShort,
          img: responseData[item].imgPrimary,
          price: responseData[item].price,
          rating: responseData[item].rating,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    }
    fetchData().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  return { isLoading, error, items };
};
