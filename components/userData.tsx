export const userInfo = {
  userName: '',
    resources: {
    minerals: {
      amount: 0,
      mineralsPerTick: 1
    }
  },
  mining: {
    aiMiningUnlocked: false,
    aiMiners: 0
  },
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
  displayProps = () => {
    console.log(this.userData);
  };
}
