import { Injectable } from "@angular/core";
import { article } from "../model/article.modal";
import { AngularFireDatabase , AngularFireList } from "angularfire2/database";

@Injectable()
export class  ArticleService
{
    selectedArticle: article = new article();
    articlesList: AngularFireList<any> ;
   constructor(private firebase: AngularFireDatabase) { }

    getArticles()
    {
        this.articlesList= this.firebase.list('articles');
        return this.articlesList;
    }

    insertArticle(article: article)
    {
        this.articlesList.push(
        {
            'title' : article.title,
            'body' : article.body,
         }
        )
    }
}
