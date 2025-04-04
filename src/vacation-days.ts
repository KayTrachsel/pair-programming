export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

export function calculateProRataVacationDays(employment: Employment): number {
  // TODO: calculate pro rata (consider workload and days worked)
  const { startDate, untilDate, percentage, vacationDays } = employment;
  
 
  
 const timeDiff = untilDate.getTime() - startDate.getTime();
 const workdays = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
 
 const rata = vacationDays * workdays/365 * percentage
  return employment.vacationDays;
}
