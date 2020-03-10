$(window).ready(function () {

    var articlesInfosModel = {
        articles_info: {
            src: "./articles.json",
            payload: []
        }
    };
    
    var postModel = {
        id: null,
        title: null,
        description: null,
        author: null,
        date: null,
        article_file_name: null,
        article_content: null
    };

    var errorTemplate;
    var postNotFoundTemplate;
    var postTemplate;

    var controller = {
        init: function(){
            const query = window.location.search;
            var params = new URLSearchParams(query);
            var postId = params.get('id');

            errorTemplate = $('script[data-template="error"]').html();

            if(!postId) {
                return view.initErrorFragment();
            }

            controller.getArticlesInfos();

            if(articlesInfosModel.articles_info.payload.length === 0) {
                return view.initErrorFragment();
            }

            articlesPayload.forEach(article => {
                if(article.id === postId) {
                    postModel.id = article.id;
                    postModel.title = article.title;
                    postModel.description = article.description;
                    postModel.author = article.author;
                    postModel.date = article.date;
                    postModel.article_file_name = article.article_file_name;
                    postTemplate = $('script[data-template="post"]').html();
                    return view.initPost();
                }
            });

            postNotFoundTemplate = $('script[data-template="post-not-found"]').html();

            return view.initPostNotFoundFragment();

        },

        getArticlesInfos: function(){
            $.ajax({
                url: postModel.article_file_name,
                async: false,
                success: function(response){
                    controller.setArticlesPayload(response);
                },
                error: function(){
                    console.log("Ai deu ruim");
                }
            });
        },

        getPostContent: function(){
            $.ajax({
                url: articlesInfosModel.article_file_name.src,
                async: false,
                success: function(response){
                    controller.setArticleContent(response);
                },
                error: function(){
                    console.log("Ai deu ruim");
                }
            });
        },

        setArticlesPayload: function(payload){
            articlesPayload = payload;
        },

        setArticleContent: function(payload){
            postModel.article_content = payload;
        },

        getPostModel: function(){
            return postModel;
        }
    };


    var view = {
        initErrorFragment: function(){
            var contentDiv = $('#post-content-container-row');

            var $errorTemplate = errorTemplate;
            var html = "";
            var enrichedTemplate = "";

            enrichedTemplate = $errorTemplate.replace('{{TITLE}}', "400 Bad Request");
            enrichedTemplate = enrichedTemplate.replace('{{ERROR_MESSAGE}}', "Sorry...Something got wrong.");

            html = enrichedTemplate;

            contentDiv.html(html);
            return;
        },

        initPostNotFoundFragment: function(){
            var contentDiv = $('#post-content-container-row');
            var $postNotFoundTemplate = postNotFoundTemplate;
            var html = "";
            var enrichedTemplate = "";

            enrichedTemplate = $postNotFoundTemplate.replace('{{TITLE}}', "404 Not Found");
            enrichedTemplate = enrichedTemplate.replace('{{ERROR_MESSAGE}}', "Sorry...Something got wrong.");

            html = enrichedTemplate;

            contentDiv.html(html);
            return;
        }, 

        initPost: function(){

            controller.getPostContent();

            var contentDiv = $('#post-content-container-row');
            var $postTemplate = postTemplate;
            var html = "";
            var enrichedTemplate = "";

            var $postModel = controller.getPostModel();

            enrichedTemplate = $postTemplate.replace('{{ARTICLE_TITLE}}', $postModel.title);
            enrichedTemplate = enrichedTemplate.replace('{{ARTICLE_AUTHOR}}', $postModel.author);
            enrichedTemplate = enrichedTemplate.replace('{{ARTICLE_DATE}}', $postModel.date);
            enrichedTemplate = enrichedTemplate.replace('{{ARTICLE_CONTENT}}', $postModel.article_content);


            html = enrichedTemplate;

            contentDiv.html(html);
            return;
        }
    };

    // console.log("Load JSON objects");
    // console.log("Find match object");

    // var jsonObject;

    // if(!jsonObject) {
    //     console.log("Load not found fragment")
    //     return;
    // }

    // console.log("Load post div")
    // console.log("Load Title")
    // console.log("Load date")
    // console.log("Load author")
    // console.log("Load related txt file content into div")
    
    controller.init();
});