// var classType 
// var timeZone 
// var duration
// var frequency 
// var time 
// var discount
// var price 
// var total 




//  var temp_time
//  var temp_frequency
//  var temp_duration
//  var temp_timeZone



//      temp_time = localStorage.getItem("minute").slice(0, -1)
//      temp_frequency = localStorage.getItem("frequency").slice(0, 2).slice(1, 2)
//      temp_duration = localStorage.getItem("duration").slice(0, 1)
//      temp_timeZone = localStorage.getItem("timeZone") == '프라임' ? 'Prime' : 'Economy'

//      classType = localStorage.getItem("type") == '전화영어' ? 'Phone' : 'Video'
//      time = temp_time == 10 ? 10 : temp_time == 20 ? 20 : 30
//      frequency = temp_frequency == 2 ? 2 : temp_frequency == 3 ? 3 : 5
//      duration = temp_duration == 4 ? 1 : temp_duration == 12 ? 3 : temp_duration == 6 ? 6 : 12
//      timeZone = temp_timeZone

//      console.log(classType)
//     console.log(time)
//     console.log(frequency)
//     console.log(duration)
//     console.log(timeZone)

//     function sayHi(){
//         console.log('hi')
//     }

//     switch (classType) {

//         case 'Phone':

//             switch (timeZone) {

//                 case 'Prime':

//                     switch (time) {

//                         case 10:

//                             switch (duration) {

//                                 case 1:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '64,000'
//                                             discount = 0
//                                             total = '64,000'

//                                             break;

//                                         case 3:

//                                             price = '86,000'
//                                             discount = 0
//                                             total = '86,000'

//                                             break;

//                                         case 5:

//                                             price = '109,000'
//                                             discount = 0
//                                             total = '109,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 3:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '192,000'
//                                             discount = '19, 000원 / (10 % OFF)'
//                                             total = '173,000'

//                                             break;

//                                         case 3:

//                                             price = '258,000'
//                                             discount = '26, 000원 / (10 % OFF)'
//                                             total = '232,000'

//                                             break;

//                                         case 5:

//                                             price = '327,000'
//                                             discount = '33, 000원 / (10 % OFF)'
//                                             total = '294,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 6:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '384,000'
//                                             discount = '58, 000원 / (15 % OFF)'
//                                             total = '326,000'

//                                             break;

//                                         case 3:

//                                             price = '516,000'
//                                             discount = '77, 000원 / (15 % OFF)'
//                                             total = '439,000'

//                                             break;

//                                         case 5:

//                                             price = '654,000'
//                                             discount = '98, 000원 / (15 % OFF)'
//                                             total = '556,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 12:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '768,000'
//                                             discount = '154, 000원 / (20 % OFF)'
//                                             total = '614,000'

//                                             break;

//                                         case 3:

//                                             price = '1,032,000'
//                                             discount = '206, 000원 / (20 % OFF)'
//                                             total = '826,000'


//                                             break;

//                                         case 5:

//                                             price = '1,308,000'
//                                             discount = '262, 000원 / (20 % OFF)'
//                                             total = '1,046,000'


//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 default:

//                                     console.log('duration error');

//                                     break;
//                             }


//                             break;

//                         case 20:

//                             switch (duration) {

//                                 case 1:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '128,000'
//                                             discount = 0
//                                             total = '128,000'

//                                             break;

//                                         case 3:

//                                             price = '172,000'
//                                             discount = 0
//                                             total = '172,000'

//                                             break;

//                                         case 5:

//                                             price = '218,000'
//                                             discount = 0
//                                             total = '218,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 3:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '384,000'
//                                             discount = '38, 000원 / (10 % OFF)'
//                                             total = '346,000'


//                                             break;

//                                         case 3:

//                                             price = '516,000'
//                                             discount = '52, 000원 / (10 % OFF)'
//                                             total = '464,000'

//                                             break;

//                                         case 5:

//                                             price = '654,000'
//                                             discount = '66, 000원 / (10 % OFF)'
//                                             total = '588,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 6:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '768,000'
//                                             discount = '116, 000원 / (15 % OFF)'
//                                             total = '652,000'

//                                             break;

//                                         case 3:

//                                             price = '1,032,000'
//                                             discount = '154, 000원 / (15 % OFF)'
//                                             total = '878,000'

//                                             break;

//                                         case 5:

//                                             price = '1,308,000'
//                                             discount = '196, 000원 / (15 % OFF)'
//                                             total = '1,112,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 12:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '1,536,000'
//                                             discount = '308, 000원 / (20 % OFF)'
//                                             total = '1,228,000'

