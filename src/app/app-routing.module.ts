import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from "./components/posts/post/post.component";


const routes: Routes = [{path:'', redirectTo:'/login', pathMatch:'full'},{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },{path:'post/:id', component: PostComponent}, { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },{ path: 'carrito', loadChildren: () => import('./components/pages/carrito/carrito.module').then(m => m.CarritoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
