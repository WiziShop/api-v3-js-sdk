import DateTimeFormat = Intl.DateTimeFormat;

export interface GroupPlanDto {
  g_id: number;
  name: string;
  type: string;
  is_discounted: boolean;
  contract_start_date: DateTimeFormat;
  contract_end_date: DateTimeFormat;
  newt_plan_name: string;
  created_at: DateTimeFormat;
}
