import { Adress } from './adress';
import { Company } from './company';
import { Geo } from './geo';
import { ComponentFactory } from '@angular/core';

export class User {
    constructor (
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public adress: Adress,
        public phone: string,
        public website: string, 
        public company: Company,
        public geo: Geo
    ){}
}