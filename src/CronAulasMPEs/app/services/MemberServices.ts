import {Injectable} from 'angular2/core';
import { Member, TipoMember } from '../domains/Member';
import {Http, Response} from 'angular2/http';
import { Contact } from '../domains/Contact';
import { Data } from './data';

@Injectable()
export class MemberServices {
    constructor(private http: Http) { }

    getStudents() {
        return Data.students
            .map(d => new Member(d.name, TipoMember.Aluno, d.contact));
    }

    getTeachers() {
        return Data.teachers
            .map(d => new Member(d.name, TipoMember.Professor, d.contact, d.courses));
    }

    getProfessor(name: string): Member {
        let professor = null;
        
        this.getTeachers().forEach(element => {
            if (element.name == name)
                professor = element;
        });
        
        return professor;
    }
    
    getAllCourses(){
        var dis = null
        Data.teachers
            .map(d => dis = d.courses.map(x => new Object({ "title": x.title, "member": d })));
        return dis;    
    }
    
}