export interface Asset {
  id: number
  name: string
  model: string
  status: number
  unitId: number
  sensors: string[]
  assignedUserIds: number[]
  companyId: number
  healthHistory: HealthHistory[]
  healthScore: number
  image: string
  metrics: Metrics
  specifications: Specifications
}

export interface HealthHistory {
  status: string
  timestamp: Date
}

export interface Metrics {
  lastUptimeAt: Date
  totalCollectsUptime: number
  totalUptime: number
}

export interface Specifications {
  maxTemp: number
}
