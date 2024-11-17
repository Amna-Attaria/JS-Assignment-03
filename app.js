// Qno:01 litral Notation
var futureStudent = [];

// Qno:02 object Notation

var futureStudent = new Array ()

// Qno:03
var string = [" apple " , " Mango " , " Banana " , " Grapse " , "<br>" ];
document.write(string);

// Qno:04
var num = [ 23 , 55 , 88 , 49 ,  "<br>"];
document.write (num);

// Qno:05

var boolean = [ true , false , true , false , "<br>"];
document.write (boolean);

// Qno:06
var mixed = ["Orange " , 6 , true , "<br>"];
document.write (mixed);

// Qno:07
var education = [ "SSC" , "HSC" , "BCS" ," BS "," BCOM" , "MS" ," M.Phil"," PhD"];
document.write("<h2>Educatuonal Qualification in Pakistan</h2>");
document.write ("1)" + education[0] + "<br>")
document.write ("2)" + education[1] + "<br>")
document.write ("3)" + education[2] + "<br>")
document.write ("4)" + education[3] + "<br>")
document.write ("5)" + education[4] + "<br>")
document.write ("6)" + education[5] + "<br>")
document.write ("7)" + education[6] + "<br>" + "<br>")


// Qno:08
document.write("<h2>MarkSheet</h2>");
var studentName = ["john" , "Roes" , "Jack"];
var StudentMarks = [400 , 450 , 300];
var totalMarks = 500;
var per1 = (StudentMarks[0]/totalMarks)*100
var per2 = (StudentMarks[1]/totalMarks)*100
var per3 = (StudentMarks[2]/totalMarks)*100
document.write("Score of John is "+ StudentMarks [0] + " Percentage is " + per1 + "%" + "<br>");
document.write("Score of Roes is "+ StudentMarks [1] + " Percentage is " +per2 + "%" +"<br>");
document.write( "Score of Jack is "+ StudentMarks [2] + " Percentage is " +per3 + "%" +"<br>");

// Qno:09
document.write("<h2>Color Add</h2>"); 
var color = ["Black " , "Green " , "Blue " ,"Pink " , "Purple " , "Orange "];
document.write(color + "<br>");
// a)
var colorAdd = prompt ("Add that color to the beginning of the array.")
color.unshift(colorAdd);
document.write( "this color add in begning " + color + " <br>");
// b)
var colorAddlast = prompt ("Add that color to the last of the array")
color.push(colorAddlast) 
document.write("this color add in last " + color + "<br>" );
// c)
var twocolorAdd = prompt ("Enter first color you want to add the Begning");
var twocolorAdd1 = prompt ("Enter second color you want to add the Begning");
color.unshift(twocolorAdd , twocolorAdd1);
document.write("Add two color in begning " + color + "<br>");
// d) 
color.shift()
document.write( "Remove first color " + color + "<br>");
// e) 
color.pop()
document.write( "Remove last color " + color + "<br>" )
// f) 
var add = prompt ("Enter the index num you want to show color on it " )
var add1 = prompt ("Enter the color Name " )
color.splice(add , 0 , add1);
document.write("Add the Color at your desire index " + color +  "<br>");
// g)
var add2 = +prompt ("Enter the index num you want to delete color on it " )
var add3 = +prompt (" How many color you want to delete " )
color.splice(add2 ,  add3);
document.write("Delete the Color at your desire index " + color +  "<br>");

// Qno:10
document.write("<h2>By Using Sort</h2>");
var scoreStudent = [ 320 , 230 , 480 , 120 ]
document.write ("Score of Students" + scoreStudent + "<br>")
scoreStudent.sort()
document.write ("Ordered Score of Students" + scoreStudent + "<br>"); 

// Qno:11
var city= [" Karachi " , " Hydrabad " ," Lahore " ," Islamabad ", " Peshawar "];
document.write( "<h3> Cities List </h3>" + city);
document.write( "<h3> Selected Cities List </h3>");
document.write( city[2]);
document.write( city[3] + "<br>");

// Qno:12
document.write("<h2>Join Method</h2>")
var cat = ["This " , "is " , "my " , "cat " , " <br>"];
document.write(cat)
var cats = cat.join (" ");
document.write (cats);

// Qno:14
var device = []
// "Keyboard" , "Mouse " , "Printer " , "Moniter "
device.push ("Keyboard")
device.push ("Mouse")
device.push ("Printer")
device.push ("Moniter")
document.write ("<h3> Devices </h3>")
document.write (device);
 var out = device.pop ()
 var out1 = device.pop ()
 var out2 = device.pop ()
 var out3 = device.pop ()
document.write (device);
document.write ( "<br>" + "Out" + "<br>" + out+ "<br>" + "Out" + "<br>" + out1 + "<br>" + "Out" + "<br>" + out2 + "<br>" + "Out" + "<br>" + out3 + "<br>");

// Qno:13
var devices = []
devices.push ("Keyboard")
devices.push ("Mouse")
devices.push ("Printer")
devices.push ("Moniter")
document.write ("<h3> Devices </h3>")
document.write (devices + "<br>");
var outvalue = devices.shift ()
var outvalue1 = devices.shift ()
var outvalue2 = devices.shift ()
var outvalue3 = devices.shift()
document.write (devices);
document.write ( "<br>" + "Out" + "<br>" + outvalue + "<br>" + "Out" + "<br>" + outvalue1 + "<br>" + "Out" + "<br>" + outvalue2 + "<br>" + "Out" + "<br>" + outvalue3 + "<br>" + "<br>");

// Qno:15
document.write("<h2>Dropdown</h2>");
var phones = ["Apple " , "Sumsung " , "Motorola " , "Nokia " , "Soni " , "Haier" ];
document.write ('<select>')
document.write ('<option value="' + phones[0]+'" > ' + phones[0] + '</option>' );
document.write ('<option value =">' + phones [1] + '">' + phones[1] + '</option>');
document.write ('<option value =">' + phones [2] + '">' + phones[2] + '</option>');
document.write ('<option value =">' + phones [3] + '">' + phones[3] + '</option>');
document.write ('<option value =">' + phones [4] + '">' + phones[4] + '</option>');
document.write ('<option value =">' + phones [5] + '">' + phones[5] + '</option>');
document.write ('</select>');
