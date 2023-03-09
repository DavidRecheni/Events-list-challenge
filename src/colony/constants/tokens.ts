const TOKENS = {
  "0x0dd7b8f3d1fa88FAbAa8a04A0c7B52FC35D4312c": "BLNY",
  "0x6B175474E89094C44Da98b954EedeAC495271d0F": "DAI",
} as const;

export default TOKENS;

export type TokenAddress = keyof typeof TOKENS;
