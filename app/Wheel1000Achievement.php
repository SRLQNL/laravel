<?php namespace App;

class Wheel1000Achievement extends Achievement {

    public function id(): int {
        return 41;
    }

    public function name(): string {
        return 'Wheel';
    }

    public function description(): string {
        return 'Win at Wheel 1000 times';
    }

    public function category(): string {
        return 'wheel';
    }

    public function badge(): string {
        return 'gold';
    }

    public function progress(): int {
        return 1000;
    }

    public function reward() {
        return null;
    }

    public function whenAwarded() {
    }

}