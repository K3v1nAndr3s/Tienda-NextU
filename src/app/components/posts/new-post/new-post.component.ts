import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostI } from "../../../shared/models/post.interface";
import { PostService } from "../post.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postSvc: PostService) { }

  public newPostForm = new FormGroup({
    titleProduct: new FormControl('', Validators.required),
    precioProduct: new FormControl('', Validators.required),
    unidadesProduct: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

}
