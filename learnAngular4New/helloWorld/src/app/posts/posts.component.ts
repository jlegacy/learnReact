import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './../common/app.error.handler';
import { CannotDeleteError } from './../common/cannot-delete-error';
import { CannotAddError } from './../common/cannot-add-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { Http } from '@angular/http';
import { HttpServiceService } from './../services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  list = [];
  constructor(private httpService: HttpServiceService) { }

  deleteRow(id) {
    //save row and index
    let saveIndex = this.list.findIndex(item => item.id === id);
    let saveRow = this.list[saveIndex];
    //optimistically remove//
    this.list.splice(saveIndex, 1);

    this.httpService.delete(id)
      .subscribe(() => {
      }, (error: AppError) => {
        //put back//
        this.list.splice(saveIndex, 0, saveRow);

        if (error instanceof NotFoundError) {
          alert('This post has already been Deleted');
        }
        else if (error instanceof CannotDeleteError) {
          alert('Cannot Delete Error, Internal Issue');
        }
        else {
          throw error;
        }
      })
  }

  updatePut(form, text: HTMLInputElement) {
    form['title'] = text.value;
    this.httpService.update(form)
      .subscribe(response => {
        let index = this.list.findIndex(item => item.id === response.id);
        this.list[index]['title'] = response.title;
      }, (error: Response) => {
        if (error.status === 400) {
          alert('error updating row');
        }
        else {
          throw error
        }
      })
  }

  postRow(text: HTMLInputElement) {

    let post = { title: text.value }
    this.list.splice(0, 0, { 'title': text.value });

    let data = {
      text: ""
    }

    data.text = text.value;

    this.httpService.create(data)
      .subscribe(response => {
        let newRow = {
          id: "",
          title: "",
        }
        // this.list[]
        this.list[0].id = response.id;
        // newRow.title = response.text;
        // this.list.unshift(newRow);
      }, (error: AppError) => {
        this.list.shift();

        if (error instanceof CannotAddError) {
          alert('Cannot Add Error');
        }
        else {
          throw error;
        }
      })
  }

  ngOnInit() {
    this.httpService.getAll()
      .subscribe(response => this.list = response)
  }

}
