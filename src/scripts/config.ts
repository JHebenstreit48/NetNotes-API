export const config = {
  // Where to import the navigation root from (Subpage[])
  navEntryModule: '@/Navigation/Combined/Core/Pages',

  // Markdown output root (backend repo)
  notesRoot: 'src/seeds/Notes',

  // Map nav “Main Tab” display names -> folder names you actually use
  sectionNameMap: {
    'Routing & Switching': 'RouteAndSwitch',
    'Network Security': 'NetworkSecurity',
    'Certifications': 'Certifications',
    'Tools': 'Tools',
    'VoIP': 'VoIP',
  } as Record<string, string>,

  // Optional: override topic folder names when needed
  topicNameMap: {
    // 'IDS & IPS': 'IDSIPS',
  } as Record<string, string>,

  // Optional safety cap default (can be overridden by CLI --limit)
  defaultLimit: 10_000,
};
