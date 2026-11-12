# Doughjo review notes

Reviewed November 12, 2026.

## Automated checks

24 Node tests pass for roster integrity, price values, capacity, duplicate flavors, totals, reordering, unavailable flavors, and validated browser storage recovery.

## Browser checks completed

Chrome desktop and responsive views.

- First six flavors produce subtotal $27.50, sample tax $1.65, total $29.15.
- Complete box opens a reveal and guest checkout.
- Invalid email puts focus on an actionable error.
- A failed demo attempt says no order was created and preserves the box.
- Retrying reaches confirmation and clears the completed box.
- Mobile slot controls move a donut without changing its price.
- Swapping Limitless Glaze for Lost Again changes the selected flavor and price.
- Remove and Undo restore the previous assortment.
- Inspected phone layouts at 390 and 320 pixels had no horizontal page overflow.

## Figma

10 editable linked mobile flow screens, a brand board, 96 text nodes, 23 component instances, and an original mascot illustration. Home composition visually reviewed. These initial frames predate the product art, drinks, and expanded mascot revision; the browser is the dynamic interaction reference.

## Scope and limits

No live payment, real restaurant, inventory service, address, email, or account. Contact details are not persisted. Box selections and drink quantities use browser storage.

No participant testing, screen reader session, full zoom evaluation, cross browser audit, or formal Section 508 conformance evaluation is claimed. The test plan records the next research tasks.

## Assets

Doughshi hero artwork created for this concept. Original detailed product artwork is shared across the menu, flavor details, and box. Three drink illustrations and three mascot poses extend the brand. DM Sans license is included. Figma display headings use Anton; browser display headings use system Impact with fallback. Figma buttons adapt Simple Design System instances. Anime references are independent fan inspiration, not an official collaboration.

## Expanded shop checks

Six suggested donuts plus Strawberry Cloud Matcha produced $34.98 including sample tax. Adding Vanilla Power Up produced $40.28. Reload preserved the first drink and box. Pairing details opened the matching drink. The reveal opened, guest checkout completed, and confirmation correctly showed six donuts and two drinks before clearing the order. Flavor finder returned three Unexpected flavors. Mobile detail views and 320 / 390 pixel layouts were inspected without horizontal page overflow. Escape closed the product dialog.
