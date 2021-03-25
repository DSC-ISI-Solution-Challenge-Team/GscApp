import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPwdComponent } from './components/reset-pwd/reset-pwd.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path :'' , redirectTo:'/Home' , pathMatch: 'full'},
  {path :'signin' , component:SignInComponent},
  {path :'ResetPassword' , component:ResetPwdComponent},
  {path:'signup' , component:SignUpComponent},
  {path: 'Home' , component : HomeComponent, canActivate: [AuthGuardService]},
  {path: 'Profile' , component : ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'Location' , component : LocationComponent, canActivate: [AuthGuardService]},
  {path: 'Add' , component : PostComponent , canActivate: [AuthGuardService]},
  {path: 'Community' , component : CommunityComponent, canActivate: [AuthGuardService]},
  
  {path :'**' , redirectTo:'Home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
