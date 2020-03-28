class UserInfo {
  constructor(form, username, job) {
    this.form = form;
    this.username = username;
    this.job = job;
  }
  setUserInfo() {
    this.form.username.value = this.username.textContent;
    this.form.job.value = this.job.textContent;
  }
  updateUserInfo() {
    this.username.textContent = this.form.username.value;
    this.job.textContent = this.form.job.value;
    this.setUserInfo();
  }
}
