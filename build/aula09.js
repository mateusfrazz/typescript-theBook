"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vrmelho"] = "#f00";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
//define valores de forma automatico
var typeUser;
(function (typeUser) {
    typeUser[typeUser["USER"] = 0] = "USER";
    typeUser[typeUser["ADMIN"] = 1] = "ADMIN";
    typeUser[typeUser["SUPER"] = 2] = "SUPER";
})(typeUser || (typeUser = {}));
console.log(typeUser.SUPER);
