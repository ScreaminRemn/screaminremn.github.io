/*
  DATASHEETS: jakiisi
  Generated from the supplied current Wargame PDF.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["jakiisi"] = [
  {
    "id": "hos-jasander",
    "name": "Hos-Jasander",
    "role": "HIGH COMMANDER",
    "base": "50 mm",
    "models": "1",
    "cost": "25 Coins",
    "stats": {
      "actions": "10",
      "armor": "8",
      "health": "19",
      "might": "9",
      "accuracy": "4",
      "evasion": "12",
      "holding": "9"
    },
    "rangedWeapons": [
      {
        "name": "None",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "God-Touched Blade",
        "keywords": [
          "CONTACT",
          "CLEAVE",
          "CUTTING"
        ],
        "strength": "6",
        "speed": "14",
        "crit": "9"
      },
      {
        "name": "God-Touched Blade",
        "keywords": [
          "CONTACT",
          "CHOP",
          "CUTTING"
        ],
        "strength": "9",
        "speed": "4",
        "crit": "13"
      }
    ],
    "weaponAbilities": [
      {
        "name": "God-Touched Blade",
        "text": "Once per match, Hos-Jasander can completely ignore the armor of his chosen target."
      }
    ],
    "unitAbilities": [
      {
        "name": "Divine Champion",
        "text": "On every odd-numbered round, Hos-Jasander can, when in Melee Range of another unit, assuming that another enemy unit is within fifteen inches with CLEAR Line of Sight to the first unit, Hos-Jasander can teleport to that other unit at the cost of 9 [Actions]."
      }
    ],
    "keywords": [
      "BRAWLER",
      "SEER",
      "JAKIISI"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Hos-Jakiisi, Headhunters, Snowdrift Hunters, Gliding Snowdrift Hunters"
      }
    ]
  },
  {
    "id": "hos-jakiisi",
    "name": "Hos-Jakiisi",
    "role": "COMMANDER",
    "base": "40 mm",
    "models": "3",
    "cost": "15 Coins",
    "stats": {
      "actions": "8",
      "armor": "5",
      "health": "14",
      "might": "7",
      "accuracy": "6",
      "evasion": "5",
      "holding": "7"
    },
    "rangedWeapons": [
      {
        "name": "Icecrag Throw",
        "keywords": [
          "MAGICKS",
          "PIERCING"
        ],
        "range": "11",
        "strength": "3",
        "speed": "7"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Icecrag Blade",
        "keywords": [
          "CONTACT",
          "IMPALERS",
          "PIERCING"
        ],
        "strength": "7",
        "speed": "3",
        "crit": "8"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Icecrag Throw",
        "text": "Once per round, one model can lower the [Actions] of the affected target, on a successful hit, by 1, for the affected target’s next turn. The other two models of this unit cannot use the ability at the same time, but they can still use the basic ranged attack."
      }
    ],
    "unitAbilities": [],
    "keywords": [
      "IMPALERS",
      "MANIPULATOR",
      "SEER",
      "JAKIISI"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Hos-Jasander"
      },
      {
        "label": "Can Lead",
        "text": "Headhunters, Snowdrift Hunters, Gliding Snowdrift Hunters"
      }
    ]
  },
  {
    "id": "headhunters",
    "name": "Headhunters",
    "role": "FORMATIONS UNIT",
    "base": "40 mm",
    "models": "5",
    "cost": "13 Coins",
    "stats": {
      "actions": "8",
      "armor": "6",
      "health": "13",
      "might": "6",
      "accuracy": "3",
      "evasion": "5",
      "holding": "6"
    },
    "rangedWeapons": [
      {
        "name": "None",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Coldstone Spear",
        "keywords": [
          "CONTACT",
          "IMPALERS",
          "PIERCING"
        ],
        "strength": "7",
        "speed": "6",
        "crit": "9"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "IMPALERS",
      "BRAWLER",
      "JAKIISI"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Hos-Jasander, Hos-Jakiisi"
      }
    ]
  },
  {
    "id": "snowdrift-hunters",
    "name": "Snowdrift Hunters",
    "role": "FORMATIONS UNIT",
    "base": "40 mm",
    "models": "5",
    "cost": "12 Coins",
    "stats": {
      "actions": "7",
      "armor": "4",
      "health": "13",
      "might": "7",
      "accuracy": "9",
      "evasion": "4",
      "holding": "7"
    },
    "rangedWeapons": [
      {
        "name": "Driftbow",
        "keywords": [
          "PIERCING"
        ],
        "range": "14",
        "strength": "6",
        "speed": "6"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arrow Stab",
        "keywords": [
          "CONTACT",
          "IMPALERS",
          "PIERCING"
        ],
        "strength": "3",
        "speed": "6",
        "crit": "4"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "IMPALERS",
      "BRAWLER",
      "JAKIISI"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Hos-Jasander, Hos-Jakiisi"
      }
    ]
  },
  {
    "id": "gliding-snowdrift-hunters",
    "name": "Gliding Snowdrift Hunters",
    "role": "SPECIALIST UNIT",
    "base": "50 mm",
    "models": "3",
    "cost": "17 Coins",
    "stats": {
      "actions": "11",
      "armor": "3",
      "health": "16",
      "might": "8",
      "accuracy": "9",
      "evasion": "6",
      "holding": "6"
    },
    "rangedWeapons": [
      {
        "name": "Driftbow",
        "keywords": [
          "PIERCING"
        ],
        "range": "14",
        "strength": "6",
        "speed": "6"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Grasping Talons",
        "keywords": [
          "CONTACT",
          "CUTTING"
        ],
        "strength": "6",
        "speed": "7",
        "crit": "8"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "MOUNTED",
      "BRAWLER",
      "JAKIISI"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Hos-Jasander, Hos-Jakiisi"
      }
    ]
  }
];
