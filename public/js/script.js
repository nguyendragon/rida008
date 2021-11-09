var countDownDate = new Date("Hanoi, 2030 15:37:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var minute = Math.ceil(minutes / 20 - 1);
    if (minutes == 59) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 58) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 57) { var minute = Math.ceil(minutes / 20 - 3); }
    if (minutes == 56) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 55) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 54) { var minute = Math.ceil(minutes / 20 - 3); }
    if (minutes == 53) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 52) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 51) { var minute = Math.ceil(minutes / 20 - 3); }
    if (minutes == 50) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 49) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 48) { var minute = Math.ceil(minutes / 20 - 3); }
    if (minutes == 47) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 46) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 45) { var minute = Math.ceil(minutes / 20 - 3); }
    if (minutes == 44) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 43) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 42) { var minute = Math.ceil(minutes / 20 - 3); } else if (minutes == 41) { var minute = Math.ceil(minutes / 20 - 1); }
    if (minutes == 40) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 39) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 38) { var minute = Math.ceil(minutes / 20); }
    if (minutes == 37) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 36) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 35) { var minute = Math.ceil(minutes / 20); }
    if (minutes == 34) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 33) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 32) { var minute = Math.ceil(minutes / 20); }
    if (minutes == 31) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 30) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 29) { var minute = Math.ceil(minutes / 20); }
    if (minutes == 28) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 27) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 26) { var minute = Math.ceil(minutes / 20); }
    if (minutes == 25) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 24) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 23) { var minute = Math.ceil(minutes / 20); }
    if (minutes == 22) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 21) { var minute = Math.ceil(minutes / 20 - 2); } else if (minutes == 20) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 19) { var minute = Math.ceil(minutes / 20); } else if (minutes == 18) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 17) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 16) { var minute = Math.ceil(minutes / 20); } else if (minutes == 15) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 14) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 13) { var minute = Math.ceil(minutes / 20); } else if (minutes == 12) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 11) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 10) { var minute = Math.ceil(minutes / 20); } else if (minutes == 9) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 8) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 7) { var minute = Math.ceil(minutes / 20); } else if (minutes == 6) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 5) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 4) { var minute = Math.ceil(minutes / 20); } else if (minutes == 3) { var minute = Math.ceil(minutes / 20 - 1); } else if (minutes == 2) { var minute = Math.ceil(minutes / 20 + 1); } else if (minutes == 1) { var minute = Math.ceil(minutes / 20); } else if (minutes == 0) { var minute = Math.ceil(minutes / 20); }
    document.getElementById("demo").innerHTML = "0" + minute.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    // if (minute == 0 && seconds <= 30 && seconds >= 1) {
    //     var join_xanh = document.getElementById("join_xanh");
    //     var at = document.createAttribute("disabled");
    //     at.value = "disabled";
    //     join_xanh.setAttributeNode(at);
    //     var join_do = document.getElementById("join_do");
    //     var att = document.createAttribute("disabled");
    //     att.value = "disabled";
    //     join_do.setAttributeNode(att);
    //     var join_tim = document.getElementById("join_tim");
    //     var attt = document.createAttribute("disabled");
    //     attt.value = "disabled";
    //     join_tim.setAttributeNode(attt);
    //     var join_0 = document.getElementById("join_0");
    //     var ss = document.createAttribute("disabled");
    //     ss.value = "disabled";
    //     join_0.setAttributeNode(ss);
    //     var join_1 = document.getElementById("join_1");
    //     var sd = document.createAttribute("disabled");
    //     sd.value = "disabled";
    //     join_1.setAttributeNode(sd);
    //     var join_2 = document.getElementById("join_2");
    //     var sf = document.createAttribute("disabled");
    //     sf.value = "disabled";
    //     join_2.setAttributeNode(sf);
    //     var join_3 = document.getElementById("join_3");
    //     var sa = document.createAttribute("disabled");
    //     sa.value = "disabled";
    //     join_3.setAttributeNode(sa);
    //     var join_4 = document.getElementById("join_4");
    //     var sc = document.createAttribute("disabled");
    //     sc.value = "disabled";
    //     join_4.setAttributeNode(sc);
    //     var join_5 = document.getElementById("join_5");
    //     var sv = document.createAttribute("disabled");
    //     sv.value = "disabled";
    //     join_5.setAttributeNode(sv);
    //     var join_6 = document.getElementById("join_6");
    //     var se = document.createAttribute("disabled");
    //     se.value = "disabled";
    //     join_6.setAttributeNode(se);
    //     var join_7 = document.getElementById("join_7");
    //     var sg = document.createAttribute("disabled");
    //     sg.value = "disabled";
    //     join_7.setAttributeNode(sg);
    //     var join_8 = document.getElementById("join_8");
    //     var sb = document.createAttribute("disabled");
    //     sb.value = "disabled";
    //     join_8.setAttributeNode(sb);
    //     var join_9 = document.getElementById("join_9");
    //     var jh = document.createAttribute("disabled");
    //     jh.value = "disabled";
    //     join_9.setAttributeNode(jh);
    //     document.getElementById("chon").style = "z-index: 2050; display: none;";
    //     document.getElementById("chon1").style = "z-index: 2051; display: none;";
    //     document.getElementById("so").style = "z-index: 2050; display: none;";
    //     document.getElementById("numbero").style = "z-index: 2051; display: none;";
    //     document.getElementById("body").className = "";
    // } else if (minute == 0 && seconds <= 0.9) {
    //     document.getElementById("loading").style = "opacity: 1;display: flex;";
    //     setTimeout(function() { document.getElementById("loading").style = "opacity: 0;display: none;"; }, 1300);
    // } else {
    //     document.getElementById("join_xanh").removeAttribute("disabled");
    //     document.getElementById("join_do").removeAttribute("disabled");
    //     document.getElementById("join_tim").removeAttribute("disabled");
    //     document.getElementById("join_1").removeAttribute("disabled");
    //     document.getElementById("join_2").removeAttribute("disabled");
    //     document.getElementById("join_3").removeAttribute("disabled");
    //     document.getElementById("join_4").removeAttribute("disabled");
    //     document.getElementById("join_5").removeAttribute("disabled");
    //     document.getElementById("join_6").removeAttribute("disabled");
    //     document.getElementById("join_7").removeAttribute("disabled");
    //     document.getElementById("join_8").removeAttribute("disabled");
    //     document.getElementById("join_9").removeAttribute("disabled");
    //     document.getElementById("join_0").removeAttribute("disabled");
    // }
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }
}, 1000);