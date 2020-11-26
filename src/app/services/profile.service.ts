import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 

  private username: string;
  private clientsecret= '7283b3c187938d1c40da5699a6e2d821bf241df6';
  private clientid='Iv1.4e95c559543d7369';
  private repos;

  
  constructor(private profileService : HttpClient) {
    console.log("service is ready");
   // this.username='kirancultyvate';
   }

   getProfileInfo():Observable<any>{
  	return this.profileService.get<any>("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  getProfileRepos(){
  	return this.profileService.get<any>("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  updateProfile(username:string){
  	this.username = username;
  }
  

}
