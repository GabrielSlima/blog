$(window).ready(function (){
    const query = window.location.search;
    var params = new URLSearchParams(query);
    var postId = params.get('id');
    console.log(params.get('id') ? params.get('id') : "VAZIO");

    if(!postId) {
        console.log("Load error fragment")
        return;
    }

    console.log("Load JSON objects");
    console.log("Find match object");

    var jsonObject;

    if(!jsonObject) {
        console.log("Load not found fragment")
        return;
    }

    console.log("Load post div")
    console.log("Load Title")
    console.log("Load date")
    console.log("Load author")
    console.log("Load related txt file content into div")
    
});