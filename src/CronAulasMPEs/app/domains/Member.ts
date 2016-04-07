import {Component} from 'angular2/core';
import {Contact} from './Contact';
import {Course} from './Course';

export enum TipoMember {
    Professor,
    Aluno,
    Coordenacao
}

export class Member {
    constructor(public name: string, public type: TipoMember,
        public contact: Contact, public courses?: Course[]) {
    }
}
