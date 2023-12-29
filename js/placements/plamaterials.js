function mainer() {

  document.getElementById("deptheading").innerHTML = "Placement preparation materials";


  var card = document.getElementById("cardContainer");
  card.innerHTML = '';
  var imageslist = [
      "https://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
      "https://play-lh.googleusercontent.com/Sj_s77vDeBcy5lrjUIOJBtOOJTm8uQ15PBB03rmzgUTxqvvTFXl08VlX0xyq7bYjg0o",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyHA0z64Zo0Ovz0X6MSIoyjqPYkUVHYFgoQ&usqp=CAU",
      "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124",
      "https://cmrtc.ac.in/wp-content/uploads/2021/08/Placement_6-2021.jpg",
      "https://miro.medium.com/v2/resize:fit:1400/0*P0HNukHYYJ7bZ7Qs.png"
  ];


  if (card) {
      // Container HTML
      var containerHTML = `
      <div class="container" style="border: solid 2px black; margin-top:40px; width:500px; height:300px; padding-bottom: 10%; position: relative; overflow: hidden;">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">`

      imageslist.forEach(function (index) {
          containerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index + 1}" class="active" aria-current="true" aria-label="Slide 1"></button>
                  `
      })
      containerHTML += `</div>
              <div class="carousel-inner">`;

      // Carousel Items HTML
      var carouselItemsHTML = '';
      imageslist.forEach(function (item, index) {
          carouselItemsHTML += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}"  data-bs-interval="1000">
              <img src="${item}" class="d-block" style="width:500px; height:300px; padding:10px" alt="...">
          </div>`;
      });

      // Controls and closing tags
      var closingHTML = `
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
      </div>`;

      // Set the HTML content of the card element
      card.innerHTML += containerHTML + carouselItemsHTML + closingHTML;
  } else {
      console.error("Container element not found.");
  }


}


//outside mainer and not necessary i think

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


document.getElementById("deptheading").innerHTML = "";



/*

// Reference to Firestore
var card = document.getElementById("cardContainer").innerHTML = "";

// Retrieve data and render cards
db.collection("/Documents/placementmaterials/" + x)

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

try {
  document.getElementById("deptheading").innerHTML = "";
  document.getElementById("deptheading").innerHTML = "Y20 " + y + " Placements";
}
catch (error) {
  document.getElementById("deptheading").innerHTML = "";

}

// Function to render a card
function renderCard(data) {
  const cardContainer = document.getElementById("cardContainer");

  // Create card element
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";

  card.innerHTML = `
  <div class="card shadow-lg col mt-4  mx-auto">
        <div class="card-header bg-success container-fluid">
            <p class="h4 text-warning">${data.name}</p>
        </div>
      <div class="card-body">
          <p class="card-text">${data.regno.toUpperCase()}</p>
          
          <p class="card-text">${generateCompanyListHTML(data.companies, data.salaries, data.types)}</p>
   
          
          
      </div>
  </div>
`;


  function generateCompanyListHTML(companylist, salary, types) {
      let html = "<ol>"; // Assuming a list structure for array items

      companylist.forEach(function (item, index) {
          var text = "LPA"
          if (salary[index] == "NA") {
              salary[index] = "Unknown"
              text = ""
          }


          html += `<li>${item} : <b>${salary[index]} ${text} </b> (${types[index]})</li>`;

      });


      html += "</ol>";

      return html;
  }

  // Append card to the container
  //cardContainer.appendChild(card);
}

*/

function get(x, y) {

  document.getElementById("cardContainer").innerHTML = ""
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


  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  // Get the Firestore database instance
  var db = firebase.firestore();


  // Reference to Firestore

  // Retrieve data and render cards
  db.collection("/Documents/placementmaterials/" + x)
      .orderBy("title", "asc")
      .get()
      .then(
          (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  const data = doc.data();
                  renderCard(data);
              });
          }
      )
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

  try {
      document.getElementById("deptheading").innerHTML = "";
      document.getElementById("deptheading").innerHTML = y;
  }
  catch (error) {
      document.getElementById("deptheading").innerHTML = y;

  }

  // Function to render a card
  function renderCard(data) {


      const cardContainer = document.getElementById("cardContainer");



      // Create card element
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";



      card.innerHTML = `
        <div class="card shadow-lg col mt-4  mx-auto">
              <div class="card-header bg-primary container-fluid">
                  <p class="h4 text-white">${data.title}</p>
              </div>
            <div class="card-body">

                <p class="text-dark">${data.date}</p>
                <p class="text-dark h5">${data.type}</p>
                <p class="text-dark h6">${data.des}</p>  
                
                  <button class="btn btn-success text-white">
                      <a class="card-text text-white" href=${data.link} target="_blank">View file</a>
                  </button> 
                  
                
            </div>
        </div>
    `;


      function generateCompanyListHTML(companylist, salary, types) {
          let html = "<ol>"; // Assuming a list structure for array items

          companylist.forEach(function (item, index) {
              var text = "LPA"
              if (salary[index] == "NA") {
                  salary[index] = "Unknown"
                  text = ""
              }


              html += `<li>${item} : <b>${salary[index]} ${text} </b> (${types[index]})</li>`;

          });


          html += "</ol>";

          return html;
      }

      // Append card to the container
      cardContainer.appendChild(card);
  }

}