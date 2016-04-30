import {Page, NavController} from 'ionic-angular';
import {MemberServices} from '../../services/MemberServices'
import {PageCourse} from '../pageCourses/pageCourse';


@Page({
    templateUrl: 'build/pages/page2/page2.html',
    providers: [MemberServices]
})
export class Page2 {
    public students;
    public teachers;

    constructor(private serv: MemberServices, private nav: NavController) {
        serv.getStudents().subscribe(data => this.students = data);
        serv.getTeachers().subscribe(data => this.teachers = data);
    }

    gotToCoursePage(name: string) {
        this.nav.push(PageCourse, { member: name });
    }
}