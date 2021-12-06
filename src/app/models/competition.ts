import { Broadcasts } from "./broadcasts";
import { Competitor } from "./competitor";
import { Headlines } from "./headlines";
import { LeadersParent } from "./leaders-parent";
import { Notes } from "./notes";
import { Series } from "./series";
import { Venue } from "./venue";

export interface Competition{
    competitors: Competitor[];
    broadcasts: Broadcasts[];
    venue: Venue;
    headlines: Headlines[];
    notes: Notes[];
    series: Series;
    leaders: LeadersParent[];
}