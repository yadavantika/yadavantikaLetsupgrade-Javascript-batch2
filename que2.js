window.onload = function () {
    let initialbuses = [
      {
        name: "Shiavni",
        source: "Dombivali",
        destination: "Thane",
        number: 4,
        capacity:60,
      },
      {
        name: "Komal",
        source: "Thane",
        destination: "Mumbai",
        number:9,
        capacity:60,
      },
    ];
  
    if (localStorage.getItem("buses") == null) {
      localStorage.setItem("buses", JSON.stringify(initialbuses));
    }
  };
  
  function display(bussarray = undefined) {
    let tabledata = "";
    let buses;
    if (bussarray == undefined) {
      buses = JSON.parse(localStorage.getItem("buses"));
    } else {
      buses = bussarray;
    }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.capacity}</td>
        <td>
        <button onclick='deleteBus(${index})'>delete</button>
        </td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addBus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let capacity = document.getElementById("capacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = number;
    bus.capacity = capacity;
  
    //   superheroes.push(superhero);
  
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchByNameAndDestination() {
    let searchValue = document.getElementById("search").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        (bus.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) ||
        (bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1)
      );
    });
    
    display(newdata);
  }
  
  function deleteBus(index) {
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.splice(index, 1);
    localStorage.setItem("buses", JSON.stringify(buses));
    display();
  }
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copyBus(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }