function check(form)
{
              if(form.userid.value == "username" && form.pswrd.value == "myp@$$wordi$100%$ecure") {window.open('Binary.html', "_self")}
              else {alert("Is your password 100% secure??")}
}

function check_code(form)
{
  if(form.userid.value == "01100011 01111001 01100010 01100101 01110010 00100000 01110011 01100101 01100011 01110101 01110010 01101001 01110100 01111001")
  {
    alert("You gotcha!");
    window.open('safemail.html', "_self");
  }
  else {alert("Try some more binary!")}
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
