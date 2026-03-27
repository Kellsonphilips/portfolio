# Approved testimonials

Testimonials submitted via the website are sent to you by email. They **only appear on the site after approval**.

To approve a testimonial:

1. Add one object per approved submission to `approved-testimonials.json`.
2. Each object should match the shape expected by the site, for example:

```json
{
  "name": "Client Name",
  "position": "Role, Company",
  "location": "City, Country",
  "service": "IT Support",
  "rating": 5,
  "testimonial": "Their testimonial text here...",
  "projectOutcome": "Optional outcome, e.g. 40% improvement"
}
```

Allowed `service` values: `"IT Support"`, `"Web Development"`, `"Technical Support"`, `"Help Desk Technicians"`.

3. Redeploy or restart the app so the new testimonials are loaded.
