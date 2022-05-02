export const userInfo = {
  userName: '',
  resources: {
    minerals: {
      amount: 0,
      mineralsPerTick: parseFloat('0.001')
    },
    technologh: {}, //
    military: {}
  },
  mining: {
    aiMiningUnlocked: false,
    aiMiners: 0
  }
};
export class Resources { 
  constructor(userState, setUserState) {
    this.userData = userState;
    this.setUserState = setUserState;
  }
  increaseResources = () => {
    let { amount } = this.userData.resources.minerals;
    this.setUserState({
      ...this.userData,
      resources: {
        ...this.userData.resources,
        minerals: {
          ...this.userData.resources.minerals,
          amount: amount + this.userData.resources.minerals.mineralsPerTick
        }
      }
    });
  };
  additionalMiner = () => {
    this.setUserState({
      ...this.userData,
      mining: {
        ...this.userData.mining,
        aiMiners: this.userData.mining.aiMiners++
      }
    });
  };
  displayProps() {
    console.log('userState:', this.userData);
  }
}

export class CalculateResources extends Resources {
  constructor(userState, setUserState) {
    super();
    this.userData = userState;
    this.setUserState = setUserState;
  }
  spendResources() {
    console.log('resources', this.userData.resources);
  }
}
