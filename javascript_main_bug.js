$(".langue_selecteur").change(function () {langue_change(this.value);});
setTimeout(function () {langue_change("fr")},1000); //simuler le temps de latence d'internet