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
   imageURl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
   colSpan =2;

  ngOnInit(): void {
  }

}
