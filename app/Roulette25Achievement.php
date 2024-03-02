<?php namespace App;

class Roulette25Achievement extends Achievement {

    public function id(): int {
        return 26;
    }

    public function name(): string {
        return 'Croupier';
    }

    public function description(): string {
        return 'Win x36 multiplier in Roulette 25 times';
    }

    public function category(): string {
        return 'roulette';
    }

    public function badge(): string {
        return 'gold';
    }

    public function progress(): int {
        return 25;
    }

    public function reward() {
        return null;
    }

    public function whenAwarded() {
    }

}