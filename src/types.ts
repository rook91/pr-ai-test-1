export type SP_Fixture_Data = {
    "id": number
    "sport_id": number,
    "league_id": number,
    "season_id": number,
    "stage_id": number,
    "group_id": number | null,
    "aggregate_id": number | null,
    "round_id": number | null,
    "state_id": number,
    "venue_id": number | null,
    "name": string | null,
    "starting_at": string | null,
    "result_info": string | null,
    "leg": string,
    "details": string  | null,
    "length": number  | null,
    "placeholder": boolean,
    "has_odds": boolean,
    "starting_at_timestamp": number | null
};

export type SP_Odd_Data = {
    "id": number
    "sport_id": number,
    "league_id": number,
    "season_id": number,
    "stage_id": number,
    "group_id": number | null,
    "aggregate_id": number | null,
    "round_id": number | null,
    "state_id": number,
    "venue_id": number | null,
    "name": string | null,
    "starting_at": string | null,
    "result_info": string | null,
    "leg": string,
    "details": string  | null,
    "length": number  | null,
    "placeholder": boolean,
    "has_odds": boolean,
    "starting_at_timestamp": number | null
};

// export type SP_Fixture = {
//     "data": {
//         data: [SP_Fixture_Data],
//     }
// }

// export type SP_OddsByFixture = {
//     "data": [SP_Odd_Data]
// }