function mainer() {

    document.getElementById("deptheading").innerHTML = "Services";
  
  
    var card = document.getElementById("cardContainer");
    card.innerHTML = '';
    var imageslist = [
        "https://media.istockphoto.com/id/539107092/photo/auto-rickshaw-stand-in-tamil-nadu.jpg?s=612x612&w=0&k=20&c=hImvcLDcpuz_e49qDZvldyYYxVR7qpFSHDdsnJTPr8A=",
        "https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg",
        "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg",
        "https://cdn4.vectorstock.com/i/1000x1000/30/58/electrician-with-electricity-meter-and-work-tools-vector-25853058.jpg",
        "https://img.freepik.com/free-vector/spotlights-realistic-composition-with-cyclorama-studio-spot-lights-hanging-reel-mounted-stands_1284-31591.jpg",
        "https://img.freepik.com/premium-photo/computer-technician-wearing-glasses-fixing-laptop-desk-with-tools-around-black-man-work-tools_155686-174.jpg",
        "https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg",
        "https://img.favpng.com/3/21/6/tailor-clip-art-vector-graphics-sewing-portable-network-graphics-png-favpng-LBYpZiFfHpZ6MVhg7JX5QBBAw.jpg",
        "https://s3.amazonaws.com/cms.ipressroom.com/84/files/20185/5b33d9bc2cfac26db74293ce_Shutterstock_1012215040_2/Shutterstock_1012215040_2_mid.jpg"
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
  
  function getter(x, y) {
  
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
    db.collection("/becstuoweb/navigation/others/services/" + x)
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
                <img src="${data.img}" class="card-img-top my-2" alt="...">
              <div class="card-body">
                  
                  <p class="text-dark">${data.date} &nbsp; ${data.rating} <span class="fa fa-star checked text-warning"></span></p>
                  <p class="text-dark h5">${data.name} : ${data.contact}</p>
                  <p class="text-dark h6">${data.des} </p> 
                  <p class="text-danger h5 ">${data.support?data.support:""} </p> 
              
                    
                    
                  
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