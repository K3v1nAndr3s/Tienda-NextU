import { Component, OnInit } from '@angular/core';
import { PostService } from "../../posts/post.service";
import { PostI } from "../../../shared/models/post.interface";
import { Observable } from "rxjs";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public posts$ : Observable<PostI[]>;



  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }

}
