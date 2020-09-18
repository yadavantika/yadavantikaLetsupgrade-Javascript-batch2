let staffmember = [
  {
    name:"Anjali",
    age:34,
    city:"Mumbai",
    salary:200000,
  },
  {
    name:"Komal",
    age:24,
    city:"Kolkata",
    salary:300000,
  },
  {
    name:"Devika",
    age:32,
    city:"Pune",
    salary:100000,
  },
  {
    name:"Khushi",
    age:34,
    city:"Pune",
    salary:100000,
  },
  {
    name:"Dhanu",
    age:23,
    city:"Thne",
    salary:100000,
  },
];

function display(stafarray) {
  let tabledata = "";
  stafarray.forEach(function (staff, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${staff.name}</td>
    <td>${staff.age}</td>
    <td>${staff.city}</td>
    <td>${staff.salary}</td>
    <td>
    <button onclick='deleteStaff(${index})'>delete</button>
    </td>
    </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}
display(staffmember);
function searchByNameAndCity() {
  let searchValue = document.getElementById("search").value;

  let newdata = staffmember.filter(function (staff) {
    return (
      (staff.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) ||
      (staff.city.toLowerCase().indexOf(searchValue.toLowerCase())) != -1);
    
  });
  display(newdata);
}


function deleteStaff(index) {
  staffmember.splice(index, 1);
  display(staffmember);
} 