//                                             break;

//                                         case 3:

//                                             price = '2,064,000'
//                                             discount = '412, 000원 / (20 % OFF)'
//                                             total = '1,652,000'

//                                             break;

//                                         case 5:

//                                             price = '2,616,000'
//                                             discount = '524, 000원 / (20 % OFF)'
//                                             total = '2,092,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 default:

//                                     console.log('duration error');

//                                     break;
//                             }

//                             break;

//                         case 30:

//                             switch (duration) {

//                                 case 1:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '192,000'
//                                             discount = 0
//                                             total = '192,000'

//                                             break;

//                                         case 3:

//                                             price = '258,000'
//                                             discount = 0
//                                             total = '258,000'

//                                             break;

//                                         case 5:

//                                             price = '327,000'
//                                             discount = 0
//                                             total = '327,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 3:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '576,000'
//                                             discount = '57, 000원 / (10 % OFF)'
//                                             total = '519,000'

//                                             break;

//                                         case 3:

//                                             price = '774,000'
//                                             discount = '78, 000원 / (10 % OFF)'
//                                             total = '696,000'

//                                             break;

//                                         case 5:

//                                             price = '981,000'
//                                             discount = '99, 000원 / (10 % OFF)'
//                                             total = '882,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 6:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '1,152,000'
//                                             discount = '174, 000원 / 15 % OFF)'
//                                             total = '978,000'

//                                             break;

//                                         case 3:

//                                             price = '1,548,000'
//                                             discount = '231, 000원 / 15 % OFF)'
//                                             total = '1,317,000'

//                                             break;

//                                         case 5:

//                                             price = '1,962,000'
//                                             discount = '294, 000원 / 15 % OFF)'
//                                             total = '1,668,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 12:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '2,304,000'
//                                             discount = '462, 000원 / 20 % OFF)'
//                                             total = '1,842,000'

//                                             break;

//                                         case 3:

//                                             price = '3,096,000'
//                                             discount = '618, 000원 / 20 % OFF)'
//                                             total = '2,478,000'

//                                             break;

//                                         case 5:

//                                             price = '3,924,000'
//                                             discount = '786, 000원 / 20 % OFF)'
//                                             total = '3,138,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 default:

//                                     console.log('duration error');

//                                     break;
//                             }

//                             break;


//                         default:

//                             console.log('time error');

//                             break;
//                     }

//                     break;

//                 case 'Economy':

//                     switch (time) {

//                         case 10:

//                             switch (duration) {

//                                 case 1:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '64,000'
//                                             discount = '6, 000원 / 10 % OFF)'
//                                             total = '58,000'

//                                             break;

//                                         case 3:

//                                             price = '86,000'
//                                             discount = '9, 000원 / 10 % OFF)'
//                                             total = '77,000'

//                                             break;

//                                         case 5:

//                                             price = '109,000'
//                                             discount = '11, 000원 / 10 % OFF)'
//                                             total = '98,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 3:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '192,000'
//                                             discount = '38, 000원 / 20 % OFF)'
//                                             total = '154,000'

//                                             break;

//                                         case 3:

//                                             price = '258,000'
//                                             discount = '52, 000원 / 20 % OFF)'
//                                             total = '206,000'

//                                             break;

//                                         case 5:

//                                             price = '327,000'
//                                             discount = '65, 000원 / 20 % OFF)'
//                                             total = '262,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 6:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '384,000'
//                                             discount = '96, 000원 / 25 % OFF)'
//                                             total = '288,000'

//                                             break;

//                                         case 3:

//                                             price = '516,000'
//                                             discount = '129, 000원 / 25 % OFF)'
//                                             total = '387,000'

//                                             break;

//                                         case 5:

//                                             price = '654,000'
//                                             discount = '163, 000원 / 25 % OFF)'
//                                             total = '491,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 12:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '768,000'
//                                             discount = '230, 000원 / 30 % OFF)'
//                                             total = '538,000'


//                                             break;

//                                         case 3:

//                                             price = '1,032,000 '
//                                             discount = '310, 000원 / 30 % OFF)'
//                                             total = '722,000'


//                                             break;

//                                         case 5:

//                                             price = '1,308,000'
//                                             discount = '392, 000원 / 30 % OFF)'
//                                             total = '916,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 default:

//                                     console.log('duration error');

//                                     break;
//                             }

//                             break;

//                         case 20:

//                             switch (duration) {

