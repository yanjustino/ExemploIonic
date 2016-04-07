import {Page, NavController} from 'ionic-angular';
import {MemberServices} from '../../services/MemberServices'
import {PageCourse} from '../pageCourses/pageCourse';


@Page({
    templateUrl: 'build/pages/page2/page2.html',
    providers: [MemberServices]
})
export class Page2 {
    public students = [];
    public teachers = [];


    constructor(private serv: MemberServices, private nav: NavController) {
        this.students = serv.getStudents();
        this.teachers = serv.getTeachers();
    }

    gotToCoursePage(name: string) {
        let professor = this.serv.getProfessor(name);
        console.log(name);
        this.nav.push(PageCourse, { member: professor });
    }


}
