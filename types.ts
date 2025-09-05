
export interface Suggestion {
  title: string;
  suggestion: string;
}

export interface AuditData {
  username: string;
  followers: number;
  engagementPercentage: number;
  suggestions: Suggestion[];
}
