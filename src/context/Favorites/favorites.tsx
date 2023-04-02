import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

interface FavoriteContextProps {
  favorites: Character[];
  setFavorites: React.Dispatch<React.SetStateAction<Character[]>>;
  handleFavoriteCharacter: (character: Character) => void;
  handleRemoveFavoriteCharacter: (id: number) => void;
  hasFavorite: (id: number) => boolean;
}

export const FavoritesContext = createContext({} as FavoriteContextProps);

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const hasFavorite = (id: number) => {
    return !!favorites.find((item) => item.id === id);
  };

  const handleFavoriteCharacter = (character: Character) => {
    const isFavorited = hasFavorite(character.id);

    if (!isFavorited && character) {
      setFavorites([...favorites, character]);
    }
  };

  const handleRemoveFavoriteCharacter = (id: number) => {
    const favoriteFiltered = favorites.filter((item) => item.id !== id);
    setFavorites(favoriteFiltered);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        handleFavoriteCharacter,
        handleRemoveFavoriteCharacter,
        hasFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorite = () => {
  return useContext(FavoritesContext);
};
