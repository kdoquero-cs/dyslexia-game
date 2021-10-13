import {
  GameResults,
  ChallengesList,
} from './GameValidation.constants';

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
