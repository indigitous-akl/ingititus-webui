import faker from 'faker';
import uuid from 'uuid/v4';
import { GitHubLanguageType, GitHubRepositoryType, GitHubUserType, IndigitousUserType } from './types';

export const generateGitHubUser = (): GitHubUserType => {
  return {
    uid: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    login: faker.internet.userName(),
    repositories: [],
    languages: [],
  };
};

export const generateGitHubRepository = (): GitHubRepositoryType => {
  return {
    uid: uuid(),
    name: faker.company.bsBuzz(),
    users: [generateGitHubUser()],
  };
};

export const generateGitHubLanguage = (): GitHubLanguageType => {
  return {
    uid: uuid(),
    name: faker.company.bsBuzz(),
    users: [generateGitHubUser()],
  };
};

export const generateGitHubUserWithAssociations = (): GitHubUserType => {
  return {
    uid: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    login: faker.internet.userName(),
    repositories: [generateGitHubRepository(), generateGitHubRepository()],
    languages: [generateGitHubLanguage(), generateGitHubLanguage()],
  };
};

export const generateIndigitousUser = (): IndigitousUserType => {
  return {
    uid: uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    is: generateGitHubUser(),
    mightBe: [generateGitHubUser(), generateGitHubUser(), generateGitHubUser()],
  };
};
