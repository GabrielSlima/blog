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
                done: function(response){
                    console.log(response);
                    this.payload = response;
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