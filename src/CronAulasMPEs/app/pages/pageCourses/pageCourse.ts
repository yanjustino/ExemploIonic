import {Page, NavParams} from 'ionic-angular';
import { Member } from '../../domains/Member';


@Page({
    templateUrl: 'build/pages/pageCourses/pageCourse.html'
})
export class PageCourse {
    public teacher: Member;

    constructor(private nav: NavParams) {
        this.teacher = nav.get('member')
    }
}
