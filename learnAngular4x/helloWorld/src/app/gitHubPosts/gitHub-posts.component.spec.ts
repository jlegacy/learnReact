import { GitHubPostsComponent } from './gitHub-posts.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';



describe('PostsComponent', () => {
  let component: GitHubPostsComponent;
  let fixture: ComponentFixture<GitHubPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
