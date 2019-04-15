
  const day = new Date().getDay();

  switch (day) {
    case 0:
    document.write("Sunday Special: Half Off Hot Dogs");
    case 1:
    document.write("Monday Special: Buy One Get One Free");
    case 2:
    document.write("Tuesday Special: 20% Off Third Sausage");
    case 3:
    document.write("Wednesday Special: Free Delivery");
    case 4:
    document.write("Thursday Special: Buy One Get One 50% Off");
    case 5:
    document.write("Friday Special: 10% Off Catering");
    case 6:
    document.write("Saturday Special: Three Free Samples With Your Order");
  }



function add()
{
  var txtNumber = document.getElementById("txtNumber");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
}

function subtract()
{
  var txtNumber = document.getElementById("txtNumber");
  var newNumber = parseInt(txtNumber.value) - 1;
  txtNumber.value = newNumber;
}
