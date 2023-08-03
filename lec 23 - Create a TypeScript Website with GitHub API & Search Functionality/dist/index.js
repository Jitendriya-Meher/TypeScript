"use strict";
const getUserName = document.querySelector("#user");
const formSubmit = document.querySelector(".form");
const mainContainer = document.querySelector(".main_container");
console.log(getUserName);
console.log(formSubmit);
console.log(mainContainer);
;
async function fetchData(url, option) {
    const response = await fetch(url, option);
    if (!response.ok) {
        throw new Error("Network Error: ");
    }
    const data = await response.json();
    console.log(data);
    return data;
}
const showResultInUI = (sinleUser) => {
    const { avatar_url, login, url, location } = sinleUser;
    mainContainer.insertAdjacentHTML("beforeend", `<div class="card">
            <img src=${avatar_url}/>
            <hr/>
            <div class="card-footer">
                <img src="${avatar_url}">
                <a href="${url}">${login}</a>
            </div>
        </div>`);
};
async function fetchUserData(url) {
    const userData = fetchData(url, {});
    (await userData).forEach((singleUser) => {
        showResultInUI(singleUser);
    });
}
// default function call whenever the page reload
fetchUserData("https://api.github.com/users");
// search functions
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUserName.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await fetchData(url, {});
        const matchUser = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        // clear the previous data
        mainContainer.innerHTML = "";
        if (matchUser.length === 0) {
            mainContainer?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No Matching User Found.</p>`);
        }
        else {
            matchUser.forEach((singleUser) => {
                showResultInUI(singleUser);
            });
        }
    }
    catch (error) {
        console.log("error", error);
    }
});
