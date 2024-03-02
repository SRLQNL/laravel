<?php namespace App;

class Tower50Achievement extends Achievement {

    public function id(): int {
        return 22;
    }

    public function name(): string {
        return 'At altitude';
    }

    public function description(): string {
        return 'Get to the end of Tower 50 times';
    }

    public function category(): string {
        return 'tower';
    }

    public function badge(): string {
        return 'silver';
    }

    public function progress(): int {
        return 50;
    }

    public function reward() {
        return null;
    }

    public function whenAwarded() {
    }

}