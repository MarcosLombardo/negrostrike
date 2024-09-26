import { ICharacter } from "./characters.interface";

export interface IMap {
  id: string;
  name: string;
  image: string;
  logo: string;
  radar: string;
  plays: number;
  tt_wins: number;
  ct_wins: number;
  best_player: string;
  worst_player: string;
  death_record: number;
  kill_record: number;
}
