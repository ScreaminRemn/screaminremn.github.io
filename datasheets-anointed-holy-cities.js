/*
  DATASHEETS: anointed-holy-cities
  Add another unit by copying one object inside the [ ... ] array,
  or copy the example from DATASHEET-TEMPLATE.js.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["anointed-holy-cities"] = [
  {
    "id": "lord-marshal-jethro-ben-levas",
    "name": "Lord Marshal Jethro Ben-Levas",
    "role": "HIGH COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "15 Coins",
    "stats": {
      "actions": "8",
      "armor": "5",
      "health": "15",
      "holding": "11",
      "might": "6",
      "accuracy": "1",
      "evasion": "5"
    },
    "rangedWeapons": [
      {
        "name": "Regal Arbalest",
        "keywords": [],
        "range": "10",
        "strength": "6",
        "speed": "11"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Lord’s Longsaber",
        "keywords": [
          "CONTACT"
        ],
        "strength": "5",
        "speed": "13",
        "crit": "8"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Lord’s Longsaber",
        "text": "This weapon has a Melee Range of 3 inches instead of 2 inches"
      }
    ],
    "unitAbilities": [
      {
        "name": "Charge Forth!",
        "text": "While Lord Marshal Jethro Ben-Levas is alive, all friendly units gain +2 Actions when enemy units are in CLEAR Line of Sight."
      }
    ],
    "keywords": [
      "MOUNTED",
      "RALLY",
      "WELL COMPOSED",
      "BRAWLER"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "None listed."
      }
    ]
  },
  {
    "id": "lord-marshal-ezekiel-azariah",
    "name": "Lord Marshal Ezekiel Azariah",
    "role": "HIGH COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "17 Coins",
    "stats": {
      "actions": "6",
      "armor": "5",
      "health": "15",
      "holding": "14",
      "might": "9",
      "accuracy": "13",
      "evasion": "2"
    },
    "rangedWeapons": [
      {
        "name": "High Marshal’s Warbow",
        "keywords": [
          "IMPALERS"
        ],
        "range": "20",
        "strength": "6",
        "speed": "14"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Quick Armsaber",
        "keywords": [
          "CONTACT",
          "CLEAVE"
        ],
        "strength": "4",
        "speed": "7",
        "crit": "5"
      },
      {
        "name": "Quick Armsaber",
        "keywords": [
          "CONTACT",
          "CHOP"
        ],
        "strength": "5",
        "speed": "5",
        "crit": "6"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Stand Strong",
        "text": "While still alive, High Marshal Ezekiel Azariah grants +1 Holding Power to all friendly units."
      },
      {
        "name": "Steadfast Ground",
        "text": "While attached to a friendly unit, High Marshal Ezekiel Azariah grants +1 Armor to that friendly unit."
      }
    ],
    "keywords": [
      "RALLY",
      "BRAWLER",
      "BASTION"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "X"
      }
    ]
  },
  {
    "id": "inquisitor-samuel",
    "name": "Inquisitor Samuel",
    "role": "COMMANDER",
    "base": "50 mm",
    "models": "1",
    "cost": "X Coins",
    "stats": {
      "actions": "7",
      "armor": "4",
      "health": "13",
      "holding": "9",
      "might": "9",
      "accuracy": "1",
      "evasion": "4"
    },
    "rangedWeapons": [
      {
        "name": "Stubbed Arbalest",
        "keywords": [
          "POISON"
        ],
        "range": "7",
        "strength": "4",
        "speed": "7"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Crossaxe",
        "keywords": [
          "CONTACT",
          "CLEAVE"
        ],
        "strength": "5",
        "speed": "3",
        "crit": "9"
      },
      {
        "name": "Crossaxe",
        "keywords": [
          "CONTACT",
          "CHOP"
        ],
        "strength": "8",
        "speed": "2",
        "crit": "13"
      }
    ],
    "weaponAbilities": null,
    "unitAbilities": null,
    "keywords": [
      "LONE WARRIOR",
      "BRAWLER",
      "DEVOUT"
    ],
    "leadership": [
      {
        "label": "Can Lead/Be Led By",
        "text": "X"
      }
    ]
  }
];
