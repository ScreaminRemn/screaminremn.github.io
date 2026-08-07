/*
  GRIMMVEIN DATASHEET COPY-PASTE TEMPLATE
  ----------------------------------------
  1. Open the faction file you want, for example:
       datasheets-anointed-holy-cities.js
  2. Copy the entire object below: from the first { through the matching }.
  3. Paste it INSIDE that faction's [ ... ] array.
  4. Put a comma between datasheet objects.
  5. Fill in the values and commit.

  You DO NOT edit the faction HTML page.
  You DO NOT edit the datasheet renderer.
  You DO NOT manually add the unit to the page's table of contents.
  The page and unit count update themselves.

  Keywords may be written with or without square brackets.
  Example: "MOUNTED" and "[MOUNTED]" both work.
*/

const COPY_THIS_DATASHEET = {
  id: "unit-name-for-the-url",       // lowercase; hyphens instead of spaces
  name: "UNIT NAME",
  role: "COMMANDER",                 // HIGH COMMANDER, COMMANDER, FORMATIONS UNIT, etc.
  base: "50mm",
  models: "1",
  cost: "10 Coins",

  stats: {
    actions: "0",
    armor: "0",
    health: "0",
    holding: "0",
    might: "0",
    accuracy: "0",
    evasion: "0"
  },

  rangedWeapons: [
    {
      name: "RANGED WEAPON NAME",
      keywords: ["KEYWORD", "ANOTHER KEYWORD"],
      range: "0",
      strength: "0",
      speed: "0"
    }
  ],

  meleeWeapons: [
    {
      name: "MELEE WEAPON NAME",
      keywords: ["CONTACT", "CLEAVE"],
      strength: "0",
      speed: "0",
      crit: "0"
    }
  ],

  // Use [] if the unit has this section but no abilities (the page displays NONE).
  // Use null if you do not want the section to appear at all.
  weaponAbilities: [
    {
      name: "WEAPON / ABILITY NAME",
      text: "Write the rule here. [KEYWORDS] written in square brackets automatically get hover tooltips."
    }
  ],

  unitAbilities: [
    {
      name: "ABILITY NAME",
      text: "Write the unit ability here."
    }
  ],

  keywords: [
    "BRAWLER",
    "RALLY"
  ],

  // Use null if this unit does not need a Leadership section.
  leadership: [
    {
      label: "Can Lead",
      text: "UNIT NAME, ANOTHER UNIT"
    }
  ]
};
