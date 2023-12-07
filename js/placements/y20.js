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



function mainer() {


    var cardContainer = document.getElementById("cardContainer");
    var tit = document.getElementById("deptheading");

    tit.innerHTML = "Y20 Placements";

    cardContainer.innerHTML = '';

    var companylist = [];
    var imageslist = [];

    db.collection(`/becstuoweb/navigation/placements/`)
        .doc("companylist")
        .get()
        .then((querySnapshot) => {

            imageslist =querySnapshot.data().images;
            companylist=querySnapshot.data().companies;

            console.log(imageslist, companylist)

            generatecard(imageslist,companylist)
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });






    function generatecard(imageslist, clist){
        imageslist.forEach(function (item, index) {
            const card = document.createElement("div");
            card.className = "col-md-3 mb-4";
    
            card.innerHTML = `
        <div class="card shadow-lg col mt-4  mx-auto">
            <div class="card-header bg-success container-fluid">
                  <p class="h4 text-dark">${clist[index]}</p>
            </div>
            <div class="card-body">
                <img src="${item}" style="width:150px; height:150px" alt="error"/>
                <br/><br/>
                <a href="#" class="text-warning btn btn-success">Know about company!</a>
                </div>
            </div>
        </div>
      `;
    
            cardContainer.appendChild(card);
    
        });
    }



}


document.getElementById("deptheading").innerHTML = "Y20 Placements";




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
                  <p class="h4 text-white">${data.name}</p>
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