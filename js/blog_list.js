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
                async: false,
                success: function(response){
                    controller.setArticlesPayload(response);
                },
                error: function(){
                    console.log("Ai deu ruim");
                }
            });
            view.init();
        },
        
        getArticlesPayload: function(){
            return model.articles_info.payload;
        },

        setArticlesPayload: function(payload){
            model.articles_info.payload = payload;
        }
    };

    var view = {
        init: function(){
            this.articles_info = controller.getArticlesPayload();
            this.articles_info.articles.forEach(article => {
                console.log(article);
            });
        }
    };

    controller.init();
});