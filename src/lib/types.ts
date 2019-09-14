export interface BaseType {
  uid: string;
  name: string;
}
export interface GitHubRepositoryType extends BaseType {
  users?: GitHubUserType[];
}
export interface GitHubLanguageType extends BaseType {
  users?: GitHubUserType[];
}

export interface GitHubUserType extends BaseType {
  email: string;
  login: string;
  repositories?: GitHubRepositoryType[];
  languages?: GitHubLanguageType[];
}

export interface IndigitousUserType extends BaseType {
  email: string;
  is?: GitHubUserType;
  mightBe?: GitHubUserType[];
}
