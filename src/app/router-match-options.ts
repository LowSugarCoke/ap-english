import { IsActiveMatchOptions } from '@angular/router';

export const EXACT_MATCH_OPTIONS: IsActiveMatchOptions = {
  paths: 'exact',
  queryParams: 'exact',
  fragment: 'ignored',
  matrixParams: 'ignored',
};

export const DEFAULT_MATCH_OPTIONS: IsActiveMatchOptions = {
  paths: 'subset',
  queryParams: 'subset',
  fragment: 'ignored',
  matrixParams: 'ignored',
};

export function getRouterLinkActiveOptions(
  exact: boolean | undefined
): IsActiveMatchOptions {
  return exact ? EXACT_MATCH_OPTIONS : DEFAULT_MATCH_OPTIONS;
}
