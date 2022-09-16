var firebaseConfig = {
  apiKey: "AIzaSyA7rQbSypYaBmNqIZwYd1t1GU-lNILEbqs",
  authDomain: "library-9b09d.firebaseapp.com",
  databaseURL: "https://library-9b09d-default-rtdb.firebaseio.com",
  projectId: "library-9b09d",
  storageBucket: "library-9b09d.appspot.com",
  messagingSenderId: "251601309440",
  appId: "1:251601309440:web:289ca2530aca24470dade5"
};
  

  firebase.initializeApp(firebaseConfig);
  
  
  
 

function send() {
  user_name = document.getElementById("name_id").value;
  user_email = document.getElementById("email_id").value;
  user_message = document.getElementById("message_id").value;
 firebase.database().ref("/").child(user_email).update({
          name:user_name,
          email:user_email,
          message:user_message
            });

  
}

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("my_close");
});

