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
db.collection("/becstuoweb/navigation/placements/other college placements/colleges").orderBy("cname","asc").get().then(function(querySnapshot) {
var documentsDiv = document.getElementById("documents");

querySnapshot.forEach(function(doc) {
  var documentData = doc.data();

  var d1=document.createElement("div");
  d1.className="card";

  var d2=document.createElement("div");
  d2.className="row no-gutters";

  var d3=document.createElement("div");
  d3.className="col-md-4";

  var d4=document.createElement("div");
  d4.className="col-md-8";

  var d5=document.createElement("div");
  d5.className="card-body";

  var cname=document.createElement("h5");
  cname.className="card-title";
  cname.textContent=documentData.cname+" ( "+documentData.code+" ), "+documentData.loc;

  

  
  d2.appendChild(d3);
  

  d5.appendChild(cname);
  
  

  d4.appendChild(d5);
  d2.appendChild(d4);

  d1.appendChild(d2);
  
  documentsDiv.appendChild(d1);
});
});
