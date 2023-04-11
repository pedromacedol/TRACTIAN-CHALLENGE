type HealthHistorytItem = {
  status: string;
  timestamp: Date;
};

type MetricsItem = {
  lastUptimeAt: Date;
  totalCollectsUptime: number;
  totalUptime: number;
};

type SpecificationItem = {
  maxTemp: number;
  power?: number;
  rpm?: number;
};

export default interface IActives {
  assignedUserIds: Array<number>;
  companyId: string;
  healthHistory: Array<HealthHistorytItem>;
  healthscore: number;
  id: number;
  image: string;
  metrics: MetricsItem;
  model: string;
  name: string;
  sensors: Array<string>;
  specifications: SpecificationItem;
  status: string;
  unitID: number;
}
