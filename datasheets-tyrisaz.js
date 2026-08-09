/*
  DATASHEETS: tyrisaz
  Generated from the supplied current Wargame PDF.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["tyrisaz"] = [
  {
    "id": "ilbair",
    "name": "Ilbair",
    "role": "SPECIALIST CHARACTER",
    "base": "180mm Oval",
    "models": "x1",
    "cost": "32 Coins",
    "stats": {
      "actions": "5",
      "armor": "12",
      "health": "30",
      "might": "2",
      "accuracy": "10",
      "evasion": "2",
      "holding": "8"
    },
    "rangedWeapons": [
      {
        "name": "Billowing Seaflame",
        "keywords": [
          "MAGICKS",
          "TITANIC"
        ],
        "range": "20",
        "strength": "8",
        "speed": "13"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Absentminded Slam",
        "keywords": [
          "CONTACT",
          "TITANIC",
          "CRUSHING"
        ],
        "strength": "9",
        "speed": "5",
        "crit": "20"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Billowing Seaflame",
        "text": "Ignores the [EVASION] of the target, but it can only target a singular unit."
      },
      {
        "name": "Absentminded Slam",
        "text": "Melee range is 5 instead of 2 for this attack."
      }
    ],
    "unitAbilities": [
      {
        "name": "First Rune Seer",
        "text": "If Ilbair still has his maximum [Actions] for this turn, he can disappear and then reappear up to 40 inches away, but he must be a minimum distance of 10 inches away from any other unit and 10 inches away from any objective. Additionally, if Ilbair is chosen as a Secondary Unit for any turn, he can still behave as though he has his maximum [Actions] for this teleportation ability alone."
      }
    ],
    "keywords": [
      "TITAN",
      "SEER",
      "MAGICKS",
      "LONE WARRIOR",
      "TYRISAZ"
    ],
    "leadership": null
  },
  {
    "id": "hook-division",
    "name": "Hook Division",
    "role": "FORMATIONS UNIT",
    "base": "40mm",
    "models": "x10",
    "cost": "8 Coins",
    "stats": {
      "actions": "5",
      "armor": "4",
      "health": "9",
      "might": "6",
      "accuracy": "1",
      "evasion": "4",
      "holding": "4"
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
        "name": "Hook Halberd",
        "keywords": [
          "CONTACT",
          "PIERCING"
        ],
        "strength": "3",
        "speed": "9",
        "crit": "6"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "IMPALERS",
      "STRAHZZI",
      "TYRISAZ"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Strahzzi Bannerlord on Horseback"
      }
    ]
  },
  {
    "id": "strahzzi-bannerlord-on-horseback",
    "name": "Strahzzi Bannerlord on Horseback",
    "role": "HIGH COMMANDER",
    "base": "40mm",
    "models": "x1",
    "cost": "14 Coins",
    "stats": {
      "actions": "7",
      "armor": "5",
      "health": "11",
      "might": "6",
      "accuracy": "1",
      "evasion": "5",
      "holding": "3"
    },
    "rangedWeapons": [
      {
        "name": "None",
        "keywords": [],
        "range": "",
        "strength": "",
        "speed": ""
      }
    ],
    "meleeWeapons": [
      {
        "name": "Hook Halberd",
        "keywords": [
          "CONTACT",
          "PIERCING"
        ],
        "strength": "3",
        "speed": "9",
        "crit": "6"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Outstanding Command",
        "text": "If the actions of the Strahzzi Bannerlord on Horseback is greater than the actions of whatever unit it leads, that unit instead has the same number of actions as the Strahzzi Bannerlord on Horseback."
      },
      {
        "name": "Rune-Resistant Son",
        "text": "All units within the army have +1 Armor when attacked by something using the [MAGICKS] keyword in that attack so long as the Strahzzi Bannerlord on Horseback is still alive."
      }
    ],
    "keywords": [
      "MOUNTED",
      "IMPALERS",
      "STRAHZZI",
      "TYRISAZ"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Hook Division, Scourgefire Squad"
      }
    ]
  },
  {
    "id": "scourgefire-squad",
    "name": "Scourgefire Squad",
    "role": "SPECIALIST UNIT",
    "base": "40mm",
    "models": "5",
    "cost": "12 Coins",
    "stats": {
      "actions": "5",
      "armor": "3",
      "health": "8",
      "might": "5",
      "accuracy": "4",
      "evasion": "2",
      "holding": "5"
    },
    "rangedWeapons": [
      {
        "name": "Scourgefire Whips",
        "keywords": [
          "CONTACT",
          "AREA",
          "CRUSHING",
          "BURNING"
        ],
        "range": "6",
        "strength": "2",
        "speed": "5"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Hookblade Sword",
        "keywords": [
          "CONTACT",
          "PIERCING"
        ],
        "strength": "2",
        "speed": "10",
        "crit": "4"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "IMPALERS",
      "MANIPULATOR",
      "STRAHZZI",
      "TYRISAZ"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Strahzzi Bannerlord on Horseback"
      }
    ]
  },
  {
    "id": "jors",
    "name": "Jors",
    "role": "SPECIALIST CHARACTER",
    "base": "180mm",
    "models": "1",
    "cost": "27 Coins",
    "stats": {
      "actions": "8",
      "armor": "14",
      "health": "24",
      "might": "13",
      "accuracy": "10",
      "evasion": "9",
      "holding": "4"
    },
    "rangedWeapons": [
      {
        "name": "Frostrune Shield",
        "keywords": [
          "MAGICKS"
        ],
        "range": "6",
        "strength": "6",
        "speed": "10"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Danskeggox Axe",
        "keywords": [
          "CONTACT",
          "CLEAVE",
          "CUTTING"
        ],
        "strength": "6",
        "speed": "14",
        "crit": "8"
      },
      {
        "name": "Danskeggox Axe",
        "keywords": [
          "CONTACT",
          "CHOP",
          "CUTTING"
        ],
        "strength": "10",
        "speed": "8",
        "crit": "15"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Frostrune Shield",
        "text": "Halves the Actions of the affected target, rounding up to the nearest whole number, though only if the attack successfully lands. This lasts only through the opponent’s turn."
      }
    ],
    "unitAbilities": [
      {
        "name": "Daemon-Slaying Adrenaline",
        "text": "If Jors successfully kills a model, Jors can perform another Attack so long as he has an Action to use for it. This can stack so long as he has enough Actions, though, as usual, an Attack still costs 1 Action."
      }
    ],
    "keywords": [
      "TITAN",
      "BRAWLER",
      "MAGICKS",
      "LONE WARRIOR",
      "TYRISAZ"
    ],
    "leadership": null
  }
];
