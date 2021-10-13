export type Challenge = {
  id: ChallengesList;
  errors: {
    [Error in ErrorType]: number;
  }
}

export type User = {
  birthday: {
    years: number;
    months: number;
  };
  spiritAnimal: SpiritAnimal;
  settings: {
    disableAnimations: boolean;
  };
}

export type SpiritAnimal = {
  name: string;
  asset: string;
}

export type GameResults = {
  [Challenge in ChallengesList]: { [Error in ErrorType]: number };
}

export enum ChallengesList {
  WORD_RECOGNITION = "WORD_RECOGNITION",
  SYLLABLE_CLASSIFICATION = "SYLLABLE_CLASSIFICATION",
  VISUAL_ATTENTION = "VISUAL_ATTENTION",
  AUDITIVE_COMPREHENSION = "AUDITIVE_COMPREHENSION",
  ORAL_SPELLING = "ORAL_SPELLING",
  WRITING = "WRITING",
  MEMORY_SPAN = "MEMORY_SPAN",
}

export enum ErrorType {
  GLOBAL = "GLOBAL",
  PHONETIC = "PHONETIC",
  ADD_OR_OMITTED = "ADD_OR_OMITTED",
  PUNCTUATION = "PUNCTUATION",
  TOTAL = "TOTAL",
}

