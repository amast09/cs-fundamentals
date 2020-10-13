const MAX_NUMBER_OF_INSTANCES = Math.pow(10, 8);
const MIN_NUMBER_OF_INSTANCES = 1;
const LOW_UTILIZATION_THRESHOLD = 25;
const HIGH_UTILIZATION_THRESHOLD = 60;

const isUtilizationToLow = (utilization: number): boolean =>
  utilization < LOW_UTILIZATION_THRESHOLD;

const isUtilizationToHigh = (utilization: number): boolean =>
  utilization > HIGH_UTILIZATION_THRESHOLD;

const increaseInstances = (currentlyRunningInstances: number): number => {
  const proposedIncrease = currentlyRunningInstances * 2;

  return proposedIncrease > MAX_NUMBER_OF_INSTANCES
    ? currentlyRunningInstances
    : proposedIncrease;
};

const decreaseInstances = (currentlyRunningInstances: number): number => {
  const proposedDecrease = Math.ceil(currentlyRunningInstances / 2);

  return proposedDecrease < MIN_NUMBER_OF_INSTANCES
    ? currentlyRunningInstances
    : proposedDecrease;
};

const finalInstances = (
  initialInstances: number,
  averageUtil: number[]
): number => {
  let utilizationIndex = 0;
  let currentlyRunningInstances = initialInstances;

  while (utilizationIndex < averageUtil.length) {
    const currentUtilization = averageUtil[utilizationIndex];
    let nextRunningInstances = currentlyRunningInstances;

    if (isUtilizationToLow(currentUtilization)) {
      nextRunningInstances = decreaseInstances(currentlyRunningInstances);
    } else if (isUtilizationToHigh(currentUtilization)) {
      nextRunningInstances = increaseInstances(currentlyRunningInstances);
    }

    if (nextRunningInstances !== currentlyRunningInstances) {
      currentlyRunningInstances = nextRunningInstances;
      utilizationIndex = utilizationIndex + 11;
    } else {
      utilizationIndex = utilizationIndex + 1;
    }
  }

  return currentlyRunningInstances;
};

export default finalInstances;
