const firebaseConfig = {
    apiKey: "AIzaSyBSd0FFY4jYumI731SXaZ1RpAEXsrp6fog",
    authDomain: "bec-hostels-64d05.firebaseapp.com",
    databaseURL: "https://bec-hostels-64d05-default-rtdb.firebaseio.com",
    projectId: "bec-hostels-64d05",
    storageBucket: "bec-hostels-64d05.appspot.com",
    messagingSenderId: "174951857966",
    appId: "1:174951857966:web:ca44699dea8c40331ac4bf",
    measurementId: "G-QJY0Z497FQ"
};


firebase.initializeApp(firebaseConfig);

// Get the Firestore database instance
var db = firebase.firestore();


function Loaddata() {

    var cardContainer = document.getElementById("cardContainer");

    db.collection(`/becstuoweb/navigation/Food/yZJ1ES5ekS39N6SXrJG4/Restaurants`)
        .orderBy("title", "asc")
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data());
            generateCards(data);
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });

    function generateCards(data) {
       
        data.forEach((item) => {
            // Create card element
            const card = document.createElement("div");
            card.className = "col-md-3 mb-4 mx-3"; // Each card takes up 3 columns in a 12-column grid system

            card.innerHTML = `
            <div class="card shadow-lg mt-4 mx-auto">
                <div class="card-header bg-success container-fluid">
                    <p class="h4 text-warning">${item.title}</p>
                </div>
                <div class="card-body">
                    <img src="${item.img}" class="my-2" style="width:150px; height:150px" alt="error"/>
                    <p class="h4 text-dark">${item.des}</p>
                    <p class="text-dark">${item.address}</p>
                    <p class="text-dark">${item.contact}</p>
                 
                    <a href="${item.loc}" target="_blank" class="text-white btn btn-success">View in maps!</a>
                </div>
            </div>
        `;

            cardContainer.appendChild(card)
        });

        console.log("Page is fully loaded!");
    }
}
