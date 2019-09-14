export interface GitHubRepositoryType {
  id: string;
  name: string;
}
export interface GitHubLanguageType {
  id: string;
  name: string;
}

export interface GitHubUserType {
  id: string;
  name: string;
  email: string;
  login: string;
  repositories: GitHubRepositoryType[];
  languages: GitHubLanguageType[];
}

export interface IndigitousUserType {
  id: string;
  name: string;
  email: string;
  is: GitHubUserType | null;
  mightBe: GitHubUserType[];
}
