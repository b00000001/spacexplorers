export const userInfo = {
  resources: {
    resources: 0,
    resourcesPerTick: 1
  },
  mining: false,
  userName: ''
};

export class Resources {
  constructor(userState, setUserState) {
    this.userData = userState;
    this.setUserState = setUserState;
  }
  increaseResources = () => {
    let { resources } = this.userData.resources;
    this.setUserState({
      ...this.userData,
      resources: {
        ...this.userData.resources,
        resources:
          this.userData.resources.resources +
          this.userData.resources.resourcesPerTick
      }
    });
  };
  displayProps = () => {
    console.log(this.userData);
  };
}
