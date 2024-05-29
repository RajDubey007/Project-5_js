let name  = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

document.getElementById("first").innerHTML = "original :" +name;

document.getElementById("second").innerHTML = "replaced :" +name.replaceAll("dog", "cat");