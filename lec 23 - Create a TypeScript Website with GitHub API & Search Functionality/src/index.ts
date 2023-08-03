
const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
const mainContainer = document.querySelector(".main_container") as HTMLElement;

console.log(getUserName);
console.log(formSubmit);
console.log(mainContainer);

// define contract of an object
interface UserData {
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string;
};


async function fetchData<T>(url:string, option?:RequestInit) : Promise<T> {

    const response = await fetch(url,option);
    
    if( !response.ok){
        throw new Error(
            "Network Error: "
            );
        }

    const data = await response.json();

    console.log(data);
    return data;
}

const showResultInUI = (sinleUser:UserData) => {

    const {avatar_url,login,url,location} = sinleUser;

    mainContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <img src=${avatar_url}/>
            <hr/>
            <div class="card-footer">
                <img src="${avatar_url}">
                <a href="${url}">${login}</a>
            </div>
        </div>`
    );
};

async function fetchUserData(url:string){

    const userData = fetchData<UserData[]>(url,{});

    (await userData).forEach( (singleUser) => {

        showResultInUI(singleUser);

    })
}


// default function call whenever the page reload
fetchUserData("https://api.github.com/users");


// search functions
formSubmit.addEventListener("submit", async (e) => {

    e.preventDefault();

    const searchTerm = getUserName.value.toLowerCase();

    try{
        const url = "https://api.github.com/users";

        const allUserData = await fetchData<UserData[]>(url,{});

        const matchUser = allUserData.filter( (user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });

        // clear the previous data
        mainContainer.innerHTML="";

        if(matchUser.length === 0) {
            mainContainer?.insertAdjacentHTML(
                "beforeend",
                `<p class="empty-msg">No Matching User Found.</p>`
            );
        }
        else{
            matchUser.forEach( (singleUser) => {
                showResultInUI(singleUser);
            });
        }

    }
    catch(error){
        console.log("error", error);
    }

});