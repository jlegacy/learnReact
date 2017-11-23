import { DBComponent } from './db/db.component';
import { RouterAssignmentDetailComponent } from './router-assignment/router-assignment-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './GITHUB~2/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitHubHttpService } from './services/gitHub-http.service';
import { GitHubPostsComponent } from './gitHubPosts/gitHub-posts.component';
import { ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './common/app.error.handler';
import { AuthorsService } from './authors.service';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { CaseConvertComponent } from './case-convert/case-convert.component';
import { UpperCasePipe } from './upper-case.pipe';
import { LikesComponent } from './likes/likes.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpServiceService } from './services/http-service.service';
import { RouterAssignmentComponent } from './router-assignment/router-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoritesComponent,
    CaseConvertComponent,
    UpperCasePipe,
    LikesComponent,
    ZippyComponent,
    CourseFormComponent,
    SignupFormComponent,
    PasswordChangeFormComponent,
    PostsComponent,
    GitHubPostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    RouterAssignmentComponent,
    RouterAssignmentDetailComponent,
    DBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id', component: GithubProfileComponent },
      { path: 'followers', component: GitHubPostsComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'homepage', component: RouterAssignmentComponent },
      { path: 'db', component: DBComponent },
      { path: 'homepage/:year/:month', component: RouterAssignmentDetailComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [AuthorsService, HttpServiceService, GitHubHttpService, { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
