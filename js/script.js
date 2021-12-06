//Variables
const itemsPerPage = 9;
let studentList = document.querySelector(".student-list");

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  let startIndex = page * itemsPerPage - itemsPerPage; //shows the start index of the array '0'
  let endIndex = page * itemsPerPage; //shows end of index of array '42'
  studentList.innerHTML = "";
  //for loop to display profile picture, name, email, and registered date of each student item
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src =${list[i].picture.thumbnail} alt="profile-picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined on ${list[i].registered.date}</span>
         </div>      
      </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  let numOfPages = Math.ceil(list.length / itemsPerPage); //takes list.length ('42') and divides by items per page ('9') then rounds up to the next largest integer to determine the number of pages
  let linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  //for loop to create an active class through template literal for the page buttons
  for (let i = 1; i <= numOfPages; i++) {
    let button = `<li>
         <button type="button">${[i]}</button>
     </li>`;
    linkList.insertAdjacentHTML("beforeend", button);

    let selectBtn = document.querySelector("button:first-child");
    selectBtn.className = "active";
    linkList.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        let activeBtn = document.querySelector(".active");
        activeBtn.className = "";
        event.target.className = "active";
        showPage(list, event.target.textContent);
      }
    });
  }
}

//Search bar function to search through student data
// function searchBar(list) {
//   let matches = [];
//   for (let i = 0; i < list.length; i++) {
//     const firstName = list[i].name.first.toLowerCase();
//     const lastName = list[i].name.last.toLowerCase();
//     const fullName = firstName + lastName;
//     if (fullName.includes(searchInput.value.toLowerCase())) {
//       matches.push(list[i]);
//       showPage(matches, 1);
//       addPagination(matches);
//     } else if (matches.length === 0) {
//       studentList.innerHTML = "";
//       let zeroResults = `<div class="no-results">
//          <h1>Sorry, no results were found.</h1>
//        </div>`;
//       studentList.insertAdjacentHTML("beforeend", zeroResults);
//       addPagination(0);
//     }
//   }
// }

// Call functions
showPage(data, 1);
addPagination(data);
