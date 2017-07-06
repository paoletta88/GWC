function check(form)
{
              if(form.userid.value == "username" && form.pswrd.value == "myp@$$wordi$100%$ecure") {window.open('Binary.html', "_self")}
              else {alert("Is my password 100% secure??")}
}

function check_code(form)
{
  if(form.userid.value == "099 121 098 101 114 032 115 101 099 117 114 105 116 121") 
  {
    alert("Good job!");
    window.open('safemail.html', "_self");
  }
  else {alert("Enough Binary, give me ASCII!!")}
}

function check_creds()
{
  if (document.getElementById('userid').value == "username" && document.getElementById('pswrd').value == "myp@$$wordi$100%$ecure")
  {
    alert("Good job!");
    window.open('binary.html', "_self");
  }
  else
  {
    alert("Is my password 100% secure??");
  }
}