//                                 case 1:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '128,000'
//                                             discount = '24, 000원 / 10 % OFF)'
//                                             total = '104,000'

//                                             break;

//                                         case 3:

//                                             price = '172,000'
//                                             discount = '33, 000원 / 10 % OFF)'
//                                             total = '139,000'

//                                             break;

//                                         case 5:

//                                             price = '218,000'
//                                             discount = '42, 000원 / 10 % OFF)'
//                                             total = '176,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 3:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '218,000'
//                                             discount = '107, 000원 / 20 % OFF)'
//                                             total = '277,000'

//                                             break;

//                                         case 3:

//                                             price = '218,000'
//                                             discount = '145, 000원 / 20 % OFF)'
//                                             total = '371,000'

//                                             break;

//                                         case 5:

//                                             price = '218,000'
//                                             discount = '182, 000원 / 20 % OFF)'
//                                             total = '472,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 6:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '768,000'
//                                             discount = '250, 000원 / 25 % OFF)'
//                                             total = '518,000'

//                                             break;

//                                         case 3:

//                                             price = '1,032,000'
//                                             discount = '335, 000원 / 25 % OFF)'
//                                             total = '1,308,000'

//                                             break;

//                                         case 5:

//                                             price = '218,000'
//                                             discount = '424, 000원 / 25 % OFF)'
//                                             total = '884,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 12:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '1,536,000'
//                                             discount = '568, 000원 / 30 % OFF)'
//                                             total = '968,000'

//                                             break;

//                                         case 3:

//                                             price = '2,064,000'
//                                             discount = '764, 000원 / 30 % OFF)'
//                                             total = '1,300,000'

//                                             break;

//                                         case 5:

//                                             price = '2,616,000'
//                                             discount = '967, 000원 / 30 % OFF)'
//                                             total = '1,649,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 default:

//                                     console.log('duration error');

//                                     break;
//                             }

//                             break;


//                         case 30:

//                             switch (duration) {

//                                 case 1:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '192,000'
//                                             discount = '44, 000원 / 10 % OFF)'
//                                             total = '148,000'


//                                             break;

//                                         case 3:

//                                             price = '258,000'
//                                             discount = '62, 000원 / 10 % OFF)'
//                                             total = '196,000'

//                                             break;

//                                         case 5:

//                                             price = '327,000'
//                                             discount = '77, 000원 / 10 % OFF)'
//                                             total = '250,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 3:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '576,000'
//                                             discount = '183, 000원 / 20 % OFF)'
//                                             total = '393,000'

//                                             break;

//                                         case 3:

//                                             price = '774,000'
//                                             discount = '249, 000원 / 20 % OFF)'
//                                             total = '525,000'

//                                             break;

//                                         case 5:

//                                             price = '981,000'
//                                             discount = '313, 000원 / 20 % OFF)'
//                                             total = '668,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 6:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '1,152,000'
//                                             discount = '418, 000원 / 25 % OFF)'
//                                             total = '734,000'

//                                             break;

//                                         case 3:

//                                             price = '1,548,000'
//                                             discount = '561, 000원 / 25 % OFF)'
//                                             total = '987,000'

//                                             break;

//                                         case 5:

//                                             price = '1,962,000'
//                                             discount = '710, 000원 / 25 % OFF)'
//                                             total = '1,252,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 case 12:

//                                     switch (frequency) {

//                                         case 2:

//                                             price = '2,304,000'
//                                             discount = '932, 000원 / 30 % OFF)'
//                                             total = '1,372,000'

//                                             break;

//                                         case 3:

//                                             price = '3,096,000'
//                                             discount = '1,255, 000원 / 30 % OFF)'
//                                             total = '1,841,000'

//                                             break;

//                                         case 5:

//                                             price = '3,924,000'
//                                             discount = '1,588, 000원 / 30 % OFF)'
//                                             total = '2,336,000'

//                                             break;

//                                         default:

//                                             console.log('frequency error');

//                                             break;
//                                     }

//                                     break;

//                                 default:

//                                     console.log('duration error');

//                                     break;
//                             }

//                             break;


//                         default:

//                             console.log('time error');

//                             break;
//                     }

//                     break;

//                 default:

//                     console.log('time zone error')

//                     break;
//             }

//             break;

//         case 'Video':


//             break;

//         default:

//             console.log('class type Error')

//             break;
//     }



//     // document.getElementById('enrollment-price').innerText = price
//     // document.getElementById('enrollment-discount').innerText = discount
//     // document.getElementById('enrollment-total').innerText = total




// export default {sayHi}

