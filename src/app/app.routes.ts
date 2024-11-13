import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { BookItemComponent } from './components/book/book-item/book-item.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { AuthGuard } from './guards/authGuard';
import { SearchComponent } from './components/search/search.component';
import { BooksbyauthorComponent } from './components/booksbyauthor/booksbyauthor.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { AddReviewComponent } from './components/review/add-review/add-review.component';
import { AiBookComponent } from './components/book/ai-book/ai-book.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'show-users',
    component: ShowUsersComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard] },
  { path: 'book-item', component: BookItemComponent },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'books-by-author', component: BooksbyauthorComponent },
  {
    path: 'authordropdown',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  { path: 'update-book', component: UpdateBookComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'add-review/:id', component: AddReviewComponent },
  { path: 'ai-book', component: AiBookComponent },
  { path: '**', redirectTo: '/register' },
];
