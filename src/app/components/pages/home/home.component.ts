import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../../posts/post.service";
import { PostI } from "../../../shared/models/post.interface";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts$ : Observable<PostI[]>;

  public array : any = [];

  constructor(private postSvc: PostService) { }



  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }

  addNewPost(titulo,precio,cantidad){
    var subtotal=precio*cantidad
    var cantidad2=cantidad*1

    var datos=({
      titulo,
      subtotal,
      cantidad
    })
    this.agregar(datos);

  }

  agregar(datosNuevos){
    this.array.push(datosNuevos);
    console.log(this.array);
  }

}
