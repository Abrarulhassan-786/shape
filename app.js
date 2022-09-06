let shapes;
function shapesProperty(name,color,length,width,angle){
    this.name = name;
    this.color = color;
    this.length = length;
    this.width = width;
    this.angle = angle;
}

var shap1 = new shapesProperty("Square","Red","3m","3m","30deg");
var shap2 = new shapesProperty("Rectangular","Blue","4m","3m","20deg");
var shap3 = new shapesProperty("Trigular","Pink","4m","6m","10deg");

//why come error when use create ol here.
// var createOl = document.createElement("ol");
// console.log(createOl);
// createOl.setAttribute("id","shap1");

var olMain1 = document.getElementById("shap1");
// var div = document.getElementById("mian");
for(var key in shap1){
    // console.log(key, shap1[key]);
    var liList = document.createElement("li");
    var listText = document.createTextNode(key+" : "+shap1[key]);
    liList.appendChild(listText);
    olMain1.appendChild(liList);
    console.log(olMain1);
}

var olMain2 = document.getElementById("shap2");
for(let key in shap2){
    var liCreate = document.createElement("li");
    var liText = document.createTextNode(key+" "+shap2[key])
    liCreate.appendChild(liText);
    olMain2.appendChild(liCreate);
}
var olMain3 = document.getElementById("shap3")
for(var key in shap3){
    var liCreate = document.createElement("li");
    var liText = document.createTextNode(key+" : "+shap3[key])
    liCreate.appendChild(liText);
    olMain3.appendChild(liCreate);
}
