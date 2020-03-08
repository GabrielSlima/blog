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
                async: false,
                success: function(response){
                    debugger;
                    controller.setArticlesPayload(response);
                },
                error: function(){
                    console.log("Ai deu ruim");
                }
            });
            this.article_template = $('script[data-template="article"]').html();
            console.log(this.article_template);
            this.articles_ul = $('#article-list');
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
            var article_template = $('script[data-template="article"]').html();;
            var articles_ul = $('#article-list');;
            debugger;
            var html = "";
            var enriched_article = "";
            this.articles_info = controller.getArticlesPayload();
            console.log(this.articles_info);
            this.articles_info.forEach(article => {
                enriched_article = article_template.replace('{{post.id}}', article.id);
                enriched_article = enriched_article.replace('{{post.title}}', article.title);
                enriched_article = enriched_article.replace('{{post.author}}', article.author);
                enriched_article = enriched_article.replace('{{post.date}}', article.date);
                enriched_article = enriched_article.replace('{{post.description}}', article.date);
                html += enriched_article;
                enriched_article = "";
            });
            articles_ul.html(html);
        }
    };

    controller.init();
});