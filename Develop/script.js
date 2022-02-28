$(document).ready( ()=> {
  //Make sure JQuery is working
  console.log('ready!')
  //sets time at the top of page
  $('#currentDay').text(moment().format('dddd, MMM Do'))

  //saves data when button is clicked
  $('.saveBtn').on('click', function() {

    //variables
    let time = $(this).parent().attr('id')
    let val = $(this).siblings('.description').val()

    //save data into local storage
    localStorage.setItem(time, val)
  })
  
  //pulling dates from local storage
  $('#9-h .description').val(localStorage.getItem('9h'))
  $('#10-h .description').val(localStorage.getItem('10h'))
  $('#11-h .description').val(localStorage.getItem('11h'))
  $('#12-h .description').val(localStorage.getItem('12h'))
  $('#13-h .description').val(localStorage.getItem('1h'))
  $('#14-h .description').val(localStorage.getItem('2h'))
  $('#15-h .description').val(localStorage.getItem('3h'))
  $('#16-h .description').val(localStorage.getItem('4h'))
  $('#17-h .description').val(localStorage.getItem('5h'))

  //function that changes the color of the block
  const colorChange = ()=>{
    //getting the current hours based on local time
    //let currTime = moment().hours()
    let currTime =8
    console.log(moment().hours())

    //loops throught each div to grab the time value
    $('.time-block').each(function() {
      //gets the time value of each block
      let timeBlock = parseInt($(this).attr('id').split('h')[0])
      console.log('color running')

      //IF the time block is less than the current time, then its in the future
      //IF the time block is equal to the current time, its present & everything before is past, everything after is future
      //IF the time block is more than the current time, everything after is past
      if(currTime < timeBlock){
        $(this).addClass('future')
      }else if(currTime === timeBlock){
        $(this).removeClass('future')
        $(this).removeClass('past')
        $(this).addClass('present')
      }else{
        $(this).removeClass('future')
        $(this).removeClass('present')
        $(this).addClass('past')
      }
    })

  }
  
  colorChange()


});