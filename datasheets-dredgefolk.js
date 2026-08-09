/*
  DATASHEETS: dredgefolk
  Generated from the supplied current Wargame PDF.
*/
window.GRIMVEIN_DATASHEETS = window.GRIMVEIN_DATASHEETS || {};
window.GRIMVEIN_DATASHEETS["dredgefolk"] = [
  {
    "id": "oarsreach-anchorlord",
    "name": "Oarsreach Anchorlord",
    "role": "HIGH COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "17 Coins",
    "stats": {
      "actions": "7",
      "armor": "3",
      "health": "17",
      "might": "4",
      "accuracy": "6",
      "evasion": "6",
      "holding": "3"
    },
    "rangedWeapons": [
      {
        "name": "Chainwhip",
        "keywords": [
          "CRUSHING"
        ],
        "range": "12",
        "strength": "3",
        "speed": "30"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Anchor Hammer",
        "keywords": [
          "CONTACT",
          "CRUSHING"
        ],
        "strength": "8",
        "speed": "4",
        "crit": "14"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Chainwhip",
        "text": "Upon a successful hit, this attack pulls the selected target directly in front of Oarsreach Anchorlord for immediate Melee Engagement. Upon doing so, Oarsreach Anchorlord gains a free Retaliate against that enemy target immediately"
      }
    ],
    "unitAbilities": [
      {
        "name": "The Drowned Ship Cares Not",
        "text": "Whilst Oarsreach Anchorlord is alive, all friendly units with the [MACHINE OF WAR] keyword gain +3 Health"
      }
    ],
    "keywords": [
      "BRAWLER",
      "MANIPULATOR"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Drowning Men, Misery’s Oarmen, Reloading Team, Abyssmen"
      }
    ]
  },
  {
    "id": "man-o-war-cloaked-captain",
    "name": "Man-O-War Cloaked Captain",
    "role": "COMMANDER",
    "base": "50mm",
    "models": "1",
    "cost": "15 Coins",
    "stats": {
      "actions": "6",
      "armor": "2",
      "health": "16",
      "might": "3",
      "accuracy": "11",
      "evasion": "1",
      "holding": "4"
    },
    "rangedWeapons": [
      {
        "name": "Medusan Barrage",
        "keywords": [
          "AREA",
          "MAGICKS",
          "BOMBARD",
          "CRUSHING"
        ],
        "range": "8",
        "strength": "4",
        "speed": "8"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Man-O-Leviathan Harpoon",
        "keywords": [
          "IMPALERS",
          "NAUSEA",
          "PIERCING"
        ],
        "strength": "3",
        "speed": "5",
        "crit": "6"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Maritime Barrage",
        "text": "Whilst alive, the friendly unit that Man-O-War Cloaked Captain is attached to gains +2 Strength to both Ranged and Melee weapons when attacking enemy units on an objective IF this model and attached friendly unit are not on that objective themselves"
      }
    ],
    "keywords": [
      "BRAWLER",
      "DUELIST"
    ],
    "leadership": [
      {
        "label": "Can Lead",
        "text": "Drowning Men, Misery’s Oarmen, Reloading Team"
      }
    ]
  },
  {
    "id": "drowning-men",
    "name": "Drowning Men",
    "role": "FORMATIONS UNIT",
    "base": "32mm",
    "models": "8",
    "cost": "6 Coins",
    "stats": {
      "actions": "6",
      "armor": "2",
      "health": "15",
      "might": "2",
      "accuracy": "1",
      "evasion": "7",
      "holding": "2"
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
        "name": "Long Harpoons",
        "keywords": [
          "CONTACT",
          "IMPALERS",
          "PIERCING"
        ],
        "strength": "3",
        "speed": "5",
        "crit": "7"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [],
    "keywords": [
      "BASTION"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Oarsreach Anchorlord, Man-O-War Cloaked Captain"
      }
    ]
  },
  {
    "id": "miserys-oarmen",
    "name": "Misery’s Oarmen",
    "role": "FORMATIONS UNIT",
    "base": "32mm",
    "models": "8",
    "cost": "7 Coins",
    "stats": {
      "actions": "7",
      "armor": "2",
      "health": "13",
      "might": "2",
      "accuracy": "1",
      "evasion": "7",
      "holding": "2"
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
        "name": "Heavy Oar",
        "keywords": [
          "CONTACT",
          "CRUSHING"
        ],
        "strength": "6",
        "speed": "2",
        "crit": "10"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Rowing Team",
        "text": "When embarked on a transport [MACHINE OF WAR], this unit grants the transport +10 Actions, however, it disables that transport’s ranged attacks so long as this unit is embarked. Effect cannot stack"
      }
    ],
    "keywords": [
      "RALLY"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Oarsreach Anchorlord, Man-O-War Cloaked Captain"
      }
    ]
  },
  {
    "id": "reloading-team",
    "name": "Reloading Team",
    "role": "FORMATIONS UNIT",
    "base": "32mm",
    "models": "6",
    "cost": "8 Coins",
    "stats": {
      "actions": "6",
      "armor": "2",
      "health": "15",
      "might": "2",
      "accuracy": "1",
      "evasion": "4",
      "holding": "2"
    },
    "rangedWeapons": [
      {
        "name": "Waterpiercing Cannon",
        "keywords": [
          "CRUSHING"
        ],
        "range": "8",
        "strength": "5",
        "speed": "1"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Waterpiercing Cannon",
        "keywords": [
          "CRUSHING"
        ],
        "strength": "5",
        "speed": "1",
        "crit": "5"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Fast Reloads",
        "text": "When this unit is embarked on a transport [MACHINE OF WAR] with the [BOMBARD] keyword on one of its weapon profiles, that transport’s attacks have 2D6 instead of 1D6 attacks. Effect cannot stack"
      }
    ],
    "keywords": [],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Oarsreach Anchorlord, Man-O-War Cloaked Captain"
      }
    ]
  },
  {
    "id": "fogpiercer",
    "name": "Fogpiercer",
    "role": "MACHINE OF WAR",
    "base": "120mm Oval",
    "models": "1",
    "cost": "19 Coins",
    "stats": {
      "actions": "6",
      "armor": "15",
      "health": "9",
      "might": "6",
      "accuracy": "8",
      "evasion": "2",
      "holding": "2"
    },
    "rangedWeapons": [
      {
        "name": "Fogcannons",
        "keywords": [
          "BOMBARD",
          "CRUSHING"
        ],
        "range": "8",
        "strength": "5",
        "speed": "1"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Ramming Prow",
        "keywords": [
          "CONTACT",
          "AREA",
          "CRUSHING"
        ],
        "strength": "5",
        "speed": "4",
        "crit": "8"
      }
    ],
    "weaponAbilities": [],
    "unitAbilities": [
      {
        "name": "Embark Sailors",
        "text": "This unit can have 1 full friendly unit embarked upon it at the cost of 1 Action. That friendly unit can disembark at any point after the round that they embark. The friendly unit cannot disembark in enemy deployment and cannot disembark directly on any objectives"
      }
    ],
    "keywords": [
      "TRANSPORT"
    ],
    "leadership": null
  },
  {
    "id": "krakenhold",
    "name": "Krakenhold",
    "role": "MACHINE OF WAR",
    "base": "120mm",
    "models": "1",
    "cost": "21 Coins",
    "stats": {
      "actions": "9",
      "armor": "14",
      "health": "11",
      "might": "3",
      "accuracy": "1",
      "evasion": "5",
      "holding": "7"
    },
    "rangedWeapons": [
      {
        "name": "Harpoon Casting Nets",
        "keywords": [
          "CRUSHING"
        ],
        "range": "10",
        "strength": "1",
        "speed": "1"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Ramming Prow",
        "keywords": [
          "CONTACT",
          "AREA",
          "CRUSHING"
        ],
        "strength": "5",
        "speed": "4",
        "crit": "8"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Harpoon Casting Nets",
        "text": "Upon successfully hitting another [MACHINE OF WAR] unit, this disables movement for that enemy unit. Cannot be used on the same target multiple times in a row"
      }
    ],
    "unitAbilities": [
      {
        "name": "Embark Masses",
        "text": "This unit can have 2 full friendly units embarked upon it at the cost of 2 Actions. Those friendly units can disembark at any point after the round that they embark. The friendly units cannot disembark in enemy deployment and cannot disembark directly on any objectives"
      }
    ],
    "keywords": [
      "TRANSPORT"
    ],
    "leadership": null
  },
  {
    "id": "abyssmen",
    "name": "Abyssmen",
    "role": "SPECIALIST UNIT",
    "base": "40mm",
    "models": "3",
    "cost": "14 Coins",
    "stats": {
      "actions": "10",
      "armor": "3",
      "health": "19",
      "might": "5",
      "accuracy": "6",
      "evasion": "6",
      "holding": "5"
    },
    "rangedWeapons": [
      {
        "name": "Waterlogged Matchlocks",
        "keywords": [],
        "range": "6",
        "strength": "7",
        "speed": "2"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Anchorsabres",
        "keywords": [
          "CONTACT",
          "CLEAVE",
          "CUTTING"
        ],
        "strength": "5",
        "speed": "10",
        "crit": "8"
      },
      {
        "name": "Anchorsabres",
        "keywords": [
          "CONTACT",
          "CHOP",
          "CUTTING"
        ],
        "strength": "8",
        "speed": "4",
        "crit": "11"
      }
    ],
    "weaponAbilities": [
      {
        "name": "Waterlogged Matchlocks",
        "text": "Can only be used once per match"
      }
    ],
    "unitAbilities": [
      {
        "name": "Hoist The Colors",
        "text": "When led by an Anchorlord, both this unit and that Anchorlord gain +1 Armor and +1 Health"
      }
    ],
    "keywords": [
      "BRAWLER",
      "DUELIST"
    ],
    "leadership": [
      {
        "label": "Can Be Led By",
        "text": "Oarsreach Anchorlord"
      }
    ]
  }
];
