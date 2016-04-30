import {Page, NavParams} from 'ionic-angular';
import { Member, TipoMember } from '../../domains/Member';
import {MemberServices} from '../../services/MemberServices'


@Page({
    templateUrl: 'build/pages/pageCourses/pageCourse.html',
    providers: [MemberServices]
})
export class PageCourse {
    public teacher: Member;

    constructor(private serv: MemberServices, private nav: NavParams) {
        let name = nav.get('member');
        this.teacher = this.serv.getTeachers()
            .subscribe(data => this.processTeacher(data, name));
    }

    private processTeacher(data, name) {
        data.forEach(element => {
            if (element.name == name) {
                this.teacher = new Member(element.name, TipoMember.Professor,
                    element.contact, element.courses);
            }
        });
    }
}
