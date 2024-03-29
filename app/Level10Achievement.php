<?php namespace App;

class Level10Achievement extends Achievement {

    public function id(): int {
        return 17;
    }

    public function name(): string {
        return 'Regular';
    }

    public function description(): string {
        return 'Reach 10 levels';
    }

    public function category(): string {
        return 'user';
    }

    public function badge(): string {
        return 'platinum';
    }

    public function progress(): int {
        return 1;
    }

    public function reward() {
        return "Золотая рамка в чате";
    }

    public function whenAwarded() {
    }

}