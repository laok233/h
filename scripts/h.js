const h = extend(UnitType, "h", {
    health: 1000,
    hitSize: 20,
    speed: 5,
    flying: true,
    targetAir: true,
    range: 300,
})

h.constructor = () => extend(MechUnit, {});
h.weapons.add(require("weapon"));
