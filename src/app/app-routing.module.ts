import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/auth/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),
    title:'Login'
  },
  {
    path: 'student',
    canLoad:[AuthGuard],
    loadChildren: () => import('./feature/student/student.module').then(m => m.StudentModule),
    title:'Student'
  },
  {
    path: 'teacher',
    canLoad:[AuthGuard],//Using this guard we can control module route if user is unauthorized then module is not load.
    // canActivate:[AuthGuard],
    loadChildren: () => import('./feature/teacher/teacher.module').then(m => m.TeacherModule),
    title:'Teacher'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
