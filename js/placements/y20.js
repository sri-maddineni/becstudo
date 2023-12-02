function mainer(){


  var card=document.getElementById("cardContainer");
  card.innerHTML='';
  var imageslist = [
      "https://www.snovasys.com/wp-content/uploads/2016/10/Snovasys.png",
      "https://media.licdn.com/dms/image/C4E1BAQESTvVmxsafRQ/company-background_10000/0/1611388624887/tmachinesoftware_cover?e=2147483647&v=beta&t=rHhsMtumDkQc52rQwuKcbA1OEG9s_f8RXN-jn_4U-Jg",
      "https://elearningindustry.com/wp-content/uploads/2019/10/52ed748d6b9b944d886a928470b5b347.jpeg",
      "https://media.licdn.com/dms/image/D560BAQH5YHtpxAHvDA/company-logo_200_200/0/1694512590827/numetry_technologies_logo?e=2147483647&v=beta&t=cC088ox_T045191puks_Kh8YBwm6jbA3aWIp9u8Rnzc"
  ];

  
if (card) {
  // Container HTML
  var containerHTML = `
      <div class="container" style="border: solid 2px black; margin-top:40px; width:500px; height:300px; padding-bottom: 10%; position: relative; overflow: hidden;">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">`

              imageslist.forEach(function(index){
                  containerHTML+=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index+1}" class="active" aria-current="true" aria-label="Slide 1"></button>
                  `
              })
                 containerHTML+=`</div>
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

document.getElementById("deptheading").innerHTML = " Y20 Placements";


// Reference to Firestore
var card=document.getElementById("cardContainer").innerHTML="";

// Retrieve data and render cards
db.collection("/becstuoweb/navigation/placements/")
  .orderBy("regno", "asc")
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
  document.getElementById("deptheading").innerHTML = " Y20 Placements";

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
          
          <p class="card-text">${generateCompanyListHTML(data.companies,data.salaries,data.types)}</p>
   
          
          
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
  db.collection(`/becstuoweb/navigation/placements/y20/a` + x)
      .orderBy("regno", "asc")
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
      document.getElementById("deptheading").innerHTML = "Y20 " + y + " Placements";
  }
  catch (error) {
      document.getElementById("deptheading").innerHTML = " Y20 Placements";

  }

  // Function to render a card
  function renderCard(data) {


      const cardContainer = document.getElementById("cardContainer");



      // Create card element
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";

      /*
      <div class="card shadow-lg col-lg-3 col-md-12 col-sm-10  mx-auto" >
              <div class="card-header bg-success container-fluid">
                  <p class="h4 ">BEC Studo</p>
              </div>
              <img src="https://play-lh.googleusercontent.com/GB1_i_I46wgNtzwITnpPNMyU6EW_O7giINmLnIzRYJN6A9bdqxgbJJbRGIkCrKsIBng=w240-h480-rw" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Android Application</h5>
                <p class="card-text">For the students of Bapatla Engineering College</p>
                <a href="https://play.google.com/store/apps/details?id=com.iTKonnects.becfrag" class="btn btn-primary">View App in Play store</a>
              </div>
            </div>

            */

      card.innerHTML = `
        <div class="card shadow-lg col mt-4  mx-auto">
              <div class="card-header bg-success container-fluid">
                  <p class="h4 text-dark">${data.name}</p>
              </div>
            <div class="card-body">
                <p class="card-text">${data.regno.toUpperCase()}</p>
                
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