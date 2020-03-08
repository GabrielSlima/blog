$(document).ready(function(){
    
    var model = {
        articles_info: {
            src: "./articles.json",
            payload: ""
        }
    };

    var controller = {
        init: function() {
            $.ajax({
                url: model.articles_info.src,
                done: function(response){
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