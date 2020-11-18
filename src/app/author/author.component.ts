import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(service : AuthorService) {
    this. author = service.getAuthor();
   }

   title = "Author Lists";
   author;

  ngOnInit(): void {
  }

}
