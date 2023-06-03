export type SP_Fixture_Data = {
    "id": number
    "sport_id": number,
    "league_id": number,
    "season_id": number,
    "stage_id": number,
    "group_id": number | null,
    "aggregate_id": number | null,
    "round_id": number,
    "state_id": number,
    "venue_id": number,
    "name": string,
    "starting_at": string,
    "result_info": string,
    "leg": string,
    "details": null,
    "length": number,
    "placeholder": false,
    "has_odds": true,
    "starting_at_timestamp": number
};

export type SP_Fixture = {
    "data": [SP_Fixture_Data]
}