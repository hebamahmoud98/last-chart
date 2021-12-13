import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Project} from '../models/project'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects:Project[]=[]
  private httpoptions={};

  constructor( private httpClient:HttpClient){
    let token=localStorage.getItem('access_token')
    this.httpoptions={
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'token':`${token}`
      })
    }

  }

  getAllProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${environment.APIURL}/projects/`,this.httpoptions);
      console.log(environment.APIURL);
  };
// get no of pending projects
  getNoOfPendingProjects():Observable<any>{
    return this.httpClient.get(environment.APIURL +'/project/pending')
  }
  getNoOfCompletedProjects():Observable<any>{
    return this.httpClient.get(environment.APIURL +'/project/completed')
  }

  getProjectByID(pID: number):Observable<Project>
  {
    return this.httpClient.get<Project>(environment.APIURL +'/projects/oneproject/'+pID);
  };
  deleteProject(pID: number):Observable<Project>
  {
      return this.httpClient.delete<any>(environment.APIURL + '/projects/deleteproject/' +pID)
    .pipe(map((res:any)=>{
      return res
    }))
  };
  UpdateProject(_id:any,data:any){
    console.log(_id)
    return this.httpClient.put<Project>(environment.APIURL+'/projects/'+_id,data,this.httpoptions)
    .pipe(map((res:any)=>{
      return res
    }))
  }







}
