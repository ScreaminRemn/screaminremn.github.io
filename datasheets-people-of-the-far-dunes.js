/*
  DATASHEETS: people-of-the-far-dunes
  Add another unit by copying one object inside the [ ... ] array,
  or copy the example from DATASHEET-TEMPLATE.js.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["people-of-the-far-dunes"] = [
  {
    "id": "he-of-a-thousand-hands",
    "name": "He Of A Thousand Hands",
    "role": "SPECIALIST CHARACTER",
    "base": "60mm",
    "models": "x1",
    "cost": "0 Coins",
    "stats": {
      "actions": "12",
      "armor": "5",
      "health": "17",
      "holding": "6",
      "might": "6",
      "accuracy": "30",
      "evasion": "4"
    },
    "rangedWeapons": [
      {
        "name": "Self Annihilation",
        "keywords": [
          "MAGICKS",
          "AREA"
        ],
        "range": "7",
        "strength": "3",
        "speed": "6"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Mighty Push",
        "keywords": [
          "CONTACT"
        ],
        "strength": "2",
        "speed": "4",
        "crit": "4"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Self Annihilation",
        "text": "Attacks all enemy models within range."
      },
      {
        "name": "Mighty Push",
        "text": "If He Of A Thousand Hands is on an objective, Mighty Push will make the selected enemy unit move back 3 inches in the direction that they approached from. If that unit teleported to reach that position, this undoes the teleport."
      }
    ],
    "unitAbilities": [
      {
        "name": "Summoned Djinn",
        "text": "As a summoned Djinn, He Of A Thousand Hands cannot be deployed at the beginning of the match. Instead, he can only appear after two enemy units have been slain in succession."
      },
      {
        "name": "Thousand Palms",
        "text": "Up to 3 Actions can be taken to use Mighty Push at a Range of 5, but they no longer apply damage."
      }
    ],
    "keywords": [
      "MAGICKS",
      "MANIPULATOR",
      "LONE WARRIOR",
      "DJINN",
      "SUMMONED"
    ],
    "leadership": null
  },
  {
    "id": "ilahsa",
    "name": "Ilahsa",
    "role": "SPECIALIST CHARACTER",
    "base": "60mm",
    "models": "1",
    "cost": "0 Coins",
    "stats": {
      "actions": "8",
      "armor": "6",
      "health": "23",
      "holding": "11",
      "might": "3",
      "accuracy": "9",
      "evasion": "1"
    },
    "rangedWeapons": [
      {
        "name": "Plated Visage",
        "keywords": [
          "MAGICKS",
          "THUNDER"
        ],
        "range": "6",
        "strength": "6",
        "speed": "11"
      },
      {
        "name": "Plated Visage",
        "keywords": [
          "MAGICKS",
          "FIRE"
        ],
        "range": "6",
        "strength": "11",
        "speed": "6"
      },
      {
        "name": "Plated Visage",
        "keywords": [
          "MAGICKS",
          "GUST"
        ],
        "range": "11",
        "strength": "6",
        "speed": "6"
      }
    ],
    "meleeWeapons": [
      {
        "name": "NONE",
        "keywords": [],
        "strength": "0",
        "speed": "0",
        "crit": "0"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Plated Visage",
        "text": "For any attack, Ilahsa can choose to attack with any of the three Plated Visage profiles, but only one per attack."
      }
    ],
    "unitAbilities": [
      {
        "name": "Summoned Djinn",
        "text": "As a summoned Djinn, Ilahsa cannot be deployed at the beginning of the match. Instead, she can only appear after any friendly unit has successfully survived melee engagement with a 15 Coin unit or higher."
      },
      {
        "name": "Shield The Maiden",
        "text": "All models of whatever unit Ilahsa leads, if she leads a unit, must be killed before she can be targeted."
      },
      {
        "name": "The Life-Giver",
        "text": "Once per match, Ilahsa can resurrect one friendly unit worth 12 Coins or lower, in which case, the resurrected unit is placed either on the nearest friendly-controlled Objective or, if that is not available, in Deployment."
      }
    ],
    "keywords": [
      "MAGICKS",
      "UNDYING",
      "DJINN",
      "SUMMONED"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Powder-Dancers, Spice Duelists"
      }
    ]
  },
  {
    "id": "golden-wheel-bearer",
    "name": "Golden Wheel Bearer",
    "role": "SPECIALIST CHARACTER",
    "base": "60mm",
    "models": "1",
    "cost": "0 Coins",
    "stats": {
      "actions": "8",
      "armor": "4",
      "health": "20",
      "holding": "4",
      "might": "13",
      "accuracy": "1",
      "evasion": "1"
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
        "name": "Golden Wheel",
        "keywords": [
          "CONTACT",
          "AREA"
        ],
        "strength": "13",
        "speed": "1",
        "crit": "30"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Golden Wheel",
        "text": "The Melee Range of this attack is 4” instead of 2”"
      }
    ],
    "unitAbilities": [
      {
        "name": "Summoned Djinn",
        "text": "As a summoned Djinn, the Golden Wheel Bearer cannot be deployed at the beginning of the match. Instead, he can only appear after two enemy units have been slain in succession."
      },
      {
        "name": "Deathbind",
        "text": "If Golden Wheel Bearer has 1 or 2 Health remaining, the next time that Golden Wheel Bearer is in a Melee Engagement, the Golden Wheel Bearer can attack first no matter what."
      }
    ],
    "keywords": [
      "BRAWLER",
      "EXECUTIONER",
      "LONE WARRIOR",
      "DJINN",
      "SUMMONED"
    ],
    "leadership": null
  },
  {
    "id": "grand-seer",
    "name": "Grand Seer",
    "role": "",
    "base": "50mm",
    "models": "1",
    "cost": "14 Coins",
    "stats": {
      "actions": "5",
      "armor": "4",
      "health": "14",
      "holding": "5",
      "might": "5",
      "accuracy": "13",
      "evasion": "2"
    },
    "rangedWeapons": [
      {
        "name": "Lesser Plated Visage",
        "keywords": [
          "MAGICKS",
          "THUNDER"
        ],
        "range": "5",
        "strength": "5",
        "speed": "9"
      },
      {
        "name": "Lesser Plated Visage",
        "keywords": [
          "MAGICKS",
          "NAUSEA",
          "AREA"
        ],
        "range": "6",
        "strength": "3",
        "speed": "4"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Jambiya",
        "keywords": [
          "CONTACT",
          "CLEAVE"
        ],
        "strength": "3",
        "speed": "11",
        "crit": "5"
      },
      {
        "name": "Jambiya",
        "keywords": [
          "CONTACT",
          "IMPALERS"
        ],
        "strength": "4",
        "speed": "8",
        "crit": "7"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Lesser Plated Visage",
        "text": "For any attack, Grand Seer can choose to attack with any of the two Lesser Plated Visage profiles, but only one per attack."
      }
    ],
    "unitAbilities": [
      {
        "name": "Adrenaline Powder",
        "text": "All friendly units have +1 Actions so long as the Grand Seer is alive."
      }
    ],
    "keywords": [
      "MAGICKS",
      "SEER",
      "NOMAD"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Powder-Dancers, Spice Duelists"
      }
    ]
  },
  {
    "id": "powder-dancers",
    "name": "Powder-Dancers",
    "role": "SPECIALIST UNIT",
    "base": "40 mm",
    "models": "3",
    "cost": "12 Coins",
    "stats": {
      "actions": "6",
      "armor": "4",
      "health": "13",
      "holding": "6",
      "might": "3",
      "accuracy": "7",
      "evasion": "4"
    },
    "rangedWeapons": [
      {
        "name": "Brightpowder",
        "keywords": [
          "AREA"
        ],
        "range": "8",
        "strength": "4",
        "speed": "5"
      },
      {
        "name": "Sparkpowder",
        "keywords": [
          "AREA"
        ],
        "range": "8",
        "strength": "6",
        "speed": "6"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Jambiya",
        "keywords": [
          "CONTACT",
          "CLEAVE"
        ],
        "strength": "3",
        "speed": "11",
        "crit": "5"
      },
      {
        "name": "Jambiya",
        "keywords": [
          "CONTACT",
          "IMPALERS"
        ],
        "strength": "4",
        "speed": "8",
        "crit": "7"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Brightpowder",
        "text": "All affected enemy units have -1 Accuracy for one round. This can stack up to a total of -3 Accuracy."
      }
    ],
    "unitAbilities": [],
    "keywords": [
      "MANIPULATOR",
      "NOMAD"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Grand Seer"
      }
    ]
  },
  {
    "id": "spice-duelist",
    "name": "Spice Duelist",
    "role": "FORMATIONS UNIT",
    "base": "40 mm",
    "models": "6",
    "cost": "9 Coins",
    "stats": {
      "actions": "8",
      "armor": "5",
      "health": "14",
      "holding": "5",
      "might": "6",
      "accuracy": "1",
      "evasion": "3"
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
        "name": "Burned Shamshir",
        "keywords": [
          "CONTACT",
          "CLEAVE"
        ],
        "strength": "5",
        "speed": "9",
        "crit": "7"
      },
      {
        "name": "Burned Shamshir",
        "keywords": [
          "CONTACT",
          "CHOP"
        ],
        "strength": "8",
        "speed": "5",
        "crit": "10"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "BRAWLER",
      "NOMAD"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Grand Seer"
      }
    ]
  }
];
