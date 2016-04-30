import {Page, NavController} from 'ionic-angular';
import {MemberServices} from '../../services/MemberServices'
import {PageCourse} from '../pageCourses/pageCourse';


@Page({
    templateUrl: 'build/pages/page3/page3.html',
    providers: [MemberServices]
})
export class Page3 {
    public courses = [];

    constructor(private serv: MemberServices, private nav: NavController) {
        this.courses = serv.getAllCourses();
        console.log(this.courses)
    }
    
    gotToCoursePage(name: string) {
        this.nav.push(PageCourse, { member: name });
    }    
}
