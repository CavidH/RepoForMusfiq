import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoService} from "../service/todo.service";
import {TodoDto} from "../dtos/todo-dto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoAddDto} from "../dtos/todo-add-dto";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: TodoDto[];
  public frmGroup: FormGroup
  // todoForm = new FormGroup({
  //   title: new FormControl(Validators.required),
  //   body: new FormControl(Validators.required)
  // })

  // checkoutForm = this.formBuilder.group({
  //   title: '',
  //   body: ''
  // });

  constructor(
    public dialog: MatDialog,
    private _todoService: TodoService,
    private _formBuilder: FormBuilder) {
  }


  async ngOnInit(): Promise<void> {
    this.frmGroup = this._formBuilder.group({
      title: ["", [Validators.required]],
      body: ["", [Validators.required]],
    })
    await this.getData()
  }

  async addTodo() {
    let addDto:TodoAddDto ={
      title:this.frmGroup.get('title').value,
     body:this.frmGroup.get('body').value
    }

      /* new TodoAddDto()
    addDto.title=this.frmGroup.get('title').value;
      addDto.body=this.frmGroup.get('body').value;
*/
    await this._todoService.postTodo(addDto);
    this.frmGroup.reset()
   await this.getData()
  }
  async getData (){
    this.todos = await this._todoService.getAll()
    this.todos = this.todos.reverse();

  }

  async deleteTodo(id:number) {
   await this._todoService.delete(id)
   await this.getData();
  }
}
