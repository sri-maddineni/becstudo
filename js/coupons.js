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



// Retrieve documents from Firestore
db.collection("/App/menu2/coupons").orderBy("company","asc").get().then(function(querySnapshot) {
var documentsDiv = document.getElementById("documents");

querySnapshot.forEach(function(doc) {
  var documentData = doc.data();

  var d1=document.createElement("div");
  d1.className="card";

  var d2=document.createElement("div");
  d2.className="row no-gutters";

  var d3=document.createElement("div");
  d3.className="col-md-4";

  
  

  var pic=document.createElement("img");
  pic.src=documentData.pic;
  pic.className="card-img";
  pic.alt="picture";
  pic.setAttribute("style","width:150px");

  var d4=document.createElement("div");
  d4.className="col-md-8";

  var d5=document.createElement("div");
  d5.className="card-body";

  var company=document.createElement("h2");
  company.textContent=documentData.company;
  company.className="card-text";

  var ocost=document.createElement("h4");
  ocost.className="card-title";
  ocost.textContent=documentData.ocost;


  var ocontact=document.createElement("p");
  ocontact.textContent=documentData.ocontact;
  ocontact.className="card-text";

  var condition=document.createElement("p");
  condition.textContent=documentData.condition;
  condition.className="card-text";

  var validity=document.createElement("p");
  validity.textContent=documentData.validity;
  validity.className="card-text";

  

  // Create a container div element
const d6 = document.createElement("div");





// Append the icon and link to the d6


// Append the d6 to the desired location in the DOM (e.g., a parent element)


  d3.appendChild(pic);
  d2.appendChild(d3);
  
  d5.appendChild(company);
  d5.appendChild(ocost);
  d5.appendChild(ocontact);
  d5.appendChild(condition);
  d5.appendChild(validity);


  d5.appendChild(d6)

  d4.appendChild(d5);
  d2.appendChild(d4);

  d1.appendChild(d2);

  documentsDiv.appendChild(d1);
});
});
