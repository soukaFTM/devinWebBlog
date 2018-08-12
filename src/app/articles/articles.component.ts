import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { AngularFireList } from 'angularfire2/database';
import { article } from '../../model/article.modal';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleList: AngularFireList<article>;
  constructor( private articleService:ArticleService) { }
  article:article = new article();
  
  ngOnInit() {
    this.articleService.getArticles();
    this.save();
  }

  save()
  {
    // testing firebase acces
    this.article.title="hi";
    this.article.body="heelelelei";
    this.articleService.insertArticle(this.article);
   // this.articleList = this.articleService.getArticles();
  }

}
