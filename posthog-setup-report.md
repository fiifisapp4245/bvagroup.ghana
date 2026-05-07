<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the BVA Group website. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initializes PostHog on the client side using the Next.js 15.3+ `instrumentation-client` pattern. Includes error tracking (`capture_exceptions: true`) and reverse proxy ingestion via `/ingest`.
- **`next.config.ts`** — Added reverse proxy rewrites routing `/ingest/*` and `/ingest/static/*` and `/ingest/array/*` to PostHog's US servers, protecting user privacy and improving ad-blocker resilience.
- **`.env.local`** — Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).
- **`src/app/page.tsx`** — Converted to a client component to enable click tracking. Added PostHog captures on the hero CTA, Properties section CTA, Resources section CTA, contact band WhatsApp button, and contact band "Send a Message" button.
- **`src/components/advisor-card.tsx`** — Added capture on leadership card expand (when the `+` button is clicked to reveal advisor details).
- **`src/components/whatsapp-button.tsx`** — Added capture on the floating mobile WhatsApp button click.
- **`src/components/nav.tsx`** — Added capture on the mobile nav drawer WhatsApp button click.
- **`src/app/resources/page.tsx`** — Replaced static Link elements for the hero CTA and project details link with `TrackedLink` client components. Replaced the partnership section with the `ResourcesPartnership` client component.
- **`src/components/tracked-link.tsx`** (new) — Reusable client component that wraps Next.js `Link` with a PostHog capture call, enabling tracking in server components.
- **`src/app/resources/resources-partnership.tsx`** (new) — Client component for the Resources page partnership section with captures on email CTA, WhatsApp CTA, and form submission.

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicked the primary 'Get in Touch' CTA button in the homepage hero section | `src/app/page.tsx` |
| `properties_section_cta_clicked` | User clicked 'View all projects' link in the BVA Properties section on the homepage | `src/app/page.tsx` |
| `resources_section_cta_clicked` | User clicked 'View operations' link in the BVA Resources section on the homepage | `src/app/page.tsx` |
| `contact_band_whatsapp_clicked` | User clicked the WhatsApp CTA button in the homepage contact band section | `src/app/page.tsx` |
| `contact_band_send_message_clicked` | User clicked the 'Send a Message' CTA in the homepage contact band section | `src/app/page.tsx` |
| `leadership_card_expanded` | User clicked the '+' button to expand a leadership team member's details card | `src/components/advisor-card.tsx` |
| `whatsapp_floating_button_clicked` | User clicked the floating WhatsApp button (mobile only) | `src/components/whatsapp-button.tsx` |
| `mobile_nav_whatsapp_clicked` | User clicked 'Chat on WhatsApp' inside the mobile navigation drawer | `src/components/nav.tsx` |
| `resources_hero_cta_clicked` | User clicked 'View Kutukrom Project' CTA in the Resources page hero section | `src/app/resources/page.tsx` |
| `kutukrom_project_details_clicked` | User clicked 'Full Project Details' link in the Kutukrom Gold Project section | `src/app/resources/page.tsx` |
| `resources_partnership_email_clicked` | User clicked 'Request Partnership Brief' email CTA on the Resources page | `src/app/resources/resources-partnership.tsx` |
| `resources_partnership_whatsapp_clicked` | User clicked 'WhatsApp Us' in the Resources partnership section | `src/app/resources/resources-partnership.tsx` |
| `resources_inquiry_form_submitted` | User submitted the partnership inquiry form on the Resources page | `src/app/resources/resources-partnership.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1556920) — Overview of all key engagement metrics
- [CTA Engagement Over Time](/insights/wFr6oPtQ) — Line chart of all major CTA clicks
- [Homepage Contact Conversion Funnel](/insights/vrFEXGm4) — Hero CTA → Send a Message funnel
- [WhatsApp Click Volume](/insights/d5XNuATK) — Stacked bar of WhatsApp clicks across all touchpoints
- [Resources Partnership Funnel](/insights/EieXKaPM) — Resources hero → project details → inquiry form submission funnel
- [Leadership & Section Engagement](/insights/ir657iCh) — Leadership card expansions and division section CTA clicks

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
