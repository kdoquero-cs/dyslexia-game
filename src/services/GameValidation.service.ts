type Challenge = {
  id: ChallengesList;
  errors: {
    [Error in ErrorType]: number;
  }
}

type User = {
  birthday: {
    years: number;
    months: number;
  };
  spiritAnimal: SpiritAnimal;
  settings: {
    disableAnimations: boolean;
  };
}

type SpiritAnimal = {
  name: string;
  asset: string;
}

type GameResults = {
  [Challenge in ChallengesList]: { [Error in ErrorType]: number };
}

enum ChallengesList {
  WORD_RECOGNITION = "WORD_RECOGNITION",
  SYLLABLE_CLASSIFICATION = "SYLLABLE_CLASSIFICATION",
  VISUAL_ATTENTION = "VISUAL_ATTENTION",
  AUDITIVE_COMPREHENSION = "AUDITIVE_COMPREHENSION",
  ORAL_SPELLING = "ORAL_SPELLING",
  WRITING = "WRITING",
  MEMORY_SPAN = "MEMORY_SPAN",
}

enum ErrorType {
  GLOBAL = "GLOBAL",
  PHONETIC = "PHONETIC",
  ADD_OR_OMITTED = "ADD_OR_OMITTED",
  PUNCTUATION = "PUNCTUATION",
  TOTAL = "TOTAL",
}

export class GameValidationService {
  private state: GameResults;

  validateChallenge(challengeId: ChallengesList, answers) {
    switch (challengeId) {
      case ChallengesList.WORD_RECOGNITION:
        console.log('Validate...', answers);
        break;
    }
  }

  getResults(): GameResults {
    return this.state;
  }
}
