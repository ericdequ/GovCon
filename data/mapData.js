// Map dataset for GovCon — the nested civic-region ladder (country → state →
// county → city) used as the backbone for public boundary data (Census
// Gazetteer / TIGER-Line). Sourced from the BEV map lab `seshSenate` region
// fixtures. Region centers are illustrative anchors.
const mapData = {
  meta: {
    title: 'Civic Region Ladder',
    subtitle:
      'How public jurisdictions nest — country, state, county and city regions on one map. Filter by tier to see the boundary ladder that federal and local data (Census Gazetteer, TIGER-Line) is keyed to.',
    accent: '#6366f1',
    center: [-95.7, 37.5],
    zoom: 4,
    // Live: US Census TIGERweb — all 50 states, plus counties when you zoom in.
    // Falls back to the curated region-ladder seed below.
    endpoint: '/api/map/regions',
    attribution: 'Live boundaries — US Census TIGERweb (public domain); seed fixtures from the BEV map lab.',
  },
  categories: [
    { id: 'country', label: 'Country', color: '#6366f1', glyph: '🏛️' },
    { id: 'state', label: 'State', color: '#0ea5e9', glyph: '🏵️' },
    { id: 'county', label: 'County', color: '#f59e0b', glyph: '🗺️' },
    { id: 'city', label: 'City', color: '#14b8a6', glyph: '🏙️' },
  ],
  points: [
    { id: 'region-us', title: 'United States', lat: 39.8283, lng: -98.5795, category: 'country', blurb: 'The national region — the top of the civic ladder.', facts: { Tier: 'country', Code: 'US' } },
    { id: 'region-tx', title: 'Texas', lat: 31.9686, lng: -99.9018, category: 'state', blurb: 'A state region anchored on Austin.', facts: { Tier: 'state', Capital: 'Austin', County: 'Travis County' } },
    { id: 'region-ca', title: 'California', lat: 36.7783, lng: -119.4179, category: 'state', blurb: 'A state region anchored on Sacramento.', facts: { Tier: 'state', Capital: 'Sacramento', County: 'Sacramento County' } },
    { id: 'region-tn', title: 'Tennessee', lat: 35.5175, lng: -86.5804, category: 'state', blurb: 'A state region anchored on Nashville.', facts: { Tier: 'state', Capital: 'Nashville', County: 'Davidson County' } },
    { id: 'region-travis', title: 'Travis County', lat: 30.4, lng: -97.6, category: 'county', blurb: 'A county region within Texas containing Austin.', facts: { Tier: 'county', State: 'Texas' } },
    { id: 'region-la-county', title: 'Los Angeles County', lat: 34.1, lng: -118.3, category: 'county', blurb: 'A county region within California containing Los Angeles and Compton.', facts: { Tier: 'county', State: 'California' } },
    { id: 'region-austin', title: 'Austin', lat: 30.2672, lng: -97.7431, category: 'city', blurb: 'A city region within Travis County, Texas.', facts: { Tier: 'city', County: 'Travis County', State: 'Texas' } },
    { id: 'region-houston', title: 'Houston', lat: 29.7604, lng: -95.3698, category: 'city', blurb: 'A city region within Harris County, Texas.', facts: { Tier: 'city', County: 'Harris County', State: 'Texas' } },
    { id: 'region-la', title: 'Los Angeles', lat: 34.0522, lng: -118.2437, category: 'city', blurb: 'A city region within Los Angeles County, California.', facts: { Tier: 'city', County: 'Los Angeles County', State: 'California' } },
    { id: 'region-compton', title: 'Compton', lat: 33.8958, lng: -118.2201, category: 'city', blurb: 'A city region within Los Angeles County, California.', facts: { Tier: 'city', County: 'Los Angeles County', State: 'California' } },
  ],
}

export default mapData
