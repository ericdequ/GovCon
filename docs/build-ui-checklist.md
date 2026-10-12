# GovCon: build repair and UI checklist

Updated 2026-10-12. Preserve all 149 article files and the existing product catalog. No redesign is included in this build repair.

## Diagnosis and changes

The last Vercel production attempt failed during dependency installation. Exact historical build logs could not be retrieved. Explicitly invoke pnpm 10.33.4 and its frozen lockfile so project-level overrides cannot silently select another package-manager version. Vercel documents the override behavior at https://vercel.com/docs/package-managers.

Restore missing build scripts where needed, keep content validation and RSS/sitemap generation in the build, and run IndexNow only through the explicit `pnpm indexnow` command. Bound Next.js MDX build parallelism to two CPUs. Keep existing application dependency ranges.

## Verification status

- [x] Frontmatter parses for every local Markdown/MDX source.
- [x] All 149 source articles are preserved without edits.
- [x] Build verifier asserts that every article has a generated route and is absent from `notFoundRoutes`; checks RSS and sitemap inclusion.
- [ ] Clean frozen-lockfile install in Node 24 CI. Unrun on this candidate.
- [ ] Non-mutating lint in CI. Unrun on this candidate.
- [ ] Full production build, RSS, sitemap, and route verification. Unrun on this candidate.
- [ ] Exact-commit Vercel preview reaches READY. Pending.
- [ ] Production deployment reaches READY after approved merge. Pending.

## UI audit and professional polish queue

These checks require the working deployment; they are not claimed as passed by the build.

- [ ] Desktop and mobile visual audit of home, blog index, article, tags, projects, and about pages.
- [ ] Check image loading, descriptive alt text, type hierarchy, spacing, and card consistency.
- [ ] Check keyboard focus, mobile navigation, theme switch, and Back/Forward behavior.
- [ ] Check article navigation, search/filter behavior, pagination, and empty states.
- [ ] Audit links to retired custom domains and cross-site references; verify destinations before changing them.
- [ ] Check long titles, code blocks, tables, and equations for narrow-screen overflow.
- [ ] Review homepage positioning and reduce repeated branding/navigation clutter.
- [ ] Review publish workflow so an approved conversation can become a consistent, well-structured post with sources and image credit.
