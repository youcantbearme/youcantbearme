var i = 0;
var txt = 'Rahul Sahani';
var speed = 100;

function typeWriter() {
	if (i < txt.length) {
        document.getElementById("rahul").innerHTML += txt.charAt(i);
        document.getElementById("rahul2").innerHTML += txt.charAt(i);
   		i++;
   		setTimeout(typeWriter, speed);
	}
}
function submitForm() {
    var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
   	var span = document.getElementsByClassName("close")[0];
    
	var name = document.getElementById("name").value;
	var contactNo = document.getElementById("contactNo").value;
	var email = document.getElementById("email").value;
	var service = document.getElementById("service").value;
	var idea = document.getElementById("idea").value;
	var re = /\S+@\S+\.\S+/;

	if(name != ""){
		if(/^\d{10}$/.test(contactNo)){
			if(re.test(email)){
				if(service != ""){
					document.getElementById("errorService").style.display = "none";
					document.getElementById("modalP").innerHTML = "Hi <em>" + name + "!</em> <br> Thanks for your idea of \"" + idea + "\", <br> I will try to contact you either via email on \"" + email + "\" or will call you on \"" + contactNo + "\", <br> and further discuss about <em>" + service + "</em> <br> Meanwhile, here are some more services that I offer, please feel free to take a look.";
					modal.style.display = "block";
					setTimeout(function(){
						document.contact.submit()
					}, 10000);
				}else{
					document.getElementById("errorService").style.display = "block";
					document.getElementById("service").focus();
				}
				document.getElementById("errorEmail").style.display = "none";
			}else{
				document.getElementById("errorEmail").style.display = "block";
				document.getElementById("email").focus();
			}
			document.getElementById("errorNumber").style.display = "none";
		}else{
			document.getElementById("errorNumber").style.display = "block";
			document.getElementById("contactNo").focus();
		}
		document.getElementById("errorName").style.display = "none";
	}else{
		document.getElementById("errorName").style.display = "block";
		document.getElementById("name").focus();
	}	
}
span.onclick = function() {
	modal.style.display = "none";
}    
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}