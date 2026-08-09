/*
  DATASHEETS: chitinous-enclaves
  Generated from the supplied current Wargame PDF.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["chitinous-enclaves"] = [
  {
    "id": "mothsa-antir-queen",
    "name": "Mothsa, Antir Queen",
    "role": "HIGH COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "18 Coins",
    "stats": {
      "actions": "15",
      "armor": "3",
      "health": "13",
      "might": "14",
      "accuracy": "15",
      "evasion": "15",
      "holding": "3"
    },
    "rangedWeapons": [
      {
        "name": "Moth Flutter",
        "keywords": [
          "MAGICKS"
        ],
        "range": "8",
        "strength": "4",
        "speed": "10"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Antir Venomblade",
        "keywords": [
          "CONTACT",
          "POISON",
          "PIERCING"
        ],
        "strength": "3",
        "speed": "8",
        "crit": "7"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Moth Flutter",
        "text": "Afflicts an enemy target, upon successfully hitting, with -2 Melee Speed for that model or unit’s next turn, but it cannot lower the melee speed below 1. This cannot stack."
      }
    ],
    "unitAbilities": [
      {
        "name": "Moth’s Guidance",
        "text": "While Mothsa, Antir Queen is alive, all friendly units have +1 Strength against enemy High Commanders, Commanders, and Specialist Characters."
      }
    ],
    "keywords": [
      "FLIGHT",
      "SEER",
      "MOTHUA ENCLAVE"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Chitin Claw-Hunters, Leviathan Hunters, Antir Kill-Team"
      }
    ]
  },
  {
    "id": "great-hunter",
    "name": "Great Hunter",
    "role": "COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "15 Coins",
    "stats": {
      "actions": "11",
      "armor": "6",
      "health": "18",
      "might": "9",
      "accuracy": "1",
      "evasion": "6",
      "holding": "5"
    },
    "rangedWeapons": [
      {
        "name": "NONE",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Eviscerating Claws",
        "keywords": [
          "CONTACT",
          "CLEAVE",
          "CUTTING"
        ],
        "strength": "6",
        "speed": "9",
        "crit": "9"
      },
      {
        "name": "Eviscerating Claws",
        "keywords": [
          "CONTACT",
          "CHOP",
          "CUTTING"
        ],
        "strength": "9",
        "speed": "6",
        "crit": "12"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Leader Of The Hunt",
        "text": "While attached to a friendly unit and while alive, the Great Hunter gives +1 Actions and +1 Speed to that unit."
      }
    ],
    "keywords": [
      "BRAWLER",
      "KRANOV ENCLAVE"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Mothsa, Antir Queen"
      },
      {
        "label": "Can Lead",
        "text": "Chitin Claw-Hunters, Leviathan Hunters, Antir Kill-Team"
      }
    ]
  },
  {
    "id": "sagakuza-the-great-craw",
    "name": "Sagakuza, The Great Craw",
    "role": "COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "15 Coins",
    "stats": {
      "actions": "9",
      "armor": "11",
      "health": "17",
      "might": "5",
      "accuracy": "1",
      "evasion": "3",
      "holding": "7"
    },
    "rangedWeapons": [
      {
        "name": "NONE",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Red Serrated Lumbersaw",
        "keywords": [
          "CONTACT",
          "AREA",
          "CUTTING"
        ],
        "strength": "9",
        "speed": "7",
        "crit": "12"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Red Serrated Lumbersaw",
        "text": "When attacking, once per round, Sagakuza, The Great Craw ignores 2 Armor of whichever enemy target he has chosen, though this cannot be lower than 1."
      }
    ],
    "unitAbilities": [
      {
        "name": "Ship Hunter",
        "text": "While attached to a friendly unit and while still alive, Sagakuza, The Great Craw grants +2 Crit to the melee attacks of that unit when attacking any unit or model with the keyword [MACHINE OF WAR]"
      }
    ],
    "keywords": [
      "BRAWLER",
      "EKTERNAU ENCLAVE"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Mothsa, Antir Queen"
      },
      {
        "label": "Can Lead",
        "text": "Chitin Claw-Hunters, Leviathan Hunters, Antir Kill-Team"
      }
    ]
  },
  {
    "id": "chitin-claw-hunters",
    "name": "Chitin Claw-Hunters",
    "role": "FORMATIONS UNIT",
    "base": "40 mm",
    "models": "4",
    "cost": "10 Coins",
    "stats": {
      "actions": "9",
      "armor": "5",
      "health": "14",
      "might": "8",
      "accuracy": "1",
      "evasion": "5",
      "holding": "4"
    },
    "rangedWeapons": [
      {
        "name": "NONE",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Slashing Claws",
        "keywords": [
          "CONTACT",
          "CLEAVE",
          "CUTTING"
        ],
        "strength": "5",
        "speed": "7",
        "crit": "7"
      },
      {
        "name": "Slashing Claws",
        "keywords": [
          "CONTACT",
          "CHOP",
          "CUTTING"
        ],
        "strength": "7",
        "speed": "5",
        "crit": "9"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "BRAWLER",
      "KRANOV ENCLAVE"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Mothsa, Antir Queen, Great Hunter, Sagakuza, The Great Craw"
      }
    ]
  },
  {
    "id": "leviathan-hunters",
    "name": "Leviathan Hunters",
    "role": "FORMATIONS UNIT",
    "base": "40mm",
    "models": "4",
    "cost": "12 Coins",
    "stats": {
      "actions": "7",
      "armor": "9",
      "health": "15",
      "might": "4",
      "accuracy": "1",
      "evasion": "2",
      "holding": "6"
    },
    "rangedWeapons": [
      {
        "name": "NONE",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Serrated Lumbersaw",
        "keywords": [
          "CONTACT",
          "AREA",
          "CUTTING"
        ],
        "strength": "4",
        "speed": "5",
        "crit": "6"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "BRAWLER",
      "EKTERNAU ENCLAVE"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Mothsa, Antir Queen, Great Hunter, Sagakuza, The Great Craw"
      }
    ]
  },
  {
    "id": "antir-kill-team",
    "name": "Antir Kill-Team",
    "role": "SPECIALIST UNIT",
    "base": "40mm",
    "models": "3",
    "cost": "9 Coins",
    "stats": {
      "actions": "12",
      "armor": "2",
      "health": "11",
      "might": "13",
      "accuracy": "1",
      "evasion": "19",
      "holding": "1"
    },
    "rangedWeapons": [
      {
        "name": "NONE",
        "keywords": [],
        "range": "0",
        "strength": "0",
        "speed": "0"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Antir Elkblade",
        "keywords": [
          "CONTACT",
          "POISON",
          "PIERCING"
        ],
        "strength": "2",
        "speed": "9",
        "crit": "11"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Moonlit Assassins",
        "text": "This unit, while alive, performs Crits on 4-up instead of 6"
      }
    ],
    "keywords": [
      "FLIGHT",
      "SEER",
      "MOTHUA ENCLAVE"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Mothsa, Antir Queen, Great Hunter, Sagakuza, The Great Craw"
      }
    ]
  }
];
