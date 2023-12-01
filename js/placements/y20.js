var firebaseConfig = {
    apiKey: "AIzaSyBSd0FFY4jYumI731SXaZ1RpAEXsrp6fog",
    authDomain: "bec-hostels-64d05.firebaseapp.com",
    databaseURL: "https://bec-hostels-64d05-default-rtdb.firebaseio.com",
    projectId: "bec-hostels-64d05",
    storageBucket: "bec-hostels-64d05.appspot.com",
    messagingSenderId: "174951857966",
    appId: "1:174951857966:web:abe5f329cb70d6c01ac4bf",
    measurementId: "G-9J50LVPRKQ"
};


firebase.initializeApp(firebaseConfig);

// Get the Firestore database instance
var db = firebase.firestore();


// Reference to Firestore

// Retrieve data and render cards
db.collection("/becstuoweb/navigation/placements/")
.orderBy("regno","asc")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      renderCard(data);
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

// Function to render a card
function renderCard(data) {
  const cardContainer = document.getElementById("cardContainer");

  // Create card element
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";

  card.innerHTML = `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.regno}</p>
              
              <p class="card-text">${generateCompanyListHTML(
                data.companies,
                data.salaries,
                data.types
              )}</p>
       
              
              <!-- Add other fields as needed -->
          </div>
      </div>
  `;

  
  function generateCompanyListHTML(companylist, salary, types) {
    let html = "<ol>"; // Assuming a list structure for array items

      companylist.forEach(function(item,index) {
          var text="LPA"
          if(salary[index]=="NA"){
              salary[index]="Unknown"
              text=""
          }
          
     
      html+=`<li>${item} : <b>${salary[index]} ${text} </b> (${types[index]})</li>`;
     
  });


    html += "</ol>";

    return html;
  }

  // Append card to the container
  cardContainer.appendChild(card);
}
