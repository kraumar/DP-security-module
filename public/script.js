const card = document.querySelector(".card-body");

const getUserQuery = () => {
  return document.getElementById("userQuery").value;
};

const getCheckedRole = () => {
  return document.querySelector(`input[name="groupOfDefaultRadios"]:checked`)
    .value;
};

const sendBtn = document.getElementById("submitBtn");
sendBtn.addEventListener("click", e => {
  // uncomment below if when you want just one reply
  // if (card.childElementCount > 1) {
  //   card.removeChild(card.lastElementChild);
  // }

  e.preventDefault();

  const userQuery = getUserQuery();
  const checkedRole = getCheckedRole();

  fetch("http://localhost:3000/marekkrauze", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },

    //serialize your JSON body
    body: JSON.stringify({
      userQuery,
      checkedRole
    })
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      const stringifyJSON = JSON.stringify(data.resultFromMySQL);
      card.insertAdjacentHTML(
        "beforeend",
        `<div><label style="color: #757575;" class="font-weight-bold text-center">Reply</label>
        <!-- Reply -->
        <div class="md-form">
          <p><strong>Username</strong>: ${data.username}(to dodatkowo, domyslnie tego nie bedzie ;))</p>
          <p><strong>UserQuery</strong>: ${data.userQuery}</p>
          <p><strong>Checked Role</strong>: ${data.checkedRole}</p>
          <p><strong>Test calling another function inside backend</strong>: ${data.write}</p>
          <p><strong>acl_table_permission</strong>: ${stringifyJSON}</p>
        </div></>`
      );

      console.log(data.resultFromMySQL);
    });
});
