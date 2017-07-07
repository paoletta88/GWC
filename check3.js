function check(form)
{
              if(form.userid.value == "username" && form.pswrd.value == "myp@$$wordi$100%$ecure") {window.open('Binary.html', "_self")}
              else {alert("Is your password 100% secure??")}
}

function check_code(form)
{
  if(form.userid.value == "cyber security")
  {
    alert("You gotcha!");
    window.open('safemail.html', "_self");
  }
  else {alert("Wrong! Think about a product")}
}

function check_creds()
{
  if (document.getElementById('userid').value == "username" && document.getElementById('pswrd').value == "myp@$$wordi$100%$ecure")
  {
    alert("You gotcha!");
    window.open('binary.html', "_self");
  }
  else
  {
    alert("Is your password 100% secure??");
  }
}
