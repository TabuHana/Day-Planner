$(document).ready(() => {
  //Make sure JQuery is working
  //console.log('ready!')
  //sets time at the top of page
  $('#currentDay').text(moment().format('dddd, MMM Do'))

  //saves data when button is clicked
  $('.saveBtn').on('click', function () {

    //variables
    let valu = $(this).siblings('.description').val()
    let time = $(this).parent().attr('id')

    //save data into local storage
    localStorage.setItem(time, valu)
  })

  //pulling dates from local storage
  $('#9t').val(localStorage.getItem('9h'))
  $('#10t').val(localStorage.getItem('10h'))
  $('#11t').val(localStorage.getItem('11h'))
  $('#12t').val(localStorage.getItem('12h'))
  $('#13t').val(localStorage.getItem('13h'))
  $('#14t').val(localStorage.getItem('14h'))
  $('#15t').val(localStorage.getItem('15h'))
  $('#16t').val(localStorage.getItem('16h'))
  $('#17t').val(localStorage.getItem('17h'))

  //couldnt solve how to loop through the local storage and grab, did manual instead(see ln 19-27)
  // const getData = () => {
  //   $('.saveBtn').each(function () {
  //     // let valu = $('.time-block').children('.description').val()
  //     // let time = $(this).children().attr('id')
  //     let valu = $(this).siblings('.description').val()
  //     let time = $(this).parent().attr('id')
  //     let blocktime = $('.time-block')

  //     //$(time, '.description').val
  //     let dataUser = localStorage.getItem(time, valu)
  //     console.log(dataUser)
  //     blocktime.children('description').text(dataUser)
  //   })
  // }

  //function that changes the color of the block
  const colorChange = () => {
    //getting the current hours based on local time
    let currTime = moment().hours()
    //let currTime = 8; for testing
    //console.log(moment().hours()); checking how moment time works

    //loops throught each div to grab the time value
    $('.time-block').each(function () {
      //gets the time value of each block
      let timeBlock = parseInt($(this).attr('id').split('h')[0])
      //console.log('color running')

      //IF the time block is less than the current time, then its in the future
      //IF the time block is equal to the current time, its present & everything before is past, everything after is future
      //IF the time block is more than the current time, everything after is past
      if (currTime < timeBlock) {
        $(this).addClass('future')
      } else if (currTime === timeBlock) {
        $(this).removeClass('future')
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('future')
        $(this).removeClass('present')
        $(this).addClass('past')
      }
    })

  }

  //function for getData(), doesnt work
  // getData()
  colorChange()


});