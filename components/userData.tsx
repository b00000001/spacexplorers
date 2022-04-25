export const userInfo = {
  resources: 0,
  resourcesPerTick: 1,
  mining: false,
  userName: ''
};

export class Resources {
  constructor(userState, setUserState) {
    this.userData = userState;
    this.setUserState = setUserState
  }
  increaseResources = () => {
    this.setUserState({
      ...this.userData,
      resources: this.userData.resources + this.userData.resourcesPerTick
      });
  };
  displayProps = () => {
    console.log(this.userData);
  }
}