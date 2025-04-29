export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}