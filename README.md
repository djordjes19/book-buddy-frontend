# 📚 Book Buddy

**Book Buddy** is a comprehensive book management and review platform built with Angular 18. It allows users to discover, manage, and review books while providing administrators with powerful user and book management tools.

## ✨ Features

### 🔐 Authentication & User Management
- **User Registration & Login**: Secure user authentication system
- **Role-based Access**: Support for both guest and admin users
- **User Profile Management**: Manage user information and preferences

### 📖 Book Management
- **Book Library**: Browse and search through a comprehensive book collection
- **Book Details**: View detailed information including ratings, reviews, and publication details
- **Add & Update Books**: Admin users can add new books and update existing ones
- **Author-based Browsing**: Filter and view books by specific authors
- **AI-Powered Recommendations**: Get intelligent book suggestions

### ⭐ Review System
- **Book Reviews**: Users can write and read detailed book reviews
- **Rating System**: Rate books and view average ratings
- **Review Management**: Track review history and manage user reviews

### 🔍 Search & Discovery
- **Advanced Search**: Find books by title, author, or other criteria
- **Author Dropdown**: Quick author-based filtering
- **Book Categories**: Organized book browsing experience

## 🛠️ Technology Stack

- **Frontend**: Angular 18 with TypeScript
- **Styling**: Bootstrap 5.3.3 + Animate.css for smooth animations
- **State Management**: Angular Services with RxJS
- **Authentication**: JWT token-based authentication with session storage
- **Testing**: Jasmine & Karma for unit testing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bookbuddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

### Unit Tests
```bash
npm test
# or
ng test
```

Executes unit tests via [Karma](https://karma-runner.github.io) with code coverage reports.

### Development Commands
```bash
# Watch mode for continuous building during development
npm run watch

# Generate new components, services, etc.
ng generate component component-name
ng generate service service-name
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Feature components
│   │   ├── login/          # Authentication components
│   │   ├── register/       
│   │   ├── book/           # Book management components
│   │   ├── review/         # Review system components
│   │   ├── search/         # Search functionality
│   │   └── ...
│   ├── model/              # Data models
│   │   ├── book.ts         # Book entity
│   │   ├── user.ts         # User entity
│   │   ├── review.ts       # Review entity
│   │   └── usertype.ts     # User type definitions
│   ├── services/           # Business logic services
│   │   ├── book.service.ts # Book management service
│   │   ├── user.service.ts # User management service
│   │   └── review.service.ts # Review service
│   ├── guards/             # Route protection
│   │   └── authGuard.ts    # Authentication guard
│   └── ...
```

## 🔒 Authentication & Security

- **JWT Token Authentication**: Secure session management
- **Route Guards**: Protected routes for authenticated users
- **Role-based Access Control**: Different permissions for guest and admin users
- **Session Storage**: Secure token storage with automatic cleanup

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Smooth Animations**: Enhanced user experience with Animate.css
- **Modern UI**: Clean and intuitive user interface
- **Loading States**: User feedback during data operations

## 🚦 Available Routes

- `/` - Home page
- `/login` - User authentication
- `/register` - New user registration
- `/books` - Book library (authenticated users)
- `/book-detail/:id` - Individual book details
- `/add-book` - Add new book (admin only)
- `/add-review/:id` - Add book review
- `/books-by-author` - Browse books by author
- `/search` - Advanced search functionality
- `/show-users` - User management (admin only)
- `/ai-book` - AI-powered book features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Animate.css Documentation](https://animate.style/)

---

**Happy Reading! 📚✨**
