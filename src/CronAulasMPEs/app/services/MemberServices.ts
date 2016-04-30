import { Member, TipoMember } from '../domains/Member';
import { Contact } from '../domains/Contact';
import {Observable} from 'rxjs/Rx';

import { Inject } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

export class MemberServices {
    private http;

    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }

    getStudents() {
        return this.http.get('http://127.0.0.1:1337/membros/alunos')
            .map(res => res.json())
    }

    getTeachers() {
        return this.http.get('http://127.0.0.1:1337/membros/professores')
            .map(res => res.json())
            
    }

    getAllCourses() {
        let dis = []

        this.getTeachers()
            .subscribe(data => this.processCourses(data, dis));

        return dis;
    }
    
    private processCourses(data, out){
        data.forEach(element => {
            element.courses.forEach(course =>{
                 out.push(new Object({ "title": course.title, "member": element }))
            });
        });        
    }
}