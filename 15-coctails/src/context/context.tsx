import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

type Coctail = {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
};

type AppContextType = {
  loading: boolean;
  searchTerm: string;
  coctails: Coctail[];
  // setSearchTerm: (searchTerm: string) => void;

  //----- this is the same as the line below----
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext<AppContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [coctails, setCoctails] = useState<Coctail[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCoctails: Coctail[] = drinks.map((item: any) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCoctails(newCoctails);
      } else {
        setCoctails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading, coctails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within AppProvider");
  }
  return context;
};
export { AppContext, AppProvider };
