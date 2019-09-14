import faker from 'faker';
import uuid from 'uuid/v4';
import { GitHubLanguageType, GitHubRepositoryType, GitHubUserType, IndigitousUserType } from './types';

export const generateGitHubLanguage = (): GitHubLanguageType => {
  return {
    id: uuid(),
    name: faker.company.bsBuzz(),
  };
};

export const generateGitHubRepository = (): GitHubRepositoryType => {
  return {
    id: uuid(),
    name: faker.company.bsBuzz(),
  };
};

export const generateGitHubUser = (): GitHubUserType => {
  return {
    id: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    login: faker.internet.userName(),
    repositories: [generateGitHubRepository(), generateGitHubRepository()],
    languages: [generateGitHubLanguage(), generateGitHubLanguage()],
  };
};

export const generateIndigitousUser = (): IndigitousUserType => {
  return {
    id: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    is: generateGitHubUser(),
    mightBe: [generateGitHubUser(), generateGitHubUser(), generateGitHubUser()],
  };
};
