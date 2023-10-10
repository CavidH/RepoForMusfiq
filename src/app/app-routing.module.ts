import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {AddtodoComponent} from "./todo/addtodo/addtodo.component";

const routes: Routes = [
  // {path:'addtodo',component:AddtodoComponent},
  {path:'todo',component:TodoComponent},
  {path:'',pathMatch:'full',redirectTo:'todo'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
