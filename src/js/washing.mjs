const Classes = {
  Bowmaster: "archer",
  Marksman: "archer",
  Shadower: "thief",
  Buccaneer: "bucc",
  Corsair: "corsair",
  "Dark Knight": "warrior",
  Hero: "hero",
  Paladin: "warrior",
  Magician: "magician",
  Beginner: "beginner",
  "Night Lord": "thief",
};

const HealthPointGainMinimumResetAP = {
  archer: 16,
  thief: 16,
  corsair: 20,
  bucc: 40,
  warrior: 50,
  hero: 50,
  magician: 10,
  beginner: 8,
};

const HealthPointGainAverageResetAP = {
  archer: 18,
  thief: 18,
  corsair: 20,
  bucc: 40,
  warrior: 52.5,
  hero: 52.5,
  magician: 15,
  beginner: 10,
};

const HealthPointGainMinimumFreshAP = {
  archer: 16,
  thief: 20,
  corsair: 16,
  bucc: 36,
  warrior: 50,
  hero: 50,
  magician: 6,
  beginner: 8,
};

const HealthPointGainAverageFreshAP = {
  archer: 18,
  thief: 22,
  corsair: 18,
  bucc: 38,
  warrior: 52,
  hero: 52,
  magician: 8,
  beginner: 10,
};

const ManaPointLoss = {
  archer: 12,
  thief: 12,
  corsair: 16,
  bucc: 16,
  warrior: 4,
  hero: 4,
  magician: 30,
  beginner: 8,
};

const MinimumManaPointFunctions = {
  archer: level => ((14 * level) + 148),
  thief: level => ((14 * level) + 148),
  corsair: level => ((18 * level) + 111),
  bucc: level => ((18 * level) + 111),
  warrior: level => ((4 * level) + 156),
  hero: level => ((4 * level) + 56),
  magician: level => ((22 * level) + 488),
  beginner: level => ((10 * level) + 2),
}

const OptimalWashingStrategy = {
  archer: "either",
  thief: "fresh",
  bucc: "reset",
  corsair: "reset",
  warrior: "reset",
  hero: "reset",
  magician: "reset",
  beginner: "either",
}

// GetOptimalWashingStrategy tells which is more optimal
// for the class, fresh APs or APRs into HP
function GetOptimalWashingStrategy(className) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  return OptimalWashingStrategy[internalClassName];
}

// GetWashableManaPoints returns the amount of MP that the
// input character can wash
function GetWashableManaPoints(className, level, currentMana) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var minimumMana = MinimumManaPointFunctions[internalClassName](level);
  return Math.max(currentMana - minimumMana, 0);
}

// GetWashedManaPoints returns the amount of MP washed out by the
// input number of washes
function GetWashedManaPoints(className, numberOfWashes) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  return ManaPointLoss[internalClassName] * numberOfWashes;
}

// GetWashes returns the number of HP washes that the input character can do
function GetWashes(className, washableMana) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var mpLossPerWash = ManaPointLoss[internalClassName];

  return Math.floor(washableMana / mpLossPerWash);
}

// GetMinimalHealthPointGainOptimal returns the minimal amount of HP that the input
// character can gain through washing MP optimally
function GetMinimalHealthPointGainOptimal(className, numFreshAPs, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerFreshAP = HealthPointGainMinimumFreshAP[internalClassName];
  var hpGainPerWashedAP = HealthPointGainMinimumResetAP[internalClassName];

  return (numFreshAPs * hpGainPerFreshAP) + (numWashedAPs * hpGainPerWashedAP);
}

// GetAverageHealthPointGainOptimal returns the average amount of HP that the input
// character can gain through washing MP optimally
function GetAverageHealthPointGainOptimal(className, numFreshAPs, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerFreshAP = HealthPointGainAverageFreshAP[internalClassName];
  var hpGainPerWashedAP = HealthPointGainAverageResetAP[internalClassName];

  return (numFreshAPs * hpGainPerFreshAP) + (numWashedAPs * hpGainPerWashedAP);
}

// GetMinimalHealthPointGainOptimal returns the minimal amount of HP that the input
// character can gain through washing all MP now
function GetMinimalHealthPointGainWashNow(className, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerWashedAP = HealthPointGainMinimumResetAP[internalClassName];

  return numWashedAPs * hpGainPerWashedAP;
}

// GetAverageHealthPointGainOptimal returns the average amount of HP that the input
// character can gain through washing all MP now
function GetAverageHealthPointGainWashNow(className, numWashedAPs) {
  if (!Classes.hasOwnProperty(className)) {
    throw new Exception(`unrecognized class name ${className}`);
  }

  var internalClassName = Classes[className];
  var hpGainPerWashedAP = HealthPointGainAverageResetAP[internalClassName];

  return numWashedAPs * hpGainPerWashedAP;
}

// GetFreshAPsLeft gets the number of fresh APs left for a
// character with the input level
function GetFreshAPsLeft(level) {
  return (200 - level) * 5;
}
