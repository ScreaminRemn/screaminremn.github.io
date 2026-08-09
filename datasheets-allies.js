/*
  DATASHEETS: allies
  Generated from the supplied current Wargame PDF.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["allies"] = [
  {
    "id": "spindle-knights",
    "name": "Spindle Knights",
    "role": "SPECIALIST UNIT",
    "base": "40mm",
    "models": "3",
    "cost": "10 Coins",
    "stats": {
      "actions": "5",
      "armor": "10",
      "health": "13",
      "might": "4",
      "accuracy": "1",
      "evasion": "7",
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
        "name": "Chivalrous Halberds",
        "keywords": [
          "CONTACT",
          "AREA",
          "CLEAVE",
          "CUTTING"
        ],
        "strength": "4",
        "speed": "13",
        "crit": "6"
      },
      {
        "name": "Chivalrous Halberds",
        "keywords": [
          "CONTACT",
          "IMPALERS",
          "PIERCING"
        ],
        "strength": "4",
        "speed": "13",
        "crit": "12"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "AIMLESS",
      "KNIGHT",
      "BRAWLER"
    ],
    "leadership": null
  },
  {
    "id": "hinter-witch-hilda",
    "name": "Hinter-Witch Hilda",
    "role": "SPECIALIST CHARACTER",
    "base": "40mm",
    "models": "1",
    "cost": "20 Coins",
    "stats": {
      "actions": "4",
      "armor": "2",
      "health": "11",
      "might": "3",
      "accuracy": "20",
      "evasion": "1",
      "holding": "3"
    },
    "rangedWeapons": [
      {
        "name": "Saddathri",
        "keywords": [
          "MAGICKS"
        ],
        "range": "24",
        "strength": "9",
        "speed": "3"
      },
      {
        "name": "Juassri",
        "keywords": [
          "MAGICKS",
          "POISON"
        ],
        "range": "9",
        "strength": "7",
        "speed": "15"
      },
      {
        "name": "Ettri",
        "keywords": [
          "MAGICKS",
          "NAUSEA"
        ],
        "range": "18",
        "strength": "11",
        "speed": "5"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Qaeurri",
        "keywords": [
          "MAGICKS",
          "AREA",
          "CRUSHING"
        ],
        "strength": "5",
        "speed": "5",
        "crit": "15"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Unseeming Step",
        "text": "If Hinter-Witch HIlda doesn’t move for one round, then, on the next round, Hinter-Witch Hilda can teleport anywhere on the board so long that it is not within the enemy deployment area. It must also be a minimum of 10 inches away from objectives and enemy units"
      }
    ],
    "keywords": [
      "AIMLESS",
      "BRAWLER",
      "LONE WARRIOR",
      "SEER"
    ],
    "leadership": null
  },
  {
    "id": "they-who-watch",
    "name": "They Who Watch",
    "role": "SPECIALIST UNIT",
    "base": "50mm",
    "models": "2",
    "cost": "11 Coins",
    "stats": {
      "actions": "4",
      "armor": "8",
      "health": "11",
      "might": "6",
      "accuracy": "1",
      "evasion": "1",
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
        "name": "Marble Slayer",
        "keywords": [
          "CONTACT",
          "AREA",
          "CUTTING"
        ],
        "strength": "10",
        "speed": "7",
        "crit": "5"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Battlefield Grave",
        "text": "Upon any instance where this unit may take damage, roll 1D6. On rolling a 4, 5, or 6, this unit takes no damage and ignores all special effects that might otherwise be inflicted by that attack. On rolling a 1, 2, or 3, nothing happens and normal rules apply"
      }
    ],
    "keywords": [
      "AIMLESS",
      "BRAWLER",
      "LONE WARRIOR"
    ],
    "leadership": null
  },
  {
    "id": "iystrobahths",
    "name": "Iystrobahths",
    "role": "SPECIALIST CHARACTER",
    "base": "90mm Oval",
    "models": "1",
    "cost": "26 Coins",
    "stats": {
      "actions": "10",
      "armor": "12",
      "health": "23",
      "might": "13",
      "accuracy": "1",
      "evasion": "8",
      "holding": "17"
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
        "name": "Gore Them",
        "keywords": [
          "CONTACT",
          "TITANIC",
          "PIERCING"
        ],
        "strength": "6",
        "speed": "2",
        "crit": "24"
      },
      {
        "name": "Choke Them",
        "keywords": [
          "CONTACT",
          "CRUSHING"
        ],
        "strength": "9",
        "speed": "11",
        "crit": "15"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Gore Them",
        "text": "This attack must be rolled on 2D6. Upon rolling a 12, then the attack Crits. This attack also has a range of 8 inches."
      }
    ],
    "unitAbilities": [
      {
        "name": "I Care Not, Mortal",
        "text": "If Gore Them successfully Crits, it deals damage to ALL units in range, both enemy and friendly units"
      }
    ],
    "keywords": [
      "AIMLESS",
      "DAEMON",
      "BRAWLER",
      "DIVINE"
    ],
    "leadership": null
  }
];
