export interface GitHubRepositoryType {
  uid: string;
  name: string;
  users: GitHubUserType[];
}
export interface GitHubLanguageType {
  uid: string;
  name: string;
  users: GitHubUserType[];
}

export interface GitHubUserType {
  uid: string;
  name: string;
  email: string;
  login: string;
  repositories: GitHubRepositoryType[];
  languages: GitHubLanguageType[];
}

export interface IndigitousUserType {
  uid: string;
  name: string;
  email: string;
  is: GitHubUserType | null;
  mightBe: GitHubUserType[];
}
