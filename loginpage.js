import { Data1 } from "./DataLayer.js";
let v = document.getElementById("signinbtn");
// v.onclick = () => {
// 	let user = document.getElementById("username").value;
// 	let pass = document.getElementById("password").value;
// 	if (Data1.checkUser(user, pass)) {
// 		alert("user found");
// 		// open page
// 	} else {
// 		document.getElementById("username").value = "";
// 		document.getElementById("password").value = "";
// 		alert("No such User");
// 		//when page refreshes or we swithch to another page all data lost
// 		console.log(Data1.arr);
// 	}
// };
let showpassword = document.getElementById("showpassword");
showpassword.onclick = () => {
	if (document.getElementById("password").type == "text") {
		document.getElementById("password").type = "password";
		showpassword.src = "../Pngs/closedeye.png";
		return;
	}
	document.getElementById("password").type = "text";
	showpassword.src = "../Pngs/openeye.png";
};




//<--------------------------------Bachy is code se door rahy--------------------------------------->

//<------------------------------------Linking With DataBase---------------------------------------->

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyDgjxC3pegDxwodMo_tBF6og-5NAtccu_U",
	authDomain: "justteatingfirebase.firebaseapp.com",
	databaseURL: "https://justteatingfirebase-default-rtdb.firebaseio.com",
	projectId: "justteatingfirebase",
	storageBucket: "justteatingfirebase.appspot.com",
	messagingSenderId: "1055889204987",
	appId: "1:1055889204987:web:33450c37ba9cf8d798b25e",
	measurementId: "G-LQLCQBVPS3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
	getDatabase,
	get,
	set,
	ref,
	child,
	update,
	remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const db = getDatabase();

var username = document.getElementById("username");
var password = document.getElementById("password");



function SelectData() {
	const dbref = ref(db);
	get(child(dbref, "Usernames/" + username.value)).then((snapshot) => {
		if (snapshot.exists()) {
			if(username.value == snapshot.val().username&&
			password.value == snapshot.val().password){
                alert('Valid User');
            }
            else{
                alert('wrong password');
            }
		} else {
			alert("No Data Found");
		}
	});
    
}

var signinbtn = document.getElementById("signinbtn");
signinbtn.addEventListener("click", SelectData);

// <-------------------------------------------Linking Ends Here------------------------------------------>