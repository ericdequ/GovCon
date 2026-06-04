// Generated from packages/blog-kit/src/projects.js. Run "node scripts/blogs.mjs sync-projects" after editing the global catalog.
const projectsData = [
  {
    "key": "quantum-cyber-solutions",
    "title": "Quantum Cyber Solutions",
    "description": "A company to further the research of quantum computing and its applications in cyber security and humanity",
    "url": "https://quantumcybersolutions.com",
    "imgSrc": "https://www.quantumcybersolutions.com/QCS-logo.webp",
    "category": "company",
    "tags": [
      "quantum",
      "cybersecurity",
      "research"
    ]
  },
  {
    "key": "develope",
    "title": "develope",
    "description": "A web based application for communities to vote on what gets built in their community, simulations to see how the building affects, property value, lifestyle.",
    "url": "https://www.robotric.org/Tech/ATL/democracy-app",
    "imgSrc": "https://www.robotric.org/Realms/Gods/renders_realm/government-parties-plaza.png",
    "category": "civic-tech",
    "tags": [
      "community",
      "voting",
      "planning"
    ],
    "ecosystemGroups": [
      "civic-tech",
      "community-planning",
      "public-data"
    ],
    "mapRequests": [
      {
        "id": "develope-civic-regions",
        "datasetId": "govcon:civic-regions",
        "label": "Civic boundary data",
        "status": "active",
        "relation": "uses",
        "groups": [
          "civic-tech",
          "boundaries",
          "public-data",
          "community-planning"
        ],
        "features": [
          "live-bbox-api",
          "jurisdiction-ladder",
          "region-clustering",
          "tst-place-grounding",
          "proposal-map-overlays"
        ],
        "reason": "Use the GovCon civic ladder to tie local proposals, votes, and simulations to real jurisdictions.",
        "dataset": {
          "id": "govcon:civic-regions",
          "title": "Civic Region Ladder",
          "blog": "govcon",
          "mapPath": "/map",
          "endpoint": "/api/map/regions",
          "status": "active",
          "provider": "US Census TIGERweb",
          "source": "US public boundary data with curated civic seed anchors",
          "groups": [
            "civic-tech",
            "boundaries",
            "public-data"
          ],
          "features": [
            "live-bbox-api",
            "jurisdiction-ladder",
            "region-clustering",
            "tst-place-grounding"
          ]
        },
        "datasetTitle": "Civic Region Ladder",
        "endpoint": "/api/map/regions",
        "blog": "govcon",
        "mapPath": "/map",
        "mapUrl": "https://www.govcon.me/map"
      }
    ]
  },
  {
    "key": "bev",
    "title": "Bev",
    "description": "A Bar Discovery App that helps you find the perfect Place To drink with Friends!",
    "url": "https://www.bev.cool",
    "imgSrc": "https://www.bev.cool/BEV.svg",
    "category": "app",
    "tags": [
      "bars",
      "local-discovery",
      "social"
    ],
    "ecosystemGroups": [
      "bev",
      "local-discovery",
      "social-places"
    ],
    "mapRequests": [
      {
        "id": "bev-venue-pois",
        "datasetId": "bev:venue-pois",
        "label": "Venue POI API",
        "status": "requested",
        "relation": "requests",
        "groups": [
          "bev",
          "local-discovery",
          "social-places"
        ],
        "features": [
          "api-request-needed",
          "venue-clustering",
          "place-reviews",
          "safe-social-routing",
          "reviews",
          "rss-place-feed"
        ],
        "reason": "Create the canonical venue/place API that BEV and the blogs can reuse for nightlife, local discovery, and social place posts.",
        "dataset": {
          "id": "bev:venue-pois",
          "title": "BEV Venue POIs",
          "blog": "",
          "mapPath": "",
          "endpoint": "",
          "status": "requested",
          "provider": "BEV + OpenStreetMap venue provider requested",
          "source": "Future bar, nightlife, restaurant, and local social venue data",
          "groups": [
            "bev",
            "local-discovery",
            "social-places"
          ],
          "features": [
            "api-request-needed",
            "venue-clustering",
            "place-reviews",
            "safe-social-routing"
          ]
        },
        "datasetTitle": "BEV Venue POIs",
        "endpoint": "",
        "blog": "",
        "mapPath": "",
        "mapUrl": ""
      }
    ]
  },
  {
    "key": "legelet",
    "title": "Legelet",
    "description": "A platform that connects legal professionals with clients seeking legal services, providing a seamless experience for both parties.",
    "url": "https://www.leopiolet.com/",
    "imgSrc": "https://www.leopiolet.com/TTP.png",
    "category": "legal",
    "tags": [
      "legal",
      "marketplace",
      "services"
    ]
  },
  {
    "key": "royalwee",
    "title": "Royalwee",
    "description": "A Democratic monarchy that allows communities, cities to elect local leaders as Culture, Art, Tech, Queens, & kings for the more nueanced opportunities, Also helps bring attention to local politics",
    "url": "https://www.robotric.org/Realms/Atlantis",
    "imgSrc": "https://www.robotric.org/innovate/5.png",
    "category": "civic-tech",
    "tags": [
      "community",
      "culture",
      "local-politics"
    ],
    "ecosystemGroups": [
      "civic-tech",
      "culture",
      "local-politics"
    ],
    "mapRequests": [
      {
        "id": "royalwee-civic-regions",
        "datasetId": "govcon:civic-regions",
        "label": "Local civic regions",
        "status": "active",
        "relation": "uses",
        "groups": [
          "civic-tech",
          "boundaries",
          "public-data",
          "culture",
          "local-politics"
        ],
        "features": [
          "live-bbox-api",
          "jurisdiction-ladder",
          "region-clustering",
          "tst-place-grounding",
          "community-clusters",
          "local-leader-places"
        ],
        "reason": "Use region boundaries to group culture, art, tech, and local leadership content by place.",
        "dataset": {
          "id": "govcon:civic-regions",
          "title": "Civic Region Ladder",
          "blog": "govcon",
          "mapPath": "/map",
          "endpoint": "/api/map/regions",
          "status": "active",
          "provider": "US Census TIGERweb",
          "source": "US public boundary data with curated civic seed anchors",
          "groups": [
            "civic-tech",
            "boundaries",
            "public-data"
          ],
          "features": [
            "live-bbox-api",
            "jurisdiction-ladder",
            "region-clustering",
            "tst-place-grounding"
          ]
        },
        "datasetTitle": "Civic Region Ladder",
        "endpoint": "/api/map/regions",
        "blog": "govcon",
        "mapPath": "/map",
        "mapUrl": "https://www.govcon.me/map"
      }
    ]
  },
  {
    "key": "quantum-learning",
    "title": "Quantum Learning",
    "description": "A learning platform for students to learn about quantum computing and Other Computer Science topics",
    "url": "https://www.robotric.org/Classroom/",
    "imgSrc": "https://www.quantumcybersolutions.com/entanglement.webp",
    "category": "education",
    "tags": [
      "learning",
      "quantum",
      "computer-science"
    ],
    "ecosystemGroups": [
      "education",
      "tst",
      "interactive-lessons"
    ]
  }
]

export default projectsData
