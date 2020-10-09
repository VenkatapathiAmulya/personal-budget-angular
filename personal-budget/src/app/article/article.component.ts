import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() color = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}