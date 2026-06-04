// US Census TIGERweb helper for the civic-region map. Public-domain federal
// data, keyless, server-side. States (layer 0) load always; counties (layer 1)
// load when the viewport is zoomed in enough to keep the result small.
const TIGER = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer'

const STATE = { id: 'state', label: 'States', color: '#0ea5e9', glyph: '🏵️' }
const COUNTY = { id: 'county', label: 'Counties', color: '#f59e0b', glyph: '🗺️' }

export function statesUrl() {
  const p = new URLSearchParams({
    where: '1=1',
    outFields: 'NAME,INTPTLAT,INTPTLON',
    f: 'json',
    returnGeometry: 'false',
  })
  return `${TIGER}/0/query?${p.toString()}`
}

export function countiesUrl(bbox) {
  // bbox = "south,west,north,east" → envelope xmin,ymin,xmax,ymax
  const [s, w, n, e] = String(bbox).split(',').map(Number)
  const p = new URLSearchParams({
    where: '1=1',
    geometry: `${w},${s},${e},${n}`,
    geometryType: 'esriGeometryEnvelope',
    inSR: '4326',
    spatialRel: 'esriSpatialRelIntersects',
    outFields: 'NAME,INTPTLAT,INTPTLON',
    f: 'json',
    returnGeometry: 'false',
    resultRecordCount: '250',
  })
  return `${TIGER}/1/query?${p.toString()}`
}

// Only fetch counties when the viewport is reasonably small (avoid pulling ~3000).
export function bboxIsLocal(bbox) {
  const [s, w, n, e] = String(bbox || '')
    .split(',')
    .map(Number)
  if ([s, w, n, e].some((x) => Number.isNaN(x))) return false
  return Math.abs(n - s) < 8 && Math.abs(e - w) < 8
}

function featureToPoint(f, style) {
  const a = f.attributes || {}
  const lat = parseFloat(a.INTPTLAT)
  const lng = parseFloat(a.INTPTLON)
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null
  return {
    id: `${style.id}-${a.NAME}-${lat.toFixed(3)}`,
    title: a.NAME,
    lat,
    lng,
    category: style.id,
    blurb: `${a.NAME} — ${style.id} region (US Census).`,
    facts: { Tier: style.id, Source: 'US Census TIGERweb' },
  }
}

export function normalizeRegions(statesJson, countiesJson) {
  const used = {}
  const points = []
  for (const f of (statesJson && statesJson.features) || []) {
    const p = featureToPoint(f, STATE)
    if (p) {
      points.push(p)
      used[STATE.id] = STATE
    }
  }
  for (const f of (countiesJson && countiesJson.features) || []) {
    const p = featureToPoint(f, COUNTY)
    if (p) {
      points.push(p)
      used[COUNTY.id] = COUNTY
    }
  }
  return {
    categories: Object.values(used),
    points,
    meta: { attribution: 'Live boundaries — US Census Bureau TIGERweb (public domain).' },
  }
}
