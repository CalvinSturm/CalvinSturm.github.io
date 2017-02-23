$(document).ready(function(){
    $('#header').delay(1000).fadeOut(800);
});

var dragon = {
    health: 1200,
    damage: 300,
    gold: 2000,
    difficultyMulti: 1
};

var hero = {
    name: "",
    health: 1000,
    damage: 250,
    foodNum: 0,
    crit: 0,
    kills: 0,
    gold: 1000

};

var meats = {
    name: "meats",
    cost: 1000,
    hp: 400
};

var sword = {
    name: "sword",
    cost: 1500,
    damage: 400,
    stock: true

};

var ak47 = {
    name: "ak47",
    cost: 4000,
    damage: 1200,
    stock: true

};

function load() {
    var dragonHP = document.getElementById("dragonHP");
    var heroHP = document.getElementById("heroHP");
    var heroStat = document.getElementById("heroStat");
    var dragonStat = document.getElementById("dragonStat");
    var rationButton = document.getElementById("rationButton");
    var gold = document.getElementById("gold");
    gold.innerHTML = "Coin bag: " + hero.gold + "gp";
    rationButton.innerHTML = "Eat Ration: 0";
    dragonHP.innerHTML = dragon.health;
    heroHP.innerHTML = hero.health;

}

function reset() {
    alert("Thank you for playing! Again?");
    /*
    hero.health = 1000;
    dragon.health = Math.floor(1200 * 1.2);
    */
    location.reload();
}

function eat() {
    if(hero.foodNum <= 0) {
        return alert("No rations available!");
    }
    else {
        heroStat.innerHTML = "You eat a ration and are healed for 400HP";
        var heroHP = document.getElementById("heroHP");
        hero.health += meats.hp;
        hero.foodNum--;
        rationButton.innerHTML = "Eat Ration: " + hero.foodNum;
        heroHP.innerHTML = hero.health;

    }

}

function buyRation() {
    if(hero.gold < 1000) {
        alert("You are out of gold!");
    }
    else {
        heroStat.innerHTML = "1 ration was added to your backpack!";
        hero.foodNum += 1;
        rationButton.innerHTML = "Eat Ration: " + hero.foodNum;        
        hero.gold -= meats.cost;
        gold.innerHTML = "Coin bag: " + hero.gold + "gp";

    }

}

function hit(damage) {
    return Math.random() * damage * dragon.difficultyMulti;

}

function attackDragon() {
    var heroHit = Math.floor(hit(hero.damage));
    var dragonHit = Math.floor(hit(dragon.damage));
        if (dragon.health <= 0) {
            dragonHP.innerHTML = 0;
            alert("You have defeated the dragon!");
            heroHP.innerHTML = hero.health;
            reset();

        } else {
            dragon.health -= heroHit;
            if(dragon.health <= 0) {
                dragonHP.innerHTML = 0;

            }

            heroStat.innerHTML = "You hit the dragon for " + heroHit + " damage. The dragon has " + dragon.health + " health left.";
            hero.health -= dragonHit;
            if(hero.health <= 0) {
                hero.health = 0;
                alert("The dragon has defeated you!");
                reset();
            }
            dragonStat.innerHTML = "The dragon burns you for " + dragonHit + " damage. You have " + hero.health + " health left.";
            if (hero.health < 600 && hero.health > 0) {
                //alert("You are dangerously low on health!");
            }
            heroHP.innerHTML = hero.health;
            dragonHP.innerHTML = dragon.health;

        }

}

$(function(){    
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'        
        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
        $.createModal({
            title:'Resume 2017',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;        
    });    
})
