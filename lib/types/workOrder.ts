export interface WorkOrder {
  id: number
  assetId: number
  assignedUserIds: number[]
  companyId: number
  name: string
  priority: string
  status: string
  title: string
  email: string
  description: string
  checklist: Checklist[]
}

export interface Checklist {
  completed: boolean
  task: string
}
