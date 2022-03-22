module.exports = extend(Weapon, {
    rotate: true,
    mirror: false,
    reload: 10,
    x: 0,
    y: 0,
    shootSound: Sounds.none,
    bullet: extend(BasicBulletType, {
        damage: 1000,
        width: 2,
        height: 2,
        instantDisappear: false,
        speed: 100,
    
        hitEffect: Fx.none,
        shootEffect: Fx.none,
        smokeEffect: Fx.none,
        despawnEffect: Fx.none,
    })
});