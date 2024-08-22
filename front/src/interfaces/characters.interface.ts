export interface ICharacter {
  id: string;
  name: string;
  image: string;
  avatar: string;
  position: number;
  played: number;
  win: number;
  lose: number;
  draw: number;
  kills: number;
  deaths: number;
  total: number;
  best_map: string;
  worst_map: string;
  best_position: number;
  worst_position: number;
  kills_record: number;
  death_record: number;
}
