/// <reference path="../common/position.ts" />

'use strict';

module apmApp {
    export interface IPlayer {
        firstName: string;
        lastName: string;
        number: number;
        team: string;
        position: Position;
    }

    export class Player implements IPlayer {
        constructor(public firstName: string,
        public lastName: string,
        public number: number,
        public team: string,
        public position: Position) {

        }

    }
}