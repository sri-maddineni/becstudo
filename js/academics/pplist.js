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
    

    db.collection(`/App/menu2/pyqs/`)
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
            card.className = "col-md-3 mx-3" ;
            card.style="width: 300px;" // Each card takes up 3 columns in a 12-column grid system

            
            card.innerHTML = `
            <div class="card shadow-lg mt-4" >
                <div class="card-header bg-success container-fluid">
                    <p class="h4 text-white">${item.title}</p>
                </div>
                <div class="card-body">
                    
                    <p class="h4 text-dark">${item.dept}</p>
                    <p class="text-dark">${item.lastupdated}</p>
                    <p class="text-dark">${item.type}</p>
                 
                    <a href="${item.link}" target="_blank" class="text-warning btn btn-primary">Open folder</a>
                </div>
            </div>
        `;

            cardContainer.appendChild(card)
        });

        console.log("Page is fully loaded!");
    }
}
