import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoDto} from "../dtos/todo-dto";
import {firstValueFrom} from "rxjs";
import {TodoAddDto} from "../dtos/todo-add-dto";
import {TodoDeleteDto} from "../dtos/todo-delete-dto";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _baseUrl: string = 'https://localhost:7034/Todo'

  constructor(private _httpClient: HttpClient) {

  }

  getAll(): Promise<TodoDto[]> {
    // let b =this._httpClient.get<TodoDto[]>(this._baseUrl)
    return firstValueFrom(this._httpClient.get<TodoDto[]>(this._baseUrl));
  }

  postTodo(addDto: TodoAddDto) {
    return firstValueFrom(this._httpClient.post<TodoDto>(this._baseUrl, addDto));
  }


  delete(id: number) {
    // return firstValueFrom(this._httpClient.delete<TodoDto[]>(this._baseUrl))
    let url = this._baseUrl + `?id=${id}`
    return firstValueFrom(this._httpClient.delete<TodoDto>(url))
  }
}
