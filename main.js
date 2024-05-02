time = 600
playing = false

window.onload = function(){
    document.getElementById('dot').onclick = function() {pause_unpause
}}

function start(){
    end()
    var endDate = new Date().getTime() + (time+1)*1000;
    playing = true
    var timer = setInterval(function() {
        if (playing == true){
            let now = new Date().getTime();
            let time_elepsed = endDate - now;
            let time_elepsed_seconds = Math.floor(time_elepsed/1000)- Math.floor(time_elepsed/ (1000 * 60 * 60 * 24))
            update_time(time_elepsed_seconds)
        }
        else{
            clearInterval(timer);
        }
    }, 500);
}

function end(){
    //console.log(time)
    time = collect_input()
    //console.log(time)
    update_time(time)
    playing = false
}

function pause_unpause(){
    if (playing == true){
        end()
    }
    else{
        start()
    }
}

function collect_input(){
    input = document.getElementById('timer').value
    input_array = input.split(':');
    let seconds = parseInt(input_array[input_array.length-1],10)
    if (input_array.length >= 2){
        seconds += parseInt(input_array[input_array.length-2],10) * 60
        if (input_array.length >= 3){
            seconds += parseInt(input_array[input_array.length-3],10) * 3600
        }
    }
    return seconds
}

function update_time(_temp_time){
    time_string = ''
    temp_time = _temp_time
    if (temp_time>= 60){
        if (temp_time>= 3600){
            time_string = time_string + String(Math.floor(temp_time/3600)) + ':'
            temp_time -= (Math.floor(temp_time/3600))*3600
            if (Math.floor(temp_time/60) < 10){
                time_string = time_string + '0' + String(Math.floor(temp_time/60)) + ':'
            }
            else{
                time_string = time_string + String(Math.floor(temp_time/60)) + ':'
            }
        }
        else{
            time_string = time_string + String(Math.floor(temp_time/60)) + ':'
        }
        temp_time -= Math.floor(temp_time/60)*60
        if (temp_time < 10){
            time_string = time_string + '0' + String(temp_time)
        }
        else{
            time_string = time_string + String(temp_time)
        }
    }
    else{
        time_string = time_string + String(temp_time)
    }
    document.getElementById('timer').value = time_string
}



/*
function arc_end(_angle){
    let angle = _angle
    document.getElementById('end').style.mozTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.msTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.oTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.transform = 'rotate('+String(angle)+' deg)';
}*/