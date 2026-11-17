export type UseIssuesResult = {
  handleIssueDown: (currentIssue: number) => void;
  handleIssueUp: () => void;
  currentIssue: number;
  allIssues: Array<number>;
};
