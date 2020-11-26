import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { RepoPageComponent } from './components/repo-page/repo-page.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
    {
        path:'',pathMatch: 'full',component:ProfileComponent
      },
      {
    
      path:'repoPage',component:RepoPageComponent
    } 
];
@NgModule({ 
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule] 
}) 
export class AppRoutingModule { }export const 
RoutingComponent = [ProfileComponent,RepoPageComponent];
