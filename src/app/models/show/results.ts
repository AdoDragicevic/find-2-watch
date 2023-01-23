import { Cast, Crew } from "../credits/credits";
import { Mixed } from "../index/results";
import { ShowDetails, ShowPage } from "../shared/results";

export interface ShowResults {
  type: ShowPage;
  data: ShowDetails;
}

export interface ShowRelatedResults {
  listType: string;
  data: Cast[] | Crew[] | Mixed[];
}
