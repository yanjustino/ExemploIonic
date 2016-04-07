import {Injectable} from 'angular2/core';

export class Data{
    
    public static students = [
        {
            "name": "Yan Justino",
            "contact": {
                "email": "yanlimaj@gmail.com",
                "phone": "(84) 9 9946-6353"
            }
        },
        {
            "name": "Paulo Machado",
            "contact": {
                "email": "paulohigachi@gmail.com",
                "phone": "(86) 9 9949-8960"
            }
        }
    ];
    
    public static teachers = [
        {
            "name": "Sérgio",
            "contact": {
                "email": "teste@gmail.com",
                "phone": "(86) 9 9999-0000"
            },
            courses:[
                {
                    "title": "ESTRUTURA DE DADOS E ALGORITMOS",
                    "dates":[
                        "12/02/16",
                        "13/02/16",
                        "19/02/16"
                    ]
                }
            ]
        }
    ];   
    
}