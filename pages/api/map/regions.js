// Live civic-region data — US Census TIGERweb (public domain), server-side.
// Always returns the 50 states; adds counties when the viewport is local.
import { statesUrl, countiesUrl, bboxIsLocal, normalizeRegions } from '@/lib/map/census'

async function getJson(url) {
  const r = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!r.ok) throw new Error('tigerweb ' + r.status)
  return r.json()
}

export default async function handler(req, res) {
  const bbox = req.query.bbox
  try {
    const statesJson = await getJson(statesUrl())
    let countiesJson = null
    if (bbox && bboxIsLocal(bbox)) {
      try {
        countiesJson = await getJson(countiesUrl(bbox))
      } catch {
        countiesJson = null // counties are optional enrichment
      }
    }
    res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate=2592000')
    res.status(200).json(normalizeRegions(statesJson, countiesJson))
  } catch (e) {
    res.status(200).json({ error: String(e.message || e), points: [] })
  }
}
