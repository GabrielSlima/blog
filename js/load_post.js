$(window).ready(function () {

    var postModel = {
        id: null,
        title: null,
        description: null,
        author: null,
        date: null,
        article_file_name: null
    };

    var articlesPayload = [];

    var controller = {
        init: function(){
            const query = window.location.search;
            var params = new URLSearchParams(query);
            var postId = params.get('id');

            if(!postId) {
                console.log("Load error fragment")
                view.initErrorFragment();
            }

            controller.getArticlesInfos();

            articlesPayload.forEach(article => {
                if(article.id === postId) {
                    postModel.id = article.id;
                    postModel.title = article.title;
                    postModel.description = article.description;
                    postModel.author = article.author;
                    postModel.date = article.date;
                    postModel.article_file_name = article.article_file_name;
                    view.initPost();
                }
            });
        },

        getArticlesInfos: function(){
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
        },

        setArticlesPayload: function(payload){
            articlesPayload = payload;
        }
    };


    var view = {
        
    };

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