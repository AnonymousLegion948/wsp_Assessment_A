window.onload = async () => {
    initLoginForm();
  };
  
  async function loadUserInfo() {
    const resp = await fetch("/userInfo");
    if (resp.status === 200) {
      const user = await resp.json();
      const welcomeTitle = document.createElement("h1");
      welcomeTitle.textContent = `Welcome Back, ${user.username}`;
      document.querySelector("#welcome").appendChild(welcomeTitle);
      document.querySelector("#form-login").innerHTML = "";
    }
  }
  
  function initLoginForm() {
    document.querySelector("#form-login").addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const username = form.testUsername.value;
      const password = form.password.value;
  
      const resp = await fetch("/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (resp.status === 200) {
        loadUserInfo();
      } else {
        // ...
      }
    });
  }
  let hello = 123
  console.log (hello) 