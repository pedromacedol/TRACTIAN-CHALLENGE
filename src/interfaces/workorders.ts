export type ChecklistItem = { completed: boolean; task: string };

export interface IWorkorders {
  assetId: number;
  assignedUserIds: Array<number>;
  checklist: Array<ChecklistItem>;
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}
