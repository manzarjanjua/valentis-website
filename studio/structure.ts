import type { StructureResolver } from 'sanity/structure';

/**
 * Desk structure. `siteSettings` is a singleton: a single, fixed document
 * (id "siteSettings") edited in place — no create/delete list.
 *
 * The `homePage` singleton + its content objects (CLAUDE.md §4.2) are added in
 * the next phase, alongside the home page content sections.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .icon(() => '⚙️')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')
        ),
    ]);
