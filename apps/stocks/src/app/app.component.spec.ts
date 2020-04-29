import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { APP_CONSTANT } from './app.constants';

describe('AppComponent', () => {
  let component: AppComponent;
  let compfixture: ComponentFixture<AppComponent>;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule]  
    }).compileComponents();
  }));

  beforeEach(() => {
    compfixture = TestBed.createComponent(AppComponent);
    component = compfixture.componentInstance;
    compfixture.detectChanges();
    app = compfixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'stocks'`, () => {
    expect(component.title).toEqual(APP_CONSTANT.TITLE);
  });

  it('should render title in a h1 tag', () => {
    expect(app.querySelector('h1').textContent).toContain(
      APP_CONSTANT.WELCOME_TEXT
    );
  });
});
