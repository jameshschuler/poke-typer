import { Effectiveness, Types } from "./utils/enums";

export interface TypeData {
  // I'm *type* type attacking
  offense: Map<Types, Effectiveness>;
  // I'm a *type* defending
  defense: Map<Types, Effectiveness>;
}

export interface GridTile {
  name: Types;
  state: Effectiveness;
}

export function generateInitialGrid(): GridTile[] {
  return Object.keys(Types).map((key: string) => {
    return {
      name: key as Types,
      state: Effectiveness.Normal,
    };
  });
}

export const typesData = new Map<string, TypeData>([
  [
    Types.Bug,
    {
      offense: new Map<Types, Effectiveness>([
        [Types.Dark, Effectiveness.SuperEffective],
        [Types.Fairy, Effectiveness.NotVeryEffective],
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.NotVeryEffective],
        [Types.Flying, Effectiveness.NotVeryEffective],
        [Types.Ghost, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.SuperEffective],
        [Types.Poison, Effectiveness.NotVeryEffective],
        [Types.Psychic, Effectiveness.SuperEffective],
        [Types.Steel, Effectiveness.NotVeryEffective],
      ]),
      defense: new Map<Types, Effectiveness>([
        [Types.Fire, Effectiveness.SuperEffective],
        [Types.Flying, Effectiveness.SuperEffective],
        [Types.Rock, Effectiveness.SuperEffective],
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Ground, Effectiveness.NotVeryEffective],
      ]),
    },
  ],
  [
    Types.Dark,
    {
      offense: new Map<Types, Effectiveness>([
        [Types.Dark, Effectiveness.NotVeryEffective],
        [Types.Fairy, Effectiveness.NotVeryEffective],
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Ghost, Effectiveness.SuperEffective],
        [Types.Psychic, Effectiveness.SuperEffective],
      ]),
      defense: new Map<Types, Effectiveness>([
        [Types.Bug, Effectiveness.SuperEffective],
        [Types.Dark, Effectiveness.NotVeryEffective],
        [Types.Fairy, Effectiveness.SuperEffective],
        [Types.Fighting, Effectiveness.SuperEffective],
        [Types.Ghost, Effectiveness.NotVeryEffective],
        [Types.Psychic, Effectiveness.NoEffect],
      ]),
    },
  ],
  [
    Types.Dragon,
    {
      offense: new Map<Types, Effectiveness>([
        [Types.Dragon, Effectiveness.SuperEffective],
        [Types.Fairy, Effectiveness.NoEffect],
        [Types.Steel, Effectiveness.NotVeryEffective],
      ]),
      defense: new Map<Types, Effectiveness>([
        [Types.Dragon, Effectiveness.SuperEffective],
        [Types.Fairy, Effectiveness.SuperEffective],
        [Types.Ice, Effectiveness.SuperEffective],
        [Types.Electric, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Water, Effectiveness.NotVeryEffective],
      ]),
    },
  ],
  [
    Types.Electric,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Electric, Effectiveness.NotVeryEffective],
        [Types.Flying, Effectiveness.NotVeryEffective],
        [Types.Steel, Effectiveness.NotVeryEffective],
        [Types.Ground, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Fairy,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Dragon, Effectiveness.NoEffect],
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Dark, Effectiveness.NotVeryEffective],
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Poison, Effectiveness.SuperEffective],
        [Types.Steel, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Fighting,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Dark, Effectiveness.NotVeryEffective],
        [Types.Rock, Effectiveness.NotVeryEffective],
        [Types.Fairy, Effectiveness.SuperEffective],
        [Types.Flying, Effectiveness.SuperEffective],
        [Types.Psychic, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Fire,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Fairy, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.NotVeryEffective],
        [Types.Ice, Effectiveness.NotVeryEffective],
        [Types.Steel, Effectiveness.NotVeryEffective],
        [Types.Ground, Effectiveness.SuperEffective],
        [Types.Rock, Effectiveness.SuperEffective],
        [Types.Water, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Flying,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Ground, Effectiveness.NoEffect],
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Electric, Effectiveness.SuperEffective],
        [Types.Ice, Effectiveness.SuperEffective],
        [Types.Rock, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Ghost,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Fighting, Effectiveness.NoEffect],
        [Types.Normal, Effectiveness.NoEffect],
        [Types.Poison, Effectiveness.NotVeryEffective],
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Dark, Effectiveness.SuperEffective],
        [Types.Ghost, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Grass,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Water, Effectiveness.NotVeryEffective],
        [Types.Electric, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Ground, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.SuperEffective],
        [Types.Ice, Effectiveness.SuperEffective],
        [Types.Poison, Effectiveness.SuperEffective],
        [Types.Flying, Effectiveness.SuperEffective],
        [Types.Bug, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Ground,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Electric, Effectiveness.NoEffect],
        [Types.Poison, Effectiveness.NotVeryEffective],
        [Types.Rock, Effectiveness.NotVeryEffective],
        [Types.Water, Effectiveness.SuperEffective],
        [Types.Grass, Effectiveness.SuperEffective],
        [Types.Ice, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Ice,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Ice, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.SuperEffective],
        [Types.Fighting, Effectiveness.SuperEffective],
        [Types.Rock, Effectiveness.SuperEffective],
        [Types.Steel, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Normal,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Ghost, Effectiveness.NoEffect],
        [Types.Fighting, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Poison,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Poison, Effectiveness.NotVeryEffective],
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Fairy, Effectiveness.NotVeryEffective],
        [Types.Ground, Effectiveness.SuperEffective],
        [Types.Psychic, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Psychic,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Fighting, Effectiveness.NotVeryEffective],
        [Types.Psychic, Effectiveness.NotVeryEffective],
        [Types.Bug, Effectiveness.SuperEffective],
        [Types.Ghost, Effectiveness.SuperEffective],
        [Types.Dark, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Rock,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Normal, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.NotVeryEffective],
        [Types.Poison, Effectiveness.NotVeryEffective],
        [Types.Flying, Effectiveness.NotVeryEffective],
        [Types.Water, Effectiveness.SuperEffective],
        [Types.Grass, Effectiveness.SuperEffective],
        [Types.Fighting, Effectiveness.SuperEffective],
        [Types.Ground, Effectiveness.SuperEffective],
        [Types.Steel, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Steel,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Poison, Effectiveness.NoEffect],
        [Types.Normal, Effectiveness.NotVeryEffective],
        [Types.Grass, Effectiveness.NotVeryEffective],
        [Types.Ice, Effectiveness.NotVeryEffective],
        [Types.Flying, Effectiveness.NotVeryEffective],
        [Types.Psychic, Effectiveness.NotVeryEffective],
        [Types.Bug, Effectiveness.NotVeryEffective],
        [Types.Rock, Effectiveness.NotVeryEffective],
        [Types.Dragon, Effectiveness.NotVeryEffective],
        [Types.Steel, Effectiveness.NotVeryEffective],
        [Types.Fairy, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.SuperEffective],
        [Types.Fighting, Effectiveness.SuperEffective],
        [Types.Ground, Effectiveness.SuperEffective],
      ]),
    },
  ],
  [
    Types.Water,
    {
      offense: new Map<Types, Effectiveness>([]),
      defense: new Map<Types, Effectiveness>([
        [Types.Water, Effectiveness.NotVeryEffective],
        [Types.Fire, Effectiveness.NotVeryEffective],
        [Types.Ice, Effectiveness.NotVeryEffective],
        [Types.Steel, Effectiveness.NotVeryEffective],
        [Types.Electric, Effectiveness.SuperEffective],
        [Types.Grass, Effectiveness.SuperEffective],
      ]),
    },
  ],
]);
