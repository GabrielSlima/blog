$(document).ready(function(){
    
    var model = {
        articles_info: {
            src: "./articles.json",
            payload: ""
        }
    };

    var controller = { 
        
        init: function() {
            debugger;
            $.ajax({
                url: model.articles_info.src,
                success: function(response){
                    console.log("Reponse:");
                    console.log(response);
                    this.payload = response;
                },
                error: function(){
                    console.log("Ai deu ruim");
                }
            });

            view.init();
        },
        
        getArticlesPayload: function(){
            return model.articles_info.payload;
        }
    };

    var view = {
        init: function(){
            console.log(controller.getArticlesPayload());
        }
    };

    controller.init();
});