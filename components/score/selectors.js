import { createSelector } from 'reselect';

const scoreDomain = state => state.score;

export const points = createSelector(
  [scoreDomain],
  score => score.points
);

export default { points };
