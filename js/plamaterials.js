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
db.collection("/Documents/y20/pla").orderBy("title","asc").get().then(function(querySnapshot) {
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

  var title=document.createElement("h5");
  title.className="card-title";
  title.textContent=documentData.title;

  var des=document.createElement("p");
  des.textContent=documentData.des;
  des.className="card-text";


  var link = document.createElement("a");
  link.textContent = "Click to open file" 
  link.href = documentData.link
  link.target = "_blank"; // Opens the link in a new tab/window



  
  d2.appendChild(d3);
  

  d5.appendChild(title);
  d5.appendChild(des);
  d5.appendChild(link);
  

  d4.appendChild(d5);
  d2.appendChild(d4);

  d1.appendChild(d2);
  
  documentsDiv.appendChild(d1);
});
});